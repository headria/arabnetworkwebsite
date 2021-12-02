import React from "react";
import Particles from "react-particles-js";
import {SliderWrapper} from "./Slider-styled";
import {params} from "./particles";

interface ISliderProps {
    children: React.ReactNode;
}

interface ISliderPorps {
    fullHeight?: boolean;
    children: React.ReactNode;
}

const Slider = ({children, fullHeight}: ISliderPorps) => {
    return (
        <>
            <SliderWrapper  isFullHeight={fullHeight}>
                <Particles
                    className={""}
                    canvasClassName={"w-full absolute top-0"}
                    params={params}
                />
                {children}
            </SliderWrapper>
        </>
    );
};

export default Slider;
