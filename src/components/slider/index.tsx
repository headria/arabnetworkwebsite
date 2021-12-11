import React, { useEffect } from "react";
import { SliderWrapper, Convas } from "./Slider-styled";
import { params } from "../../config/particles";
import { tsParticles } from "tsparticles";

interface ISliderProps {
  children: React.ReactNode;
}

interface ISliderPorps {
  fullHeight?: boolean;
  children: React.ReactNode;
}

const Slider = ({ children, fullHeight }: ISliderPorps) => {
  useEffect(() => {
    tsParticles.load("tsparticles", params);
  }, []);
  return (
    <>
      <SliderWrapper isFullHeight={fullHeight}>
        <Convas id="tsparticles" className="" />
        {children}
      </SliderWrapper>
    </>
  );
};

export default Slider;

// w-full h-400 absolute inset-0 top-0
