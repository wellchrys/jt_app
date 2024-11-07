"use client";

import { useRouter } from "next/navigation";

import { useEffect } from "react";

export default function Page() {
  const router = useRouter();

  useEffect(() => {
    router.push("/tickets");
  }, [router]);

  return (
    <main className="grid w-full items-center justify-center max-[768px]:flex max-[768px]:flex-col max-[768px]:!h-auto grid-cols-[1fr_1fr]"></main>
  );
}