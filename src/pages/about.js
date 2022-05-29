import React from "react";
import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";
import Main from "../components/Main";
import Link from "next/link";

function about(props) {
  return (
    <div>
      <Head>
        <title>Satellite Labs | About </title>
        <meta name="description" content="About Satellite" />
        <link rel="icon" href="/satellite_logo.png" />
      </Head>
      <Body>
        <h1>Eloka Agu</h1>
      </Body>
    </div>
  );
}

export default about;

const Body = styled.div`
  height: 100vh;
  width: 100vw;
  display: grid;
  align-items: center;
  text-align: center;
  justify-content: space-evenly;

  > h1 {
    font-size: 30px;
    color: white;
    padding-bottom: 20px;

    font-family: "Inter Regular";

    :hover {
      cursor: pointer;
    }
  }

  > p {
    font-size: 16px;
    color: white;
    padding-bottom: 20px;
  }
`;
