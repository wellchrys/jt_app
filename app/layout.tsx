import type { Metadata } from "next";

import "./globals.css";

import localFont from "next/font/local";

import { METADATA } from "@/utils/metadata";

import { ApolloProvider } from "@/lib/apollo-provider";
import { TicketProvider } from "@/lib/ticket-provider";

const circular = localFont({
  src: [
    {
      path: "../fonts/CircularStd-Bold.woff",
      weight: "700",
      style: "normal",
    },
    {
      path: "../fonts/CircularStd-Medium.woff",
      weight: "500",
      style: "normal",
    },
  ],
});

export const metadata: Metadata = METADATA({
  title: "JUST TRAVEL",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" suppressHydrationWarning>
      <body className={circular.className}>
        <ApolloProvider>
          <TicketProvider>{children}</TicketProvider>
        </ApolloProvider>
      </body>
    </html>
  );
}
