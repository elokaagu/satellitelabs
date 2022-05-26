import React from "react";
import styled from "styled-components";
import videobg from "../assets/videobg.mp4";

function Main(props) {
  return (
    <div>
      <Body>
        <h1>Hello Main</h1>
        <video src={require("../assets/videobg.mp4")} autoPlay loop muted />
      </Body>
    </div>
  );
}

export default Main;

const Body = styled.div`
  color: white;
  width: 100%;
  height: 100vh;
`;
