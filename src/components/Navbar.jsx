import Image from "next/image";
import React from "react";

export default function Navbar() {
  return (
    <>
      <div class="flex flex-wrap place-items-center">
        <section class=" mx-auto z-30">
          <nav class="flex justify-between bg-brandGreen text-white w-screen">
            <div class="px-5 xl:px-12 py-2 flex w-full items-center">
              <a class="max-h-25 overflow-hidden" href="#">
                <Image
                  class="transform duration-300 group-hover:scale-110"
                  src="/assets/logo/Logo.png"
                  alt="logo"
                  priority
                  width={100}
                  height={50}
                />
              </a>

              <ul class="hidden md:flex px-4 mx-auto font-semibold font-heading space-x-12">
                <li>
                  <a class="hover:text-gray-200" href="#">
                    Home
                  </a>
                </li>
                <li>
                  <a class="hover:text-gray-200" href="#">
                    About us
                  </a>
                </li>
                <li>
                  <a class="hover:text-gray-200" href="#">
                    Destinations
                  </a>
                </li>
                <li>
                  <a class="hover:text-gray-200" href="#">
                    Contact Us
                  </a>
                </li>
              </ul>

              <div class="hidden xl:flex items-center space-x-5 ">
                <a class="flex items-center hover:text-gray-200" href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  <span class="flex absolute -mt-5 ml-4">
                    <span class="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-pink-400 opacity-75"></span>
                    <span class="relative inline-flex rounded-full h-3 w-3 bg-pink-500"></span>
                  </span>
                </a>

                <a class="flex items-center hover:text-gray-200" href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6 hover:text-gray-200"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </a>
              </div>
            </div>

            <a class="xl:hidden flex mr-6 items-center" href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 hover:text-gray-200"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span class="flex absolute -mt-5 ml-4">
                <span class="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-pink-400 opacity-75"></span>
                <span class="relative inline-flex rounded-full h-3 w-3 bg-pink-500"></span>
              </span>
            </a>
            <a class="navbar-burger self-center mr-12 xl:hidden" href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 hover:text-gray-200"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </a>
          </nav>
        </section>
      </div>

      {/* <div class="absolute bottom-0 right-0 mb-4 mr-4 z-10">
        <div>
          <a
            title="Follow me on twitter"
            href="https://www.twitter.com/asad_codes"
            target="_blank"
            class="block w-16 h-16 rounded-full transition-all shadow hover:shadow-lg transform hover:scale-110 hover:rotate-12"
          >
            <img
              class="object-cover object-center w-full h-full rounded-full"
              src="https://www.imore.com/sites/imore.com/files/styles/large/public/field/image/2019/12/twitter-logo.jpg"
            />
          </a>
        </div>
      </div> */}
    </>
  );
}
