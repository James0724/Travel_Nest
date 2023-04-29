import React from "react";
import Heading from "./Heading";
import TextLayout from "./TextLayout";
import { ButtonPrimary } from "./Buttons";
import Image from "next/image";

export default function AboutIntro() {
  return (
    <div className="min-h-screen flex flex-wrap py-10 md:py-20">
      <div className="intro-text w-full md:w-1/3 ">
        <Heading
          Main={"Divine Travel Nest"}
          Sub={"Short Introduction About Us"}
        />
        <TextLayout
          Paragraph={`Divine Travel Nest (DTN) is a tour company that was established in Kenya
        to provide splendid and suistainable safari tour services around eastern
        Africa, with an impressive and memorable experience. We focus on
        customized safari tours for our clients including wildife, camping,
        adventures, honeymoon and work related conferences.`}
        />
      </div>
      <div className="image-wrap w-full md:w-2/3">
        <div class="relative w-3/4 md:w-full">
          <Image
            class="transform duration-300 group-hover:scale-110"
            src="/assets/images/collection/elephant-4393034_1920.jpg"
            alt=""
            priority
            width={595}
            height={400}
          />
          <div className="absolute drop-shadow-2xl h-2/5 w-2/5 -bottom-20 -right-24 md:right-0">
            <Image
              class="transform duration-300 group-hover:scale-110"
              src="/assets/images/collection/cheetahs-171315_1920.jpg"
              alt=""
              priority
              width={595}
              height={400}
            />
          </div>
        </div>
        <div class="">
          <ButtonPrimary Text={"More About Us"} />
        </div>
      </div>
    </div>
  );
}
