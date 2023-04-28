import React from "react";

export function ButtonPrimary({ Text }) {
  return (
    <button
      type="button"
      class="my-8 text-white bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium  text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:focus:ring-yellow-900"
    >
      {Text}
    </button>
  );
}
export function ButtonSecondary({ Text }) {
  return (
    <button
      type="button"
      class="my-8 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium  text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
    >
      {Text}
    </button>
  );
}
