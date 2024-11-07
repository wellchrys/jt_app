import { Metadata, Viewport } from "next";

interface AppLayoutProps {
  children: React.ReactNode;
}

import { METADATA } from "@/utils/metadata";

export const metadata: Metadata = METADATA({
  title: "TICKETS | JUST TRAVEL",
});

export const viewport: Viewport = {
  initialScale: 1,
  minimumScale: 1,
  userScalable: false,
  width: "device-width",
};

export default function AppLayout({ children }: AppLayoutProps) {
  return children;
}