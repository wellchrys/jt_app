import { Metadata } from "next";

export const METADATA = ({ ...metadata }: Metadata) => ({
  robots: "index, follow",
  manifest: "/manifest.json",
  authors: [{ name: "Just Travel" }],
  title: "Just Travel",
  icons: [
    {
      rel: "icon",
      sizes: "128x128",
      type: "image/x-icon",
      href: "/favicon.ico",
      url: "/favicon.ico",
    },
  ],
  keywords: [
    "Just travel",
    "Viagens",
    "Turistmo",
    "Agência",
  ],
  description:
    "Lorem ipsum dolor amet consectetur",
  ...metadata,
});