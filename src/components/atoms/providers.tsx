"use client";
import { ClerkProvider } from "@clerk/nextjs";
import React, { useEffect, useState } from "react";

export const Providers = ({ children }: { children: React.ReactNode }) => {
    const [isCSR, setIsCSR] = useState(false);
    useEffect(() => {
        setIsCSR(true);
    }, []);

    if (isCSR) {
        return (
            <ClerkProvider
                signInForceRedirectUrl={"/"}
                signUpForceRedirectUrl={"/"}
            >
                {children}
            </ClerkProvider>
        );
    }
}
