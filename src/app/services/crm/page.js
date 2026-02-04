"use client";

import ServiceLayout from "@/components/ServiceLayout";
import { BarChart3 } from "lucide-react";

export default function CRMPage() {
  const features = [
    { title: "Lead Management", desc: "Capture, track, and nurture leads from multiple sources in one place." },
    { title: "Sales Pipeline", desc: "Visual kanban boards to manage deals and forecast revenue." },
    { title: "Customer Support", desc: "Integrated ticketing system to resolve customer issues faster." },
    { title: "Analytics & Reporting", desc: "Deep insights into sales performance and customer behavior." }
  ];

  const benefits = [
    "Increase sales conversion by 30%",
    "Improve customer retention rates",
    "Centralize customer data securely",
    "Automate repetitive sales tasks"
  ];

  return (
    <ServiceLayout
      title="CRM Solutions"
      subtitle="Better Relationships, Bigger Business"
      description="A powerful Customer Relationship Management tool that helps you understand your customers, streamline your sales, and grow your business."
      icon={BarChart3}
      color="from-emerald-500 to-teal-500"
      features={features}
      benefits={benefits}
    />
  );
}
