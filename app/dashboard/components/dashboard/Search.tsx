import { CiLocationOn } from "react-icons/ci";
import { Input } from "@/components/ui/input";
// import { UseFormRegister } from "react-hook-form";
import React from "react";

type Props = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement> & {
    label?: string;
  },
  HTMLInputElement
>;

export default React.forwardRef<HTMLInputElement, Props>(function Search(
  props,
  ref
) {
  return (
    <section className="flex-1 flex" role="search">
      <div className="w-full flex md:ml-0">
        <label htmlFor="search-field" className="sr-only">
          {props.label}
        </label>
        <div className="relative w-full text-gray-dark500 focus-within:text-gray-dark400">
          <div className="absolute inset-y-0 left-2 flex items-center pointer-events-none">
            <CiLocationOn className="h-5 w-5 text-accent" aria-hidden="true" />
          </div>

          <Input
            id="search-field"
            className="block w-full h-full pl-8 pr-3 py-2 border-transparent bg-gray-dark600 placeholder-gray-dark500 focus-within:text-gray-dark400 text-gray-dark500 focus:outline-none focus:ring-transparent focus:border-transparent sm:text-sm"
            aria-label="Buscar no conteúdo abaixo"
            autoComplete="off"
            placeholder={props.placeholder}
            ref={ref}
            {...props}
          />
        </div>
      </div>
    </section>
  );
});
