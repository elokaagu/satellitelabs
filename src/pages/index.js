import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";
import Main from "../components/Main";
import Link from "next/link";
import { device } from "../styles/breakpoints";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Satellite Labs</title>
        <meta name="description" content="Engineering and design studio" />
        <link rel="icon" href="/satellite_logo.png" />
      </Head>
      <Body>
        <SocialMedia>
          <SocialIcon>
            <Link href="mailto:hey@eloka.io">
              <a target="_blank" rel="noopener noreferrer">
                <Image src="/mail.png" alt="image" height={30} width={30} />
              </a>
            </Link>
          </SocialIcon>
          <SocialIcon>
            <Link href="https://www.instagram.com/elokaagu/">
              <a target="_blank" rel="noopener noreferrer">
                <Image
                  src="/instagram.svg"
                  alt="image"
                  height={30}
                  width={30}
                />
              </a>
            </Link>
          </SocialIcon>
          <SocialIcon>
            <Link href="https://twitter.com/ElokaAgu">
              <a target="_blank" rel="noopener noreferrer">
                <Image src="/twitter.png" alt="image" height={30} width={30} />
              </a>
            </Link>
          </SocialIcon>
        </SocialMedia>
        <VideoContainer>
          <video
            src={require("../assets/videobg.mp4")}
            autoPlay
            loop
            playsInline
            muted
            width="100%"
            height="100%"
          />
        </VideoContainer>
        <Overlay>
          <h1>Satellite Labs</h1>
        </Overlay>

        <Dock>
          <KeakieLogo>
            <KeakieCircle>
              <Link href="https://www.keakie.com/discover">
                <a target="_blank" rel="noopener noreferrer">
                  <Image
                    src="/keakiecircle.png"
                    alt="image"
                    height={40}
                    width={40}
                  />
                </a>
              </Link>
            </KeakieCircle>
          </KeakieLogo>

          <KeakieLogo>
            <Link href="https://customuse.com/">
              <a target="_blank" rel="noopener noreferrer">
                <Image
                  src="/customuse.png"
                  alt="image"
                  height={40}
                  width={40}
                />
              </a>
            </Link>
          </KeakieLogo>
          <KeakieLogo>
            <Link href="https://www.thenothingness.com/">
              <a target="_blank" rel="noopener noreferrer">
                <Image
                  src="/satellite_logo.png"
                  alt="image"
                  height={40}
                  width={40}
                />
              </a>
            </Link>
          </KeakieLogo>
        </Dock>
        <BottomOverlay>
          <p>
            crafted by{" "}
            <Link href="https://www.crunchbase.com/person/eloka-agu">
              <a
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  textDecoration: "none",
                  color: "black",
                  fontWeight: "bold",
                }}
              >
                @eloka
              </a>
            </Link>
          </p>
        </BottomOverlay>
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
  justify-content: space-between;
  z-index: 100;

  > h1 {
    font-size: 30px;
    color: black;
    padding-bottom: 20px;
    font-family: "Inter Regular";

    :hover {
      cursor: pointer;
    }

    @media ${device.laptop} {
      font-weight: bold;
      letter-spacing: -0.05rem;
    }
  }
`;

const BottomOverlay = styled.div`
  position: absolute;
  text-align: center;
  color: black;
  top: 95%;
  left: 90%;
  transform: translate(-50%, -50%);
  justify-content: space-between;
  z-index: 100;

  @media ${device.laptop} {
    top: 95%;
    left: 50%;
  }

  > p {
    color: black;
    padding-bottom: 20px;
    font-family: "Inter Regular";
    text-align: right;

    :hover {
      cursor: pointer;
    }
  }

  > a {
    text-decoration: none;
  }
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
  cursor: pointer;
`;

const Dock = styled.div`
  border-radius: 20px;
  padding: 10px;
  padding-left: 50px;
  padding-right: 50px;
  background: rgba(83, 83, 83, 0.1);
  backdrop-filter: blur(13px);
  -webkit-backdrop-filter: blur(13px);
  border: 1px solid rgba(255, 255, 255, 0.18);
  cursor: pointer;
  display: flex;
  position: absolute;
  top: 80%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media ${device.tablet} {
    margin-bottom: 20px;
  }
`;

const KeakieLogo = styled.div`
  padding-left: 10px;
  padding-right: 10px;
  z-index: 200;

  @media ${device.laptop} {
    width: 50px;
    height: 50px;
  }
`;

const ForwardLink = styled.a`
  color: black;
  padding-bottom: 20px;
  text-decoration: none;
  font-weight: bold;
`;

const KeakieCircle = styled.span`
  & > span {
    /* box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); */
    border-radius: 999px;
    object-fit: cover;
  }
`;
