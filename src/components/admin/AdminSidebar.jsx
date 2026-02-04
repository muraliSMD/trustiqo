"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  LayoutDashboard, 
  Users, 
  Rocket, 
  Menu, 
  X, 
  ChevronLeft, 
  ChevronRight 
} from "lucide-react";
import LogoutButton from "@/components/admin/LogoutButton";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export default function AdminSidebar({ children }) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { href: "/admin/dashboard", label: "Dashboard", icon: LayoutDashboard },
    { href: "/admin/dashboard/quotes", label: "Leads & Quotes", icon: Users },
  ];

  return (
    <div className="min-h-screen bg-black text-white flex flex-col md:flex-row">
      
      {/* Mobile Header */}
      <div className="md:hidden flex items-center justify-between p-4 border-b border-white/10 bg-zinc-900 sticky top-0 z-50">
        <div className="flex items-center gap-2">
          <Rocket className="w-6 h-6 text-blue-500" />
          <span className="font-bold text-lg">Admin Panel</span>
        </div>
        <button onClick={() => setIsMobileOpen(true)} className="p-2">
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile Sidebar Overlay */}
      {isMobileOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setIsMobileOpen(false)}
        />
      )}

      {/* Sidebar - Desktop & Mobile */}
      <aside 
        className={cn(
          "fixed md:sticky top-0 h-screen bg-zinc-950 border-r border-white/10 z-50 transition-all duration-300 ease-in-out flex flex-col",
          // Mobile styles
          isMobileOpen ? "translate-x-0 w-64" : "-translate-x-full w-64",
          // Desktop styles
          "md:translate-x-0",
          isCollapsed ? "md:w-20" : "md:w-64"
        )}
      >
        {/* Sidebar Header */}
        <div className={cn(
          "flex items-center h-16 px-4 border-b border-white/10",
          isCollapsed ? "justify-center" : "justify-between"
        )}>
          {!isCollapsed && (
            <div className="flex items-center gap-2">
              <Rocket className="w-6 h-6 text-blue-500" />
              <span className="font-bold text-lg">Trustiqo</span>
            </div>
          )}
          
          {/* Mobile Close Button */}
          <button onClick={() => setIsMobileOpen(false)} className="md:hidden p-1 text-gray-400">
             <X className="w-5 h-5" />
          </button>

           {/* Desktop Collapse Toggle */}
           <button 
             onClick={() => setIsCollapsed(!isCollapsed)} 
             className="hidden md:flex p-1.5 rounded-lg hover:bg-white/10 text-gray-400 transition-colors"
           >
             {isCollapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
           </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 py-6 px-3 space-y-2">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link 
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 px-3 py-3 rounded-lg transition-colors relative group",
                  isActive ? "bg-blue-600/10 text-blue-400" : "text-gray-400 hover:bg-white/5 hover:text-white",
                  isCollapsed && "justify-center"
                )}
                title={isCollapsed ? item.label : undefined}
                onClick={() => setIsMobileOpen(false)}
              >
                <item.icon className="w-5 h-5 min-w-[20px]" />
                {!isCollapsed && (
                  <span className="whitespace-nowrap overflow-hidden">{item.label}</span>
                )}
                
                {/* Tooltip for collapsed mode */}
                {isCollapsed && (
                  <div className="absolute left-full ml-4 px-2 py-1 bg-zinc-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity z-50">
                    {item.label}
                  </div>
                )}
              </Link>
            );
          })}
        </nav>

        {/* Footer / Logout */}
        <div className="p-3 border-t border-white/10">
           {/* We need to adjust LogoutButton styling or wrap it to fit collapsed state */}
           {isCollapsed ? (
             <div className="flex justify-center">
                {/* Icon only logout trigger logic is needed, but LogoutButton is a component.
                    Let's just hide it or show a small icon version.
                    Actually simplest is to just render it and let overflow clip or just show icon.
                    But LogoutButton has text. I should update LogoutButton to accept `collapsed` prop OR just wrap it.
                 */}
                 <div className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-red-500/10 text-red-400 cursor-pointer" title="Logout">
                    {/* Hacky way to reuse the logout logic? No, let's just use the LogoutButton but maybe hide text via CSS if parent is collapsed? */}
                    <LogoutButton collapsed={true} />
                 </div>
             </div>
           ) : (
             <LogoutButton />
           )}
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 p-4 md:p-8 overflow-y-auto h-[calc(100vh-64px)] md:h-screen w-full">
        {children}
      </main>
    </div>
  );
}
