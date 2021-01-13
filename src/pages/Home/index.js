import React from "react";
import logo from "../../assets/Playartbola2.png";
import { HomeWrapper } from './styles';

export default function Home() {
  return (
    <HomeWrapper>
      <div className="home-start-logo">
        <img src={logo} alt="PlayArt Logo" />
        <h1>PlayArt</h1>
      </div>
    </HomeWrapper>
  );
}

