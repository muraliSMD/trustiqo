"use client";

import ServiceLayout from "@/components/ServiceLayout";
import { Trophy } from "lucide-react";

export default function SportsAcademyPage() {
  const features = [
    { title: "Player Management", desc: "Track player profiles, medical history, and performance stats." },
    { title: "Tournament Organizer", desc: "generate fixtures, manage brackets (League/Knockout), and live scoring." },
    { title: "Training Schedules", desc: "Calendar integration for practice sessions and matches." },
    { title: "Membership Management", desc: "Handle subscriptions, renewals, and payments easily." }
  ];

  const benefits = [
    "Professional tournament management",
    "Data-driven player development",
    "Simplified scheduling and logistics",
    "Engage fans with live match updates"
  ];

  return (
    <ServiceLayout
      title="Sports Academy Management"
      subtitle="Champions are Made Here"
      description="The ultimate platform for sports academies and tournament organizers to manage operations, track talent, and deliver world-class sporting events."
      icon={Trophy}
      color="from-orange-500 to-red-500"
      features={features}
      benefits={benefits}
    />
  );
}
