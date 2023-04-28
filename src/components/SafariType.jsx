import React from "react";
import Heading from "./Heading";
import { ButtonSecondary } from "./Buttons";

export default function SafariType() {
  return (
    <section className="container mx-auto md:py-10">
      <div className="my-10 flex justify-center">
        <Heading
          Main={"Find travel inspiration by style"}
          Sub={"Travel in style"}
        />
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-10">
        <div class="shadow-lg mx-auto max-w-sm bg-white transform duration-500 hover:-translate-y-1">
          <div class="relative">
            <div class="absolute inset-0 bg-zinc-900/50 "></div>
            <img
              class="w-full h-auto"
              src="/assets/image/category/pexels-olof-nyman-988622.jpg"
              alt=""
            />
          </div>

          <div class="p-7 my-auto pb-10 ">
            <h1 class="text-2xl font-semibold text-gray-800">Family Travels</h1>
            <p class="text-base text-gray-400 mt-2">
              Luxury family safaris and inspiring wildlife adventures with a
              positive impact.
            </p>
            <ButtonSecondary Text={"Discover"} />
          </div>
        </div>

        <div class="shadow-lg mx-auto max-w-sm bg-white  transform duration-500 hover:-translate-y-1">
          <div class="relative">
            <div class="absolute inset-0 bg-zinc-900/50 "></div>
            <img
              class="w-full h-auto"
              src="/assets/image/category/pexels-asad-photo-maldives-15031963.jpg"
              alt=""
            />
          </div>

          <div class="p-7 my-auto pb-10 bg-white">
            <h1 class="text-2xl font-semibold text-gray-800">
              Private Travels
            </h1>
            <p class="text-base text-gray-400 mt-2">
              Quality time with family and friends, complete flexibility and
              exclusive use safari camps.
            </p>
            <ButtonSecondary Text={"Discover"} />
          </div>
        </div>
        <div class="shadow-lg mx-auto max-w-sm bg-white transform duration-500 hover:-translate-y-1">
          <div class="relative">
            <div class="absolute inset-0 bg-zinc-900/50 "></div>
            <img
              class="w-full h-auto"
              src="/assets/image/category/pexels-asad-photo-maldives-1024984.jpg"
              alt=""
            />
          </div>

          <div class="p-7 my-auto pb-10 bg-white">
            <h1 class="text-2xl font-semibold text-gray-800">Hooneymoons</h1>
            <p class="text-base text-gray-400 mt-2">
              From guilt-free indulgence to the romance of a real adventure, we
              can help you plan your perfect honeymoon.
            </p>
            <ButtonSecondary Text={"Discover"} />
          </div>
        </div>
      </div>
    </section>
  );
}
