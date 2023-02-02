import { Inter } from "@next/font/google";
import Link from "next/link";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <nav className="flex sm:justify-center">
        <Link href="/about">about</Link>
      </nav>
    </>
  );
  // <style jsx>{`
  //   div {
  //     color:tomato
  //   }
  // `}</style>
}
