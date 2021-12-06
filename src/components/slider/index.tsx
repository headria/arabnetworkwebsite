import React, { useEffect } from "react";
import { SliderWrapper } from "./Slider-styled";
import { params } from "./particles";
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
        <div id="tsparticles" className="w-full absolute top-0"></div>
        {/* <Particles
                    className={""}
                    canvasClassName={"w-full absolute top-0"}
                    params={params}
                /> */}
        {children}
      </SliderWrapper>
    </>
  );
};

export default Slider;
