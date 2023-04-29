import React from "react";
import Heading from "./Heading";
import TextLayout from "./TextLayout";
import Image from "next/image";

export default function WhyUs() {
  return (
    <div className="flex w-full py-10 md:py-20">
      <div className="w-1/2 px-4 mr-auto ml-auto mt-32">
        <div class="justify-center flex flex-wrap relative">
          <div class="w-full lg:w-6/12 px-4">
            <div class="bg-brandGreen shadow-lg text-center p-8">
              <Image
                class="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                src="/assets/icons/globe.png"
                alt=""
                width={100}
                height={100}
              />

              <p class="text-lg text-white mt-4 font-semibold">
                Wide range of Destination
              </p>
              <p class="text-base text-white opacity-75 mt-2">
                We have a wide range of destination across east africa
                accompanied by a comprehensive itinary for each safari which you
                can choose from.
              </p>
            </div>
            <div class="bg-orange-600 shadow-lg text-center p-8 mt-8">
              <Image
                class="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                src="/assets/icons/price.png"
                alt=""
                width={100}
                height={100}
              />
              <p class="text-lg text-white mt-4 font-semibold">
                Flexible Rates
              </p>
              <p class="text-base text-white opacity-75 mt-2">
                Our Safaris are customizable and can be tailored or totaly
                curated by our clients allowing flexiblity on your budget and
                personal intrest
              </p>
            </div>
          </div>
          <div class=" w-full lg:w-6/12 px-4 lg:mt-16">
            <div class="bg-orange-600 shadow-lg text-center p-8">
              <Image
                class="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                src="/assets/icons/guide.png"
                alt=""
                width={100}
                height={100}
              />
              <p class="text-lg text-white mt-4 font-semibold">
                Local Experienced Guides
              </p>
              <p class="text-base text-white opacity-75 mt-2">
                We provide a professionally qualified local guide who will
                ensure that you are taken care of beyond your expectation, from
                start to finish.
              </p>
            </div>
            <div class="bg-brandGreen shadow-lg text-center p-8 mt-8">
              <Image
                class="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                src="/assets/icons/hand-shake.png"
                alt=""
                width={100}
                height={100}
              />
              <p class="text-lg text-white mt-4 font-semibold">Licensed</p>
              <p class="text-base text-white opacity-75 mt-2">
                We are approved by Tourism Regulatory Authority. We uphold good
                practises with the aim of tourism promotion and development of
                sustainable and responsible tourism in East Africa.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-1/2">
        <Heading
          Main={"It’s wild out there. Go prepared."}
          Sub={"Why Choose Us ?"}
        />
        <TextLayout
          Paragraph={
            "Our team of professional drivers and guides who have been approved by Tourism Regulatory Authority (TRA) ensures maximum accomplishment of the clients desires including quality and courteous services, drives, punctuality and visit to various wildlife animals and monumental places"
          }
        />

        <div class="relative max-h-130 overflow-hidden">
          <div class="absolute inset-0 bg-gradient-to-b from-brandGreen to-transparent z-10 "></div>
          <Image
            class="transform duration-300 group-hover:scale-110"
            src="/assets/images/collection/elephant-4393034_1920.jpg"
            alt=""
            width={700}
            height={500}
          />
        </div>
      </div>
    </div>
  );
}
