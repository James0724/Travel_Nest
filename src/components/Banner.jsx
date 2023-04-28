import React from "react";
import { ButtonSecondary } from "./Buttons";

export default function Banner() {
  return (
    <section class="relative px-10 md:p-0  hover:shadow-2xl cursor-pointer bg-[url(/assets/image/pexels-frans-van-heerden-624063.jpg)] h-screen bg-no-repeat bg-fixed bg-cover bg-center">
      <div class="absolute inset-0 bg-zinc-950/75 "></div>
      <div class="relative mx-auto py-32 flex h-screen items-center justify-center content-center ">
        <div class="max-w-xl text-center ">
          <h1 class="text-3xl text-white font-extrabold sm:text-5xl">
            Discover
            <strong class="block font-extrabold text-cyan-700">
              Wild Africa.
            </strong>
          </h1>

          <p class="mt-4 text-white sm:text-xl/relaxed">
            We offer the best adventure holidays and tailor made safaris
          </p>
          <ButtonSecondary Text={"Explore"} />
        </div>
      </div>
    </section>
  );
}
