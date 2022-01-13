import React from "react";
import Head from "next/head";
import Image from "next/image";
import logoPic from "../public/logoPic.svg";
import MyForm from "../components/MyForm";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Satellite Labs | Contact</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      </Head>
      <main
        className="bg-gradient-to-tr from-slate-900 to-indigo-800 text-white w-screen h-screen flex justify-center items-center flex-col overscroll-behavior: auto;
 "
      >
        <Link href="/">
          <Image
            src={logoPic}
            alt="logoPic"
            width="128"
            height="128"
            className="cursor-pointer"
          />
        </Link>
        <h1 className="text-3xl font-normal cursor-pointer ">Contact</h1>
        <MyForm />
      </main>
    </div>
  );
}
