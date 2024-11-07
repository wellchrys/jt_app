import { Control, FieldError, UseFormRegister } from "react-hook-form";

import { Checkbox } from "@/components/ui/checkbox";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

import { RiHotelLine } from "react-icons/ri";
import { PiBuildingApartmentFill, PiStarFill } from "react-icons/pi";
import { IoHomeOutline } from "react-icons/io5";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

export type FormErrors = {
  amenities?: FieldError;
  priceRange?: FieldError;
  starRange?: FieldError;
  accommodationType?: FieldError;
  reviewScore?: FieldError;
};

export type FormFields = {
  amenities: [string];
  priceRange: number;
  starRange: number;
  accommodationType: string;
  reviewScore: number;
};

const priceRange = [
  {
    key: 1,
    value: "R$ 10,00 - R$ 390,00",
  },
  {
    key: 2,
    value: "R$ 10,00 - R$ 390,00",
  },
  {
    key: 3,
    value: "R$ 10,00 - R$ 390,00",
  },
  {
    key: 4,
    value: "R$ 10,00 - R$ 390,00",
  },
];

const starRange = [
  {
    key: 5,
    value: (
      <>
        <PiStarFill className="text-tertiary" />
        <PiStarFill className="text-tertiary" />
        <PiStarFill className="text-tertiary" />
        <PiStarFill className="text-tertiary" />
        <PiStarFill className="text-tertiary" />
      </>
    ),
  },
  {
    key: 4,
    value: (
      <>
        <PiStarFill className="text-tertiary" />
        <PiStarFill className="text-tertiary" />
        <PiStarFill className="text-tertiary" />
        <PiStarFill className="text-tertiary" />
      </>
    ),
  },
  {
    key: 3,
    value: (
      <>
        <PiStarFill className="text-tertiary" />
        <PiStarFill className="text-tertiary" />
        <PiStarFill className="text-tertiary" />
      </>
    ),
  },
  {
    key: 2,
    value: (
      <>
        <PiStarFill className="text-tertiary" />
        <PiStarFill className="text-tertiary" />
      </>
    ),
  },
  {
    key: 1,
    value: <PiStarFill className="text-tertiary" />,
  },
];

const amenities = [
  {
    key: "wi-fi",
    value: "Wi-Fi",
  },
  {
    key: "cozinha",
    value: "Cozinha",
  },
  {
    key: "maquina-de-lavar",
    value: "Máquina de Lavar",
  },
  {
    key: "ar-condicionado",
    value: "Ar-condicionado",
  },
  {
    key: "secadora",
    value: "Secadora",
  },
];

const accommodationTypes = [
  {
    key: "casa",
    value: (
      <>
        <IoHomeOutline className="mr-2" /> Casa (346)
      </>
    ),
  },
  {
    key: "apartamento",
    value: (
      <>
        <RiHotelLine className="mr-2" />
        Apartamento (234)
      </>
    ),
  },
  {
    key: "hotel",
    value: (
      <>
        <PiBuildingApartmentFill className="mr-2" />
        Hotel (23)
      </>
    ),
  },
];

