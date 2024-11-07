import Image from "next/image";
import logo from "@/app/dashboard/assets/logo-svg.svg";
import flag from "@/app/dashboard/assets/flag-br.svg";
import { FaRegCircleQuestion } from "react-icons/fa6";
import { FaRegUser } from "react-icons/fa";
import { Separator } from "@/components/ui/separator";
import { MdShoppingCartCheckout } from "react-icons/md";

type Props = {
  children?: React.ReactNode;
  dashboardHeader?: React.ReactNode;
  dashboardMainHeaderTitle?: React.ReactNode;
};

export default function Dashboard({
  children,
  dashboardHeader,
  dashboardMainHeaderTitle,
}: Props) {
  return (
    <div className="h-screen flex overflow-hidden bg-gray-dark800 scrollbar">
      <section className="flex flex-col w-0 flex-1 overflow-hidden scrollbar">
        {dashboardHeader ?? (
          <div className="flex flex-row justify-between py-4 px-12">
            <Image
              priority
              quality={100}
              width={135}
              height={30}
              alt="logo"
              rel="preload"
              src={logo}
              blurDataURL={logo}
              style={{
                objectFit: "contain",
                objectPosition: "center",
                width: "auto",
                height: "auto",
              }}
            />
            <div className="flex flex-row items-center">
              <div className="flex flex-row items-center">
                <p className="text-xs text">Cotação dólar Hoje: R$5,53</p>
                <Image
                  priority
                  quality={100}
                  width={30}
                  height={21}
                  rel="preload"
                  alt="flag"
                  src={flag}
                  blurDataURL={flag}
                  style={{
                    objectFit: "contain",
                    objectPosition: "center",
                    margin: "0 1rem",
                  }}
                />
                <FaRegCircleQuestion className="text-accent" />
              </div>
              <Separator orientation="vertical" className="h-6 my-0 mx-4" />
              <div className="flex flex-row items-center gap-2">
                <span className="inline-flex text-accent gap-1">
                  <FaRegUser size={16} />{" "}
                  <p className="text-accent text-xs font-extrabold">Entrar</p>
                </span>
                <span className="inline-flex text-primary font-bold bg-accent-foreground py-2 px-5 rounded-sm gap-2">
                  <MdShoppingCartCheckout size={20} />{" "}
                  <p className="text-primary">0</p>
                </span>
              </div>
            </div>
          </div>
        )}
        <Separator orientation="horizontal" />
        <main className="flex-1 relative overflow-y-auto focus:outline-none scrollbar">
          {dashboardMainHeaderTitle}
          <div
            className="w-full mx-auto flex flex-col bg-background"
            style={{
              padding: "0 3rem 5rem 3rem",
            }}
          >
            {children}
          </div>
        </main>
      </section>
    </div>
  );
}
