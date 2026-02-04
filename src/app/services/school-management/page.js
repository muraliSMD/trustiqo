"use client";

import ServiceLayout from "@/components/ServiceLayout";
import { School } from "lucide-react";

export default function SchoolManagementPage() {
  const features = [
    { title: "Student Information System", desc: "Centralized database for student records, admission details, and history." },
    { title: "Attendance & Grading", desc: "Digital attendance tracking and automated report card generation." },
    { title: "Fee Management", desc: "Automated fee collection, reminders, and receipt generation." },
    { title: "Parent-Teacher Portal", desc: "Dedicated app for parents to track child progress and communicate with teachers." }
  ];

  const benefits = [
    "Reduce administrative workload by 40%",
    "Go paperless and eco-friendly",
    "Improve communication with parents",
    "Real-time analytics for school performance"
  ];

  return (
    <ServiceLayout
      title="School Management System"
      subtitle="Transforming Education with Technology"
      description="A comprehensive ERP solution designed to streamline school administration, enhance learning experiences, and bridge the gap between parents and teachers."
      icon={School}
      color="from-blue-500 to-indigo-500"
      features={features}
      benefits={benefits}
    />
  );
}
