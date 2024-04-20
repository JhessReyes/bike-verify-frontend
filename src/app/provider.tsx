"use client";
import { ClerkProvider } from "@clerk/nextjs";
import React, { useEffect, useState } from "react";

export default function Providers({ children }: { children: React.ReactNode }) {
  const [isCSR, setIsCSR] = useState(false);
  useEffect(() => {
    setIsCSR(true);
  }, []);

  if (isCSR) {
    return (
      <ClerkProvider
        signInForceRedirectUrl={"/dashboard"}
        signUpForceRedirectUrl={"/"}
      >
        {children}
      </ClerkProvider>
    );
  }
}