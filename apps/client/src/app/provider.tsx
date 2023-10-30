"use client";

import "@/styles/globals.css";
import { trpc } from "@/utils/trpc";

interface TRPCReactProviderProps {
  children: React.ReactNode;
}

const TRPCReactProvider: React.FC<TRPCReactProviderProps> = ({ children }) => {
  return (
    // Your app components can be wrapped here without ClerkProvider
    {children}
  );
};

export default trpc.withTRPC(TRPCReactProvider);
