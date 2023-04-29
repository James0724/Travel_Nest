import React from "react";
import { ButtonSecondary } from "./Buttons";
import Image from "next/image";

export default function Banner() {
  return (
    <section class="relative px-10 md:p-0  hover:shadow-2xl cursor-pointer h-screen ">
      <div class="absolute inset-0 bg-zinc-950/75 z-10"></div>
      <div class="absolute inset-0 w-full h-full">
        <Image
          className="max-w-none object-cover"
          src="/assets/images/pexels-frans-van-heerden-624063.jpg"
          alt=""
          fill
        />
      </div>
      <div class="relative mx-auto py-32 flex h-screen items-center justify-center content-center z-20">
        <div class="max-w-xl text-center ">
          <h1 class="font-title text-3xl text-white font-extrabold sm:text-5xl leading-normal tracking-wider">
            Discover
            <strong class="font-titleItalic block font-extrabold text-brandGreen">
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
