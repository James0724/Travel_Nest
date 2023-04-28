import React from "react";

export default function Hero() {
  return (
    <section className="min-h-screen relative bg-[url('/assets/image/hero.jpg')] bg-cover bg-center bg-no-repeat ">
      <div className="absolute inset-0 bg-gradient-to-r from-amber-800/95 to-amber-700/5"></div>

      <div className="relative flex flex-col my-auto max-w-xl justify-center lg:pl-16 px-4 h-screen">
        <h1 className="text-white text-3xl font-extrabold sm:text-5xl">
          Let us find your
          <strong className="block font-extrabold text-cyan-950">
            Memorable Safari.
          </strong>
        </h1>

        <p className="mt-4 max-w-lg sm:text-xsl/relaxed text-white">
          Journey through a collection of world's most picturesque destinations
          with divine travel nest safaris
        </p>

        <div className="mt-8 flex gap-4">
          <a
            href="#"
            className="block w-1/2  bg-cyan-950 px-12 py-3 text-sm font-medium text-white shadow hover:bg-cyan-700 focus:outline-none focus:ring active:bg-cyan-500 "
          >
            About Us
          </a>

          <a
            href="#"
            className="block w-1/2  bg-white px-12 py-3 text-sm font-medium text-cyan-600 shadow hover:text-cyan-700 focus:outline-none focus:ring active:text-cyan-500 "
          >
            Enquiries
          </a>
        </div>
      </div>
    </section>
  );
}
