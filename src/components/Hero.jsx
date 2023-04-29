import React from "react";
import { ButtonPrimary, ButtonSecondary } from "./Buttons";
import Image from "next/image";

export default function Hero() {
  return (
    <section className=" relative min-h-screen  ">
      <div className="absolute inset-0 bg-gradient-to-r from-brandGreen to-transparent z-10"></div>
      <div class="-z-0">
        <Image
          className="max-w-none object-cover"
          src="/assets/images/hero.jpg"
          alt=""
          fill
        />
      </div>

      <div className="flex flex-col max-w-xl justify-center lg:pl-16 px-4 h-screen">
        <h1 className=" leading-normal font-title  tracking-widest text-white text-3xl font-extrabold sm:text-5xl z-10">
          Let us find your
          <strong className="font-titleItalic  block font-extrabold text-orange-500">
            Memorable Safari.
          </strong>
        </h1>

        <p className="mt-4 max-w-lg sm:text-xsl/relaxed z-10 font-bold text-white tracking-wider">
          Journey through a collection of world's most picturesque destinations
          with divine travel nest safaris
        </p>

        <div className="mt-8 flex gap-4 z-10">
          <ButtonSecondary Text={"About Us"} />
          <ButtonPrimary Text={"Enquiry "} />
        </div>
      </div>
    </section>
  );
}
