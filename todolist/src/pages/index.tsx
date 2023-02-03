import { Inter } from "@next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <nav className="flex sm:justify-center w-screen">
        <Link href="/todoList">about</Link>
      </nav>
    </>
  );
}
