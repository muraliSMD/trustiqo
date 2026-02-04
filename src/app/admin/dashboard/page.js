"use client";

import { useEffect, useState } from "react";
import { Users, FileText, ArrowUpRight } from "lucide-react";

export default function DashboardPage() {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/stats")
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setStats(data.stats);
        }
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div className="p-10">Loading stats...</div>;

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Dashboard Overview</h1>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        <div className="p-6 rounded-2xl bg-zinc-900 border border-white/5">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 rounded-lg bg-blue-500/20">
              <FileText className="w-6 h-6 text-blue-400" />
            </div>
            <div>
              <p className="text-gray-400 text-sm">Total Quotes</p>
              <h3 className="text-3xl font-bold">{stats?.totalQuotes || 0}</h3>
            </div>
          </div>
        </div>

        <div className="p-6 rounded-2xl bg-zinc-900 border border-white/5">
          <div className="flex items-center gap-4 mb-4">
             <div className="p-3 rounded-lg bg-green-500/20">
               <Users className="w-6 h-6 text-green-400" />
             </div>
             <div>
               <p className="text-gray-400 text-sm">Total Visitors</p>
               {/* Sum of all visitor counts */}
               <h3 className="text-3xl font-bold">
                 {stats?.visitors?.reduce((acc, curr) => acc + curr.count, 0) || 0}
               </h3>
             </div>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recent Quotes */}
        <div className="p-6 rounded-2xl bg-zinc-900 border border-white/5">
          <h2 className="text-xl font-bold mb-6">Recent Quotes</h2>
          <div className="space-y-4">
            {stats?.recentQuotes?.length > 0 ? (
              stats.recentQuotes.map((quote) => (
                <div key={quote._id} className="p-4 rounded-xl bg-black/40 flex justify-between items-center">
                   <div>
                     <p className="font-semibold text-white">{quote.name}</p>
                     <p className="text-sm text-gray-400">{quote.service}</p>
                   </div>
                   <span className="text-xs text-gray-500">{new Date(quote.date).toLocaleDateString()}</span>
                </div>
              ))
            ) : (
              <p className="text-gray-500">No quotes yet.</p>
            )}
          </div>
        </div>

        {/* Visitor Graph (Simple List for now) */}
        <div className="p-6 rounded-2xl bg-zinc-900 border border-white/5">
           <h2 className="text-xl font-bold mb-6">Visitor Trends (Last 7 Days)</h2>
           <div className="space-y-3">
             {stats?.visitors?.slice(0, 7).map((v) => (
               <div key={v.date} className="flex items-center gap-4">
                 <span className="text-gray-400 w-24 text-sm">{v.date}</span>
                 <div className="flex-1 h-2 bg-white/5 rounded-full overflow-hidden">
                    <div className="h-full bg-blue-500" style={{ width: `${Math.min(v.count * 10, 100)}%` }} />
                 </div>
                 <span className="text-white font-mono">{v.count}</span>
               </div>
             ))}
           </div>
        </div>
      </div>
    </div>
  );
}
