import { UseFormRegister } from "react-hook-form";
import Search from "./Search";

type Props = {
  register: UseFormRegister<any>;
  onSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function DashboardHeaderSearch({ register }: Props) {
  return (
    <header className="relative z-10 flex-shrink-0 flex flex-col py-4 px-12">
      <div className="flex-1 flex justify-between">
        <Search placeholder="Busque por atração" {...register("ticketName")} />
      </div>
    </header>
  );
}
