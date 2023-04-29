import React from "react";
import Heading from "./Heading";
import { ButtonSecondary } from "./Buttons";
import Image from "next/image";

export default function SafariType() {
  return (
    <section>
      <div className="my-10 flex justify-center">
        <div class="w-full md:w-1/2">
          <Heading
            Main={"Find travel inspiration by style"}
            Sub={"Travel in style"}
          />
        </div>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3  2xl:grid-cols-4 gap-10">
        <article class="mx-auto pb-5 max-w-sm transform duration-500 hover:-translate-y-1 cursor-pointer group">
          <div class="relative max-h-130 overflow-hidden">
            <div class="absolute inset-0 bg-gradient-to-b from-brandGreen to-transparent z-10 ">
              <div class="h-full w-full flex justify-center ">
                <h1 className="text-white mt-20 font-titleItalic text-2xl font-thin leading-none tracking-wide md:text-3xl lg:text-4xl">
                  Family Safaris
                </h1>
              </div>
            </div>

            <Image
              class="transform duration-300 group-hover:scale-110"
              src="/assets/images/category/pexels-olof-nyman-988622.jpg"
              alt=""
              width={400}
              height={500}
            />
          </div>
          <div class="flex justify-center flex-col item-center my-6">
            <p class="text-base mt-2 text-center">
              Luxury family safaris and inspiring wildlife adventures with a
              positive impact.
            </p>
            <ButtonSecondary Text={"Discover"} />
          </div>
        </article>

        <article class="mx-auto pb-5 max-w-sm transform duration-500 hover:-translate-y-1 cursor-pointer group">
          <div class=" relative max-h-130 overflow-hidden">
            <div class="absolute inset-0 bg-gradient-to-b from-brandGreen to-transparent z-10 ">
              <div class="h-full w-full flex justify-center ">
                <h1 className="text-white mt-20 font-titleItalic text-2xl font-thin leading-none tracking-wide md:text-3xl lg:text-4xl">
                  Private Travels
                </h1>
              </div>
            </div>
            <Image
              class="transform duration-300 group-hover:scale-110"
              src="/assets/images/category/pexels-asad-photo-maldives-15031963.jpg"
              alt=""
              width={400}
              height={500}
            />
          </div>
          <div class="flex justify-center flex-col item-center my-6">
            <p class="text-base mt-2 text-center">
              Luxury family safaris and inspiring wildlife adventures with a
              positive impact.
            </p>
            <ButtonSecondary Text={"Discover"} />
          </div>
        </article>
        <article class="mx-auto pb-5 max-w-sm transform duration-500 hover:-translate-y-1 cursor-pointer group">
          <div class="relative max-h-130 overflow-hidden">
            <div class="absolute inset-0 bg-gradient-to-b from-brandGreen to-transparent z-10 ">
              <div class="h-full w-full flex justify-center ">
                <h1 className="text-white mt-20 font-titleItalic text-2xl font-thin leading-none tracking-wide md:text-3xl lg:text-4xl">
                  Hooneymoons
                </h1>
              </div>
            </div>
            <Image
              class="transform duration-300 group-hover:scale-110"
              src="/assets/images/category/pexels-asad-photo-maldives-1024984.jpg"
              alt=""
              width={400}
              height={500}
            />
          </div>
          <div class="flex justify-center flex-col item-center my-6">
            <p class="text-base mt-2 text-center">
              Luxury family safaris and inspiring wildlife adventures with a
              positive impact.
            </p>
            <ButtonSecondary Text={"Discover"} />
          </div>
        </article>
      </div>
    </section>
    // <section className="container mx-auto md:py-10">
    //   <div className="my-10 flex justify-center">
    //     <Heading
    //       Main={"Find travel inspiration by style"}
    //       Sub={"Travel in style"}
    //     />
    //   </div>
    //   <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
    //     <div class="shadow-lg mx-auto bg-white transform duration-500 hover:-translate-y-1">
    //       {/* <div class="relative h-96 ">
    //         <div class="absolute inset-0 bg-brandGreen/50 z-0 "></div>
    //         <Image
    //           className="max-w-none object-cover"
    //           src="/assets/images/category/pexels-olof-nyman-988622.jpg"
    //           fill
    //           priority
    //           alt=""
    //         />
    //       </div> */}
    //       <div class="max-h-125 overflow-hidden">
    //         <Image
    //           class="transform duration-300 group-hover:scale-110"
    //           src="/assets/image/featured/pexels-dario-fernandez-ruz-6827378.jpg"
    //           alt=""
    //           width={400}
    //           height={500}
    //         />
    //       </div>

    //       <div class="p-7 my-auto pb-10 ">
    //         <h1 class="text-2xl font-semibold text-gray-800">Family Travels</h1>
    //         <p class="text-base mt-2">
    //           Luxury family safaris and inspiring wildlife adventures with a
    //           positive impact.
    //         </p>
    //         <ButtonSecondary Text={"Discover"} />
    //       </div>
    //     </div>

    //     <div class="shadow-lg mx-auto bg-white  transform duration-500 hover:-translate-y-1">
    //       {/* <div class="relative h-96 ">
    //         <div class="absolute inset-0 bg-brandGreen/50 z-0 "></div>
    //         <Image
    //           className="max-w-none object-cover"
    //           src="/assets/images/category/pexels-asad-photo-maldives-15031963.jpg"
    //           fill
    //           priority
    //           alt=""
    //         />
    //       </div> */}
    //       <div class="max-h-125 overflow-hidden">
    //         <Image
    //           class="transform duration-300 group-hover:scale-110"
    //           src="/assets/image/featured/pexels-dario-fernandez-ruz-6827378.jpg"
    //           alt=""
    //           width={400}
    //           height={500}
    //         />
    //       </div>

    //       <div class="p-7 my-auto pb-10 bg-white">
    //         <h1 class="text-2xl font-semibold text-gray-800">
    //           Private Travels
    //         </h1>
    //         <p class="text-base mt-2">
    //           Quality time with family and friends, complete flexibility and
    //           exclusive use safari camps.
    //         </p>
    //         <ButtonSecondary Text={"Discover"} />
    //       </div>
    //     </div>
    //     <div class="shadow-lg mx-auto bg-white transform duration-500 hover:-translate-y-1">
    //       {/* <div class="relative h-96 ">
    //         <div class="absolute inset-0 bg-brandGreen/50 z-0 "></div>
    //         <Image
    //           className="max-w-none object-cover"
    //           src="/assets/images/category/pexels-asad-photo-maldives-1024984.jpg"
    //           fill
    //           priority
    //           alt=""
    //         />
    //       </div> */}
    //       <div class="max-h-125 overflow-hidden">
    //         <Image
    //           class="transform duration-300 group-hover:scale-110"
    //           src="/assets/image/featured/pexels-dario-fernandez-ruz-6827378.jpg"
    //           alt=""
    //           width={400}
    //           height={500}
    //         />
    //       </div>

    //       <div class="p-7 my-auto pb-10 bg-white">
    //         <h1 class="text-2xl font-semibold text-gray-800">Hooneymoons</h1>
    //         <p class="text-base mt-2">
    //           From guilt-free indulgence to the romance of a real adventure, we
    //           can help you plan your perfect honeymoon.
    //         </p>
    //         <ButtonSecondary Text={"Discover"} />
    //       </div>
    //     </div>
    //   </div>
    // </section>
  );
}
