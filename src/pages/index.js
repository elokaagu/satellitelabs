import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";
import Main from "../components/Main";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Satellite Labs</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Body>
        <SocialMedia>
          <SocialIcon>
            <Image src="/instagram.svg" alt="image" height={30} width={30} />
          </SocialIcon>
          <SocialIcon>
            <Image src="/twitter.png" alt="image" height={30} width={30} />
          </SocialIcon>
        </SocialMedia>
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
          <h1>Satellite Labs</h1>
        </Overlay>
      </Body>
    </div>
  );
}

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

const Overlay = styled.div`
  position: absolute;
  text-align: center;
  color: black;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;
`;

const VideoContainer = styled.div`
  position: fixed;
  right: 0;
  bottom: 0;
  min-width: 100%;
  min-height: 100%;
`;

const SocialMedia = styled.div`
  z-index: 150;
  position: absolute;
  top: 50px;
  right: 50px;
  display: flex;
  flex-direction: row;
`;

const SocialIcon = styled.div`
  padding: 10px;
`;