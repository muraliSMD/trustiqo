"use client";

import { useEffect, useState } from "react";
import { Loader2, Mail, Trash2 } from "lucide-react";

export default function QuotesPage() {
  const [quotes, setQuotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [updating, setUpdating] = useState(null);

  useEffect(() => {
     fetchQuotes();
  }, []);

  const fetchQuotes = async () => {
    try {
      const res = await fetch("/api/admin/quotes");
      const data = await res.json();
      if(data.success) setQuotes(data.quotes);
    } catch (error) {
      console.error("Failed to fetch quotes", error);
    } finally {
      setLoading(false);
    }
  };

  const handleStatusChange = async (id, newStatus) => {
    setUpdating(id);
    try {
      const res = await fetch("/api/admin/quotes", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, status: newStatus }),
      });
      
      if (res.ok) {
        // Optimistic update
        setQuotes(quotes.map(q => q._id === id ? { ...q, status: newStatus } : q));
      }
    } catch (error) {
      alert("Failed to update status");
    } finally {
      setUpdating(null);
    }
  };

  const statusColors = {
    'New': 'text-blue-400 bg-blue-500/10 border-blue-500/20',
    'Contacted': 'text-yellow-400 bg-yellow-500/10 border-yellow-500/20',
    'Closed': 'text-green-400 bg-green-500/10 border-green-500/20',
  };

  if (loading) return <div className="p-10 text-white"><Loader2 className="animate-spin" /> Loading quotes...</div>;

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Leads & Quotes Management</h1>
      
      <div className="overflow-x-auto rounded-2xl border border-white/10">
        <table className="w-full text-left bg-zinc-900">
          <thead className="bg-black text-gray-400 uppercase text-xs font-semibold">
            <tr>
              <th className="px-6 py-4">Date</th>
              <th className="px-6 py-4">Name</th>
              <th className="px-6 py-4">Service</th>
              <th className="px-6 py-4">Contact</th>
              <th className="px-6 py-4">Status</th>
              <th className="px-6 py-4">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {quotes.map((quote) => (
              <tr key={quote._id} className="hover:bg-white/5 transition-colors group">
                <td className="px-6 py-4 text-gray-400 whitespace-nowrap text-sm">
                  {new Date(quote.date).toLocaleDateString()}
                </td>
                <td className="px-6 py-4 font-medium text-white">{quote.name}</td>
                <td className="px-6 py-4">
                  <span className="px-2 py-1 rounded-md bg-white/5 text-gray-300 text-xs border border-white/10">
                    {quote.service}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex flex-col text-sm">
                    <span className="text-gray-300">{quote.email}</span>
                    <span className="text-gray-500 text-xs">{quote.phone}</span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="relative">
                    <select
                      value={quote.status}
                      onChange={(e) => handleStatusChange(quote._id, e.target.value)}
                      disabled={updating === quote._id}
                      className={`appearance-none cursor-pointer pl-3 pr-8 py-1.5 rounded-md text-xs font-medium border focus:outline-none focus:ring-1 focus:ring-white/20 transition-colors ${statusColors[quote.status] || statusColors['New']} bg-transparent`}
                    >
                      <option value="New" className="bg-zinc-900 text-white">New</option>
                      <option value="Contacted" className="bg-zinc-900 text-white">Contacted</option>
                      <option value="Closed" className="bg-zinc-900 text-white">Closed</option>
                    </select>
                    {updating === quote._id && <Loader2 className="absolute right-2 top-1.5 w-3 h-3 animate-spin text-white/50" />}
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <a 
                      href={`mailto:${quote.email}?subject=Re: Response to your request for ${quote.service}&body=Hi ${quote.name},%0D%0A%0D%0AThank you for contacting Trustiqo regarding ${quote.service}.`}
                      target="_blank"
                      className="p-2 rounded-lg hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
                      title="Reply via Email"
                    >
                      <Mail className="w-4 h-4" />
                    </a>
                  </div>
                </td>
              </tr>
            ))}
            {quotes.length === 0 && (
               <tr>
                 <td colSpan="6" className="px-6 py-8 text-center text-gray-500">
                   No quotes found.
                 </td>
               </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
