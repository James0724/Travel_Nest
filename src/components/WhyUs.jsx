import React from "react";
import Heading from "./Heading";
import TextLayout from "./TextLayout";

export default function WhyUs() {
  return (
    <div className="flex w-full py-10 md:py-20">
      <div className="w-1/2 px-4 mr-auto ml-auto mt-32">
        <div class="justify-center flex flex-wrap relative">
          <div class="w-full lg:w-6/12 px-4">
            <div class="bg-sky-500 shadow-lg text-center p-8">
              <img
                alt="..."
                class="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/react.jpg"
              />
              <p class="text-lg text-white mt-4 font-semibold">ReactJS</p>
              <p class="text-base text-white opacity-75 mt-2">
                A JavaScript library for building user interfaces maintaned by
                Facebook and community of developers.
              </p>
            </div>
            <div class="bg-emerald-500 shadow-lg text-center p-8 mt-8">
              <img
                alt="..."
                class="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/vue.jpg"
              />
              <p class="text-lg text-white mt-4 font-semibold">Vue.js</p>
              <p class="text-base text-white opacity-75 mt-2">
                An open-source Model–view–viewmodel JavaScript framework for
                building user interfaces.
              </p>
            </div>
          </div>
          <div class=" w-full lg:w-6/12 px-4 lg:mt-16">
            <div class="bg-orange-500 shadow-lg text-center p-8">
              <img
                alt="..."
                class="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/js.png"
              />
              <p class="text-lg text-white mt-4 font-semibold">JavaScript</p>
              <p class="text-base text-white opacity-75 mt-2">
                Object-oriented programming language that conforms to the
                ECMAScript specification.
              </p>
            </div>
            <div class="bg-red-600 shadow-lg text-center p-8 mt-8">
              <img
                alt="..."
                class="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/angular.jpg"
              />
              <p class="text-lg text-white mt-4 font-semibold">Angular</p>
              <p class="text-base text-white opacity-75 mt-2">
                a JavaScript-based open-source front-end web framework mainly
                maintained by Google.
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
      </div>
    </div>
  );
}
