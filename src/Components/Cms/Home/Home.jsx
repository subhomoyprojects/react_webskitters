import React from "react";
import "./Home.css";
import { dummyImage } from "../../../images/Images";

export default function Home() {
  return (
    <>
      <img src={dummyImage} className="imgControl" alt="" />
    </>
  );
}
