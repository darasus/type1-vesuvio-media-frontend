import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <p>Home page</p>
      <Link href="/about">Go to about</Link>
    </div>
  );
}
