import { ImageResponse } from "next/og";
import { quotes } from "./data.js";

export const runtime = "edge";

export const alt = "Wisdom Cards";

const factor = 1.4;
export const size = {
  width: 720 * factor,
  height: 840 * factor,
};

export const contentType = "image/png";

function sanitizeName(name) {
  if (name.indexOf("(") >= 0) {
    name = name.substring(0, name.indexOf("(")).trim();
  }
  if (name.split(" ").length > 2) {
    let parts = name.split(" ");
    let surname = parts.pop();
    parts = parts.map((i) => i.charAt(0) + ".");
    parts.push(surname);
    name = parts.join(" ");
  }
  return name;
}

export async function GET(request, context) {
  let random = () => Math.round(Math.random() * quotes.length + 1);

  let { en, author, id: index } = quotes[random()];
  author = sanitizeName(author);
  if (!Boolean(en)) {
    en = "";
  }
  if (!Boolean(author)) {
    author = "";
  }
  if (!Boolean(index)) {
    index = "";
  }
  return new ImageResponse(<Layout en={en} author={author} index={index} />, {
    ...size,
  });
}

function Layout({ en, author, index }) {
  return (
    <div tw="w-full h-full bg-white text-[#101010] flex items-center text-center">
      <div tw="flex p-8 w-full h-full rounded-2xl">
        <p tw="leading-10 m-auto text-4xl">{en}</p>
      </div>
      <div tw="flex justify-between absolute w-full bg-amber-300 bottom-0 right-0 p-4 px-8 text-3xl uppercase font-bold">
        <p>{author}</p>
        <p>{index}</p>
      </div>
      <div tw="flex absolute w-full h-12 bg-amber-300 inset-0 p-4 px-8" />
    </div>
  );
}
