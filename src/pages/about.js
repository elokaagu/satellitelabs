import React from "react";
import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";
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
        <VideoContainer>
          <video
            src={require("../assets/videobg.mp4")}
            autoPlay
            loop
            muted
            width="100%"
            height="auto"
          />
        </VideoContainer>
        <Overlay>
          <OverlayText>
            <h1>Eloka Agu</h1>
            <p>
              Eloka is a software engineer, product designer and the co-founder
              of Keakie, a streaming service for DJs. He also is an advisor to
              several early stage technology startups, and has interests ranging
              from hardware, philosophy and product through to payments,
              technology and culture.
            </p>
            <p>
              {" "}
              All of his work is published through Satellite Labs. For
              consulting, collaboration, speaking or general enquiries - feel
              free to get in contact via email or dm.
            </p>
          </OverlayText>
          <OverlayImage></OverlayImage>
        </Overlay>
      </Body>
    </div>
  );
}

export default about;

const Body = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: left;
  justify-content: space-evenly;
`;

const VideoContainer = styled.div`
  position: fixed;
  right: 0;
  bottom: 0;
  min-width: 100%;
  min-height: 100%;
`;

const Overlay = styled.div`
  position: absolute;
  text-align: left;
  color: black;
  top: 50%;
  left: 40%;
  transform: translate(-50%, -50%);
  justify-content: space-between;
  z-index: 100;
`;

const OverlayText = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;

  > h1 {
    font-size: 30px;
    color: black;
    padding-bottom: 20px;

    font-family: "Inter Bold";

    :hover {
      cursor: pointer;
    }
  }

  > p {
    font-size: 16px;
    color: black;
    padding-bottom: 20px;
    font-family: "Inter Medium";
    width: 60%;
  }
`;

const OverlayImage = styled.div`
  /* position: absolute;
  width: 242px;
  height: 327px;
  background: url(FRzA_6yX0AI2Z8i.jpg); */
`;
