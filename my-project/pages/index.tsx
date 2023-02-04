import type { NextPage } from "next";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <nav className="bg-sky-300 flex sm:justify-around">
      <Link href="/login">login</Link>
      <Link href="/login">login</Link>
    </nav>
  );
};

export default Home;