export default function TicketFormFilters({
  control,
  register,
}: {
  // errors: FormErrors;
  control: Control<FormFields, object>;
  isLoading?: boolean;
  register: UseFormRegister<FormFields>;
}) {
  return (
    <>
      <div className="flex flex-row items-center justify-between">
        <h3 className="font-bold">Filtro</h3>
        <Button variant="link" className="text-accent text-xs decoration-0 p-0">
          Limpar todos os filtros
        </Button>
      </div>
      <Separator className="my-4" />
      <FormField
        control={control}
        {...register("priceRange")}
        render={() => (
          <FormItem className="w-full flex flex-col">
            <div className="mb-4">
              <FormDescription className="font-bold">Preços</FormDescription>
            </div>

            <ToggleGroup
              type="single"
              variant="outline"
              className="grid gap-1 grid-cols-2"
            >
              {priceRange.map((priceValue) => (
                <FormField
                  key={priceValue.key}
                  control={control}
                  name="priceRange"
                  render={() => {
                    return (
                      <FormItem key={priceValue.key}>
                        <FormControl>
                          <ToggleGroupItem
                            value={String(priceValue.key)}
                            aria-label={String(priceValue.key)}
                            key={priceValue.key}
                            className="w-full text-xs h-9 p-0 tracking-tighter rounded-xs text-secondary hover:data-[state=on]:text-primary aria-[checked=true]:text-primary"
                          >
                            {priceValue.value}
                          </ToggleGroupItem>
                        </FormControl>
                      </FormItem>
                    );
                  }}
                />
              ))}
            </ToggleGroup>

            <FormMessage />
          </FormItem>
        )}
      />
      <Separator className="my-4" />
      <FormField
        control={control}
        {...register("starRange")}
        render={() => (
          <FormItem className="w-full flex flex-col">
            <div className="mb-4">
              <FormDescription className="font-bold">
                Tipo de propriedade
              </FormDescription>
            </div>

            <ToggleGroup
              type="single"
              variant="outline"
              className="flex gap-[10] flex-wrap"
            >
              {starRange.map((range) => (
                <FormField
                  key={range.key}
                  control={control}
                  name="starRange"
                  render={() => {
                    return (
                      <FormItem key={range.key}>
                        <FormControl>
                          <ToggleGroupItem
                            value={String(range.key)}
                            aria-label={String(range.key)}
                            key={range.key}
                          >
                            {range.value}
                          </ToggleGroupItem>
                        </FormControl>
                      </FormItem>
                    );
                  }}
                />
              ))}
            </ToggleGroup>

            <FormMessage />
          </FormItem>
        )}
      />
      <Separator className="my-4" />
      <FormField
        control={control}
        {...register("amenities")}
        render={() => (
          <FormItem>
            <div className="mb-4">
              <FormDescription className="font-bold">
                Comodidades
              </FormDescription>
            </div>
            {amenities.map((amenity) => (
              <FormField
                key={amenity.key}
                control={control}
                name="amenities"
                render={({ field }) => {
                  return (
                    <FormItem
                      key={amenity.key}
                      className="flex flex-row items-start space-x-3 space-y-0"
                    >
                      <FormControl>
                        <Checkbox
                          checked={field.value?.includes(amenity.key)}
                          onCheckedChange={(checked) => checked}
                          className="data-[state=checked]:text-accent border-border"
                          name={amenity.key}
                        />
                      </FormControl>
                      <FormLabel className="font-normal">
                        {amenity.value}
                      </FormLabel>
                    </FormItem>
                  );
                }}
              />
            ))}

            <FormMessage />
          </FormItem>
        )}
      />
      <Separator className="my-4" />
      <FormField
        control={control}
        {...register("accommodationType")}
        render={() => (
          <FormItem className="w-full flex flex-col">
            <div className="mb-4">
              <FormDescription className="font-bold">
                Tipo de propriedade
              </FormDescription>
            </div>

            <ToggleGroup
              type="single"
              variant="outline"
              className="flex gap-[10] flex-wrap"
            >
              {accommodationTypes.map((accommodationType) => (
                <FormField
                  key={accommodationType.key}
                  control={control}
                  name="accommodationType"
                  render={() => {
                    return (
                      <FormItem key={accommodationType.key} className="w-full">
                        <FormControl>
                          <ToggleGroupItem
                            value={accommodationType.key}
                            aria-label={accommodationType.key}
                            key={accommodationType.key}
                            className="w-full hover:data-[state=on]:border-accent aria-[checked=true]:border-accent data-[state=on]:bg-background data-[state=on]:text-accent hover:bg-secondary hover:text-accent text-secondary justify-start"
                          >
                            {accommodationType.value}
                          </ToggleGroupItem>
                        </FormControl>
                      </FormItem>
                    );
                  }}
                />
              ))}
            </ToggleGroup>

            <FormMessage />
          </FormItem>
        )}
      />
      <Separator className="my-4" />
      <FormField
        control={control}
        {...register("reviewScore")}
        render={() => (
          <FormItem className="w-full flex flex-col">
            <div className="mb-4">
              <FormDescription className="font-bold">
                Review Score
              </FormDescription>
            </div>

            <ToggleGroup
              type="single"
              variant="default"
              className="flex gap-[10] w-full flex-col"
            >
              <FormField
                key="excelente"
                control={control}
                name="reviewScore"
                render={() => {
                  return (
                    <FormItem key="excelente">
                      <FormControl>
                        <ToggleGroupItem
                          value="excelente"
                          aria-label="excelente"
                          key="excelente"
                          className="w-full p-0 h-[30] data-[state=on]:bg-background"
                          variant={"default"}
                        >
                          <div className="w-full flex gap-[10] text-xs">
                            <div className="w-[60%] bg-secondary flex flex-wrap content-center">
                              <span className="bg-tertiary w-[90%] flex h-[30px] flex flex-wrap content-center px-2 text-primary">
                                9+
                              </span>
                            </div>
                            <span className="w-[60%] flex flex-wrap content-center">
                              Excelente (543)
                            </span>
                          </div>
                        </ToggleGroupItem>
                      </FormControl>
                    </FormItem>
                  );
                }}
              />
              <FormField
                key="muito-bom"
                control={control}
                name="reviewScore"
                render={() => {
                  return (
                    <FormItem key="muito-bom" className="">
                      <FormControl>
                        <ToggleGroupItem
                          value="muito-bom"
                          aria-label="muito-bom"
                          key="muito-bom"
                          className="w-full p-0 h-[30] data-[state=on]:bg-background"
                        >
                          <div className="w-full flex gap-[10] text-xs">
                            <div className="w-[60%] bg-secondary flex flex-wrap content-center">
                              <span className="bg-tertiary w-[80%] flex h-[30px] flex flex-wrap content-center px-2 text-primary">
                                8+
                              </span>
                            </div>
                            <span className="w-[60%] flex flex-wrap content-center">
                              Muito bom (543)
                            </span>
                          </div>
                        </ToggleGroupItem>
                      </FormControl>
                    </FormItem>
                  );
                }}
              />
              <FormField
                key="bom"
                control={control}
                name="reviewScore"
                render={() => {
                  return (
                    <FormItem key="bom" className="">
                      <FormControl>
                        <ToggleGroupItem
                          value="bom"
                          aria-label="bom"
                          key="bom"
                          className="w-full p-0 h-[30] data-[state=on]:bg-background"
                        >
                          <div className="w-full flex gap-[10] text-xs">
                            <div className="w-[60%] bg-secondary flex flex-wrap content-center">
                              <span className="bg-tertiary w-[70%] flex h-[30px] flex flex-wrap content-center px-2 text-primary">
                                7+
                              </span>
                            </div>
                            <span className="w-[60%] flex flex-wrap content-center">
                              Bom (543)
                            </span>
                          </div>
                        </ToggleGroupItem>
                      </FormControl>
                    </FormItem>
                  );
                }}
              />
              <FormField
                key="ruim"
                control={control}
                name="reviewScore"
                render={() => {
                  return (
                    <FormItem key="ruim" className="">
                      <FormControl>
                        <ToggleGroupItem
                          value="ruim"
                          aria-label="ruim"
                          key="ruim"
                          className="w-full p-0 h-[30] data-[state=on]:bg-background"
                        >
                          <div className="w-full flex gap-[10] text-xs">
                            <div className="w-[60%] bg-secondary flex flex-wrap content-center">
                              <span className="bg-tertiary w-[60%] flex h-[30px] flex flex-wrap content-center px-2 text-primary">
                                6+
                              </span>
                            </div>
                            <span className="w-[60%] flex flex-wrap content-center">
                              Ruim (543)
                            </span>
                          </div>
                        </ToggleGroupItem>
                      </FormControl>
                    </FormItem>
                  );
                }}
              />
              <FormField
                key="pessimo"
                control={control}
                name="reviewScore"
                render={() => {
                  return (
                    <FormItem key="pessimo" className="">
                      <FormControl>
                        <ToggleGroupItem
                          value="pessimo"
                          aria-label="pessimo"
                          key="pessimo"
                          className="w-full p-0 h-[30] data-[state=on]:bg-background"
                        >
                          <div className="w-full flex gap-[10] text-xs">
                            <div className="w-[60%] bg-secondary flex flex-wrap content-center">
                              <span className="bg-tertiary w-[10%] flex h-[30px] flex flex-wrap content-center px-2 text-primary" />
                            </div>
                            <span className="w-[60%] flex flex-wrap content-center">
                              Péssimo (14)
                            </span>
                          </div>
                        </ToggleGroupItem>
                      </FormControl>
                    </FormItem>
                  );
                }}
              />
            </ToggleGroup>

            <FormMessage />
          </FormItem>
        )}
      />
    </>
  );
}
