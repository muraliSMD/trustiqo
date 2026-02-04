"use client";

import ServiceLayout from "@/components/ServiceLayout";
import { Receipt } from "lucide-react";

export default function BillingPage() {
  const features = [
    { title: "Invoice Generation", desc: "Create professional GST-compliant invoices in seconds." },
    { title: "Expense Tracking", desc: "Monitor daily business expenses and categorize them for audits." },
    { title: "Payment Gateway", desc: "Accept payments via UPI, Credit Card, and Net Banking directly from invoices." },
    { title: "Inventory Linking", desc: "Automatically deduct stock upon invoice creation." }
  ];

  const benefits = [
    "Eliminate manual billing errors",
    "Get paid faster with digital links",
    "Simplified GST filing reports",
    "Real-time profit & loss visibility"
  ];

  return (
    <ServiceLayout
      title="Billing & Invoicing Software"
      subtitle="Finances Made Simple"
      description="Effortless billing and accounting software designed for Indian businesses. Manage invoices, track expenses, and stay GST compliant with ease."
      icon={Receipt}
      color="from-pink-500 to-rose-500"
      features={features}
      benefits={benefits}
    />
  );
}
