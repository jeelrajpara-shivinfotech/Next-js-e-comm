"use client";

import { useEffect } from "react";

export default function PaymentCancel() {
  useEffect(() => {
    window.location.href = "/";
  }, []);

  return null;
}
