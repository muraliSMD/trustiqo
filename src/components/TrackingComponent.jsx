"use client";

import { useEffect } from "react";

export default function TrackingComponent() {
  useEffect(() => {
    // Check if we already counted this visitor this session
    const hasVisited = sessionStorage.getItem("hasVisited");

    if (!hasVisited) {
      fetch("/api/visit", { method: "POST" })
        .then((res) => {
          if (res.ok) {
            sessionStorage.setItem("hasVisited", "true");
          }
        })
        .catch((err) => console.error("Tracking error", err));
    }
  }, []);

  return null;
}
