"use client";

import { useRouter } from "next/navigation";

import { useEffect } from "react";

import { Button } from "@/components/ui/button";

import { useTheme } from "next-themes";

export default function NotFound() {
  const { setTheme } = useTheme();

  const router = useRouter();

  useEffect(() => {
    setTheme("light");

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="transition-all duration-500 w-screen min-[768px]:h-screen flex flex-col items-start justify-center bg-[#FFFFFF]">
      <div className="grid h-screen max-[768px]:flex max-[768px]:flex-col min-[768px]:grid-cols-2 w-full items-center justify-start max-[768px]:!pt-10">
        <div className="h-full w-full flex items-center justify-center">
          <div className="z-10 flex items-start text-left gap-6 justify-center max-w-[350px] flex-col max-[768px]:px-6">
            <h1 className="text-8xl max-[768px]:text-7xl font-[900] max-[768px]:leading-[2.5rem] leading-[3.25rem]">404</h1>
            <h1 className="text-3xl max-[768px]:text-2xl font-bold">Essa página não existe.</h1>
            <p className="text-md opacity-80">
              A página que você está tentando acessar provavelmente foi alterada
              ou removida.
            </p>
            <Button
              type="button"
              onClick={() => router.back()}
              className="font-bold py-6 bg-primary px-5 text-md max-[768px]:py-6"
            >
              <h3 className="text-white">RETORNAR</h3>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}