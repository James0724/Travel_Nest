import React from "react";
import Heading from "./Heading";
import Image from "next/image";

export default function Featured() {
  return (
    <section class="container mx-auto md:py-10">
      <div className="my-10 flex justify-center">
        <Heading
          Main={"Get Inspired by our top safaris"}
          Sub={"Featured Tours"}
        />
      </div>
      <section class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-10">
        <article class="mx-auto pb-5 max-w-sm transform duration-500 hover:-translate-y-1 cursor-pointer group">
          <div class="max-h-125 overflow-hidden">
            <Image
              class="transform duration-300 group-hover:scale-110"
              src="/assets/images/featured/pexels-antony-trivet-6056773.jpg"
              alt=""
              priority
              width={400}
              height={500}
            />
          </div>
          <div class="flex justify-between my-5 ">
            <div class="text-orange-500 text-base font-semibold">Uganda</div>
            {/* <div class="text-base text-right">
              <span class="font-bold">87</span>/Day
            </div> */}
          </div>
          <h2 class="font-bold text-2xl">Highlights of Uganda</h2>
          <div class="flex justify-between items-center mt-3 ">
            <div class="text-base uppercase font-semibold text-gray-500">
              15 Days Tour
            </div>
          </div>
        </article>

        <article class="mx-auto pb-5 max-w-sm transform duration-500 hover:-translate-y-1 cursor-pointer group">
          <div class="max-h-125 overflow-hidden">
            <Image
              class="transform duration-300 group-hover:scale-110"
              src="/assets/images/featured/pexels-dario-fernandez-ruz-6827378.jpg"
              alt=""
              priority
              width={400}
              height={500}
            />
          </div>
          <div class="flex justify-between my-5 ">
            <div class="text-orange-500 text-base font-semibold">
              Nairobi National Park, Kenya
            </div>
          </div>
          <h2 class="font-bold text-2xl">A Welcome to Nairobi</h2>
          <div class="flex justify-between items-center mt-3 ">
            <div class="text-base uppercase font-semibold text-gray-500">
              3 Days Tour
            </div>
          </div>
        </article>

        <article class="mx-auto pb-5 max-w-sm transform duration-500 hover:-translate-y-1 cursor-pointer group">
          <div class="max-h-125 overflow-hidden">
            <Image
              class="transform duration-300 group-hover:scale-110"
              src="/assets/images/featured/pexels-pixabay-259547.jpg"
              alt=""
              priority
              width={400}
              height={500}
            />
          </div>
          <div class="flex justify-between my-5 ">
            <div class="text-orange-500 text-base font-semibold">
              Serengeti National Park, Tanzania
            </div>
          </div>
          <h2 class="font-bold text-2xl">Serengeti Exploration</h2>
          <div class="flex justify-between items-center mt-3 ">
            <div class="text-base uppercase font-semibold text-gray-500">
              24 Days Tour
            </div>
          </div>
        </article>

        <article class="mx-auto pb-5 max-w-sm transform duration-500 hover:-translate-y-1 cursor-pointer group">
          <div class="max-h-125 overflow-hidden">
            <Image
              class="transform duration-300 group-hover:scale-110"
              src="/assets/images/featured/pexels-rachel-claire-4577837.jpg"
              alt=""
              priority
              width={400}
              height={500}
            />
          </div>
          <div class="flex justify-between my-5 ">
            <div class="text-orange-500 text-base font-semibold">Tanzania</div>
          </div>
          <h2 class="font-bold text-2xl">Visit to Swahili land</h2>
          <div class="flex justify-between items-center mt-3 ">
            <div class="text-base uppercase font-semibold text-gray-500">
              10 Days Tour
            </div>
          </div>
        </article>
        <article class="mx-auto pb-5 max-w-sm transform duration-500 hover:-translate-y-1 cursor-pointer group">
          <div class="max-h-125 overflow-hidden">
            <Image
              class="transform duration-300 group-hover:scale-110"
              src="/assets/images/featured/pexels-pixabay-34098.jpg"
              alt=""
              priority
              width={400}
              height={500}
            />
          </div>
          <div class="flex justify-between my-5 ">
            <div class="text-orange-500 text-base font-semibold">
              Ngogoro National Park, Tanzania
            </div>
          </div>
          <h2 class="font-bold text-2xl">Higlights of Tanzania</h2>
          <div class="flex justify-between items-center mt-3 ">
            <div class="text-base uppercase font-semibold text-gray-500">
              10 Days Tour
            </div>
          </div>
        </article>
        <article class="mx-auto pb-5 max-w-sm transform duration-500 hover:-translate-y-1 cursor-pointer group">
          <div class="max-h-125 overflow-hidden">
            <Image
              class="transform duration-300 group-hover:scale-110"
              src="/assets/images/featured/pexels-pixabay-162313.jpg"
              alt=""
              priority
              width={400}
              height={500}
            />
          </div>
          <div class="flex justify-between my-5 ">
            <div class="text-orange-500 text-base font-semibold">
              Tsavo, Kenya & Tanzania
            </div>
          </div>
          <h2 class="font-bold text-2xl">Tsavo National Park Exploration</h2>
          <div class="flex justify-between items-center mt-3 ">
            <div class="text-base uppercase font-semibold text-gray-500">
              10 Days Tour
            </div>
          </div>
        </article>
      </section>
    </section>
  );
}
