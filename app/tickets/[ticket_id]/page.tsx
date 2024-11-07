import { Dashboard } from "@/app/dashboard/components/dashboard";
import CheckoutForm from "../components/forms/CheckoutForm";
import { HiOutlineTicket } from "react-icons/hi2";
import { FaWifi } from "react-icons/fa";
import { BsCupHot } from "react-icons/bs";
import { IoHomeOutline } from "react-icons/io5";

import Image from "next/image";
// import { TICKET_QUERY } from "../graphql/ticketQuery";

export async function getStaticProps(ticket_id: string) {
  const response = await fetch('http://localhost:4000/graphql', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query: `{ ticket(id: ${ticket_id}) }` })
  });
  const { data } = await response.json();

  return {
    props: {
      posts: data.posts,
    },
    revalidate: 10, // Revalidate every 10 seconds
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ ticket_id: string }>;
}) {
  const ticket_id = (await params).ticket_id;

  const data = await getStaticProps(ticket_id)

  console.log(data)

  return (
    <Dashboard
      dashboardMainHeaderTitle={
        <div className="flex flex-col py-4 px-12">
          <h1>Ticket Name: {ticket_id}</h1>
          <span>Location</span>
        </div>
      }
    >
      <div className="grid grid-cols-12">
        <div className="col-span-12">
          <Image
            priority
            quality={100}
            width={1320}
            height={434}
            alt="logo"
            rel="preload"
            src={"/img-description.svg"}
            blurDataURL={"/img-description.svg"}
            style={{
              objectFit: "contain",
              objectPosition: "center",
              width: "100%",
              height: "auto",
            }}
          />
        </div>
      </div>
      <div className="grid grid-cols-12 text-secondary-foreground text-sm">
        <div className="col-span-8">
          <div className="flex flex-row"></div>
          <div className="flex flex-row py-4">
            <ol className="flex flex-row gap-4">
              <li className="flex flex-row gap-2 items-center">
                <HiOutlineTicket /> Passagem Aérea
              </li>
              <li className="flex flex-row gap-2 items-center">
                <FaWifi /> Wi-Fi
              </li>
              <li className="flex flex-row gap-2 items-center">
                <BsCupHot />
                Café da manhã
              </li>
              <li className="flex flex-row gap-2 items-center">
                <IoHomeOutline /> Quarto
              </li>
            </ol>
          </div>
          <div className="flex flex-col gap-4 mt-2">
            <h2 className="text-xl font-normal">
              Sobre o ingresso selecionado:
            </h2>
            <p className="text-secondary-foreground text-md">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices
              feugiat volutpat elementum sed donec bibendum vitae tincidunt.
              Quis eget ornare amet massa eu at ipsum. Augue purus ante ultrices
              dictum integer sagittis sem leo.
            </p>
            <p className="text-secondary-foreground text-md">
              Maecenas suspendisse ipsum purus bibendum maecenas faucibus risus,
              semper. Aliquet potenti neque semper dui aliquet. Imperdiet lectus
              id sed pharetra nunc, proin. Ultrices varius rhoncus facilisi
              condimentum habitant rhoncus ac. Vivamusvarius gravida urna
              viverra in
            </p>
            <p className="text-secondary-foreground text-md">
              Aliquet amet dictum malesuada sapien morbi est interdum. Tincidunt
              nunc convallis nullam lorem eu elementum interdum. Ut ultrices
              suscipit dolor lorem consequat ac nibh justo. Viverra quam nunc
              risus urna. Pharetra vestibulum diam praesent consequat consequat
              fermentum nunc.
            </p>
          </div>
          <div className="mt-2">
            <h3 className="text-lg py-4">Localização</h3>
            <Image
              priority
              quality={100}
              width={900}
              height={340}
              alt="logo"
              rel="preload"
              src={"/location.svg"}
              blurDataURL={"/location.svg"}
              style={{
                objectFit: "contain",
                objectPosition: "center",
                width: "100%",
                height: "auto",
              }}
            />
          </div>
        </div>
        <div className="col-span-4 flex flex-col items-end py-8 px-12">
          <CheckoutForm />
        </div>
      </div>
    </Dashboard>
  );
}
