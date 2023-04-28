import React from "react";

export default function TextLayout({ Paragraph }) {
  return (
    <article class="pb-8 cursor-pointer transform duration-500 hover:-translate-y-1">
      <p class="text-lg leading-relaxed  ">{Paragraph}</p>
    </article>
  );
}
