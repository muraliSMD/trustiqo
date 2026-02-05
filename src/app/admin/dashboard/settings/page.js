"use client";

import { useState } from "react";
import { Loader2, Lock, Save } from "lucide-react";

export default function SettingsPage() {
  const [formData, setFormData] = useState({
    username: "",
    oldPassword: "",
    newPassword: "",
    confirmPassword: ""
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.newPassword !== formData.confirmPassword) {
      setMessage("New passwords do not match");
      return;
    }

    setLoading(true);
    setMessage("");

    try {
      const res = await fetch("/api/auth/change-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: formData.username,
          oldPassword: formData.oldPassword,
          newPassword: formData.newPassword
        }),
      });

      const data = await res.json();
      if (data.success) {
        setMessage("Password updated successfully!");
        setFormData({ username: "", oldPassword: "", newPassword: "", confirmPassword: "" });
      } else {
        setMessage(data.error || "Failed to update password");
      }
    } catch (error) {
      setMessage("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Admin Settings</h1>
      
      <div className="bg-zinc-900 border border-white/10 rounded-2xl p-8">
        <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
          <Lock className="w-5 h-5 text-blue-500" />
          Change Password
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm text-gray-400 mb-1">Username</label>
            <input 
              type="text" 
              name="username"
              value={formData.username} 
              onChange={handleChange}
              className="w-full bg-black border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-blue-500"
              placeholder="Enter your username"
              required
            />
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-1">Current Password</label>
            <input 
              type="password" 
              name="oldPassword"
              value={formData.oldPassword} 
              onChange={handleChange}
              className="w-full bg-black border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-blue-500"
              placeholder="••••••••"
              required
            />
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-1">New Password</label>
            <input 
              type="password" 
              name="newPassword"
              value={formData.newPassword} 
              onChange={handleChange}
              className="w-full bg-black border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-blue-500"
              placeholder="••••••••"
              required
            />
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-1">Confirm New Password</label>
            <input 
              type="password" 
              name="confirmPassword"
              value={formData.confirmPassword} 
              onChange={handleChange}
              className="w-full bg-black border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-blue-500"
              placeholder="••••••••"
              required
            />
          </div>

          {message && (
             <p className={`text-sm ${message.includes("success") ? "text-green-400" : "text-red-400"}`}>
               {message}
             </p>
          )}

          <button 
            type="submit" 
            disabled={loading}
            className="w-full py-3 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold transition-colors flex items-center justify-center gap-2 mt-4"
          >
            {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
            Update Password
          </button>
        </form>
      </div>
    </div>
  );
}
