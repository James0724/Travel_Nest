import React from "react";

export function ButtonPrimary({ Text }) {
  return (
    <button
      type="button"
      class="my-8 rounded-full text-white bg-brandGreen font-semibold hover:bg-orange-600  hover:text-black transform duration-500 focus:outline-none text-sm px-8 py-5 text-center mr-2 mb-2"
    >
      {Text}
    </button>
  );
}
export function ButtonSecondary({ Text }) {
  return (
    <button
      type="button"
      class="my-8 rounded-full text-brandGreen font-semibold bg-slate-100 hover:bg-slate-200 transform duration-500 focus:outline-none  text-sm px-8 py-5 text-center mr-2 mb-2"
    >
      {Text}
    </button>
  );
}
