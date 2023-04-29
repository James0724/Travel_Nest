import React from "react";

export default function Heading({ Main, Sub }) {
  return (
    <div className="">
      <div className="uppercase">
        <h2>{Sub}</h2>
      </div>
      <div className="mb-4 text-4xl font-extrabold leading-none tracking-wide text-gray-900 md:text-5xl lg:text-6xl ">
        <h1 className="font-title ">{Main}</h1>
      </div>
    </div>
  );
}
