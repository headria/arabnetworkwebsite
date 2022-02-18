import React from "react";

import { Container, Header, Main, Footer, Slider } from "@components";
import {
  ArabNetWork,
  ChooseUs,
  Academy,
  Research,
  NewsLetter,
  Wallet,
  RoadMap,
  SliderContainer,
} from "@containers";
const Home: React.FC = () => {
  return (
    <>
      <Header />
      <SliderContainer />
      <ArabNetWork />
      <ChooseUs />
      <Academy />
      <Research />
      <RoadMap />
      <Wallet />
      <NewsLetter />
      <Footer />
    </>
  );
};

export default Home;
