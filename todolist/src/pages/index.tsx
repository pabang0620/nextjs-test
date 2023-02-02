import { Inter } from "@next/font/google";
import Link from "next/link";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Link href="/About">about</Link>
    </>
  );
  // <style jsx>{`
  //   div {
  //     color:tomato
  //   }
  // `}</style>
}
