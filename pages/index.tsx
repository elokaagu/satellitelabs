import React from "react";
import Head from "next/head";
import Image from "next/image";
import logoPic from "../public/logoPic.svg";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Satellite Labs</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      </Head>
      <div className="bg-gradient-to-tr from-slate-900 to-indigo-800 text-white w-screen h-screen flex justify-center items-center flex-col  ">
        <Image
          src={logoPic}
          alt="logoPic"
          width="256"
          height="256"
          className="cursor-pointer"
        />
        <h1 className="text-3xl font-normal cursor-pointer ">Satellite Beta</h1>
      </div>
    </div>
  );
}
