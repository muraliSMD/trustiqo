"use client";

import ServiceLayout from "@/components/ServiceLayout";
import { ShoppingCart } from "lucide-react";

export default function EcommercePage() {
  const features = [
    { title: "Custom Storefront", desc: "Beautifully designed online stores that reflect your brand identity." },
    { title: "Order Management", desc: "Process orders, track shipments, and manage returns efficiently." },
    { title: "Mobile App Integration", desc: "Get a dedicated mobile app for your store to boost customer retention." },
    { title: "Marketing Tools", desc: "Built-in discount coupons, email newsletters, and abandoned cart recovery." }
  ];

  const benefits = [
    "Launch your online store in days",
    "Seamless scaling to millions of users",
    "Secure payment processing",
    "SEO optimized structure for higher ranking"
  ];

  return (
    <ServiceLayout
      title="E-Commerce Platforms"
      subtitle="Sell Anywhere, Anytime"
      description="Scalable D2C and B2B e-commerce solutions that empower you to sell products globally with a world-class shopping experience."
      icon={ShoppingCart}
      color="from-violet-500 to-purple-500"
      features={features}
      benefits={benefits}
    />
  );
}
