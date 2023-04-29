import Image from "next/image";
import { Inter } from "next/font/google";
import Hero from "@/components/Hero";
import DisplayList from "@/components/DisplayList";
import AboutIntro from "@/components/AboutIntro";
import WhyUs from "@/components/WhyUs";
import Featured from "@/components/Featured";
import SafariType from "@/components/SafariType";
import Banner from "@/components/Banner";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="">
      <Hero />
      <div className="px-4 md:px-20">
        <DisplayList />
        <AboutIntro />
        <SafariType />
        <Featured />
        <WhyUs />
      </div>
      <Banner />
      <WhyUs />
    </main>
  );
}
