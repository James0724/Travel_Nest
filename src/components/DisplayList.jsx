import React from "react";

export default function DisplayList() {
  return (
    <div class="relative -top-10 ">
      <div class="bg-white shadow-xl rounded-lg overflow-x-auto w-full flex space-x-2 px-4 py-4">
        <div>
          <div class="flex items-center w-80">
            <div class="w-1/4 h-10 bg-[url('/assets/icons/hand-shake.png')] bg-center bg-no-repeat bg-contain"></div>
            <div class="w-3/4">
              <p class="whitespace-nowrap font-bold text-sm md:text-base">
                Approved by the Government
              </p>
            </div>
          </div>
        </div>
        <div>
          <div class="flex items-center w-80">
            <div class="w-1/4 h-10 bg-[url('/assets/icons/globe.png')] bg-center bg-no-repeat bg-contain"></div>
            <div class="w-3/4">
              <p class="whitespace-nowrap font-bold text-sm md:text-base">
                Comprehensive Intinaries
              </p>
            </div>
          </div>
        </div>
        <div>
          <div class="flex items-center w-80">
            <div class="w-1/4 h-10 bg-[url('/assets/icons/price.png')] bg-center bg-no-repeat bg-contain"></div>
            <div class="w-3/4">
              <p class="whitespace-nowrap font-bold text-sm md:text-base">
                Pocket Friendly Rates
              </p>
            </div>
          </div>
        </div>
        <div>
          <div class="flex items-center w-80">
            <div class="w-1/4 h-10 bg-[url('/assets/icons/guide.png')] bg-center bg-no-repeat bg-contain"></div>
            <div class="w-3/4">
              <p class="whitespace-nowrap font-bold text-sm md:text-base">
                Local Experienced Guides
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
