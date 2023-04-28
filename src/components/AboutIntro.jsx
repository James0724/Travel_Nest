import React from "react";
import Heading from "./Heading";
import TextLayout from "./TextLayout";
import { ButtonPrimary } from "./Buttons";

export default function AboutIntro() {
  return (
    <div className=" w-full flex flex-wrap py-10 md:py-20">
      <div className="intro-text w-full md:w-1/2 ">
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
        <ButtonPrimary Text={"More About Us"} />
      </div>
      <div className="intro-Image w-full md:w-1/2">
        <img class="w-full h-full " src="/assets/image/hero.jpg" alt="" />
      </div>
    </div>
  );
}
