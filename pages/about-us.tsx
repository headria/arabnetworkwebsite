import React from "react";
import {Footer, Header, Slider} from "@components";
import {AboutContainer, NewsLetter} from "@containers";

const AboutUS = () => {
    return <>
        <Header/>
        <Slider>
            <div className={"w-full  flex flex-col justify-center items-center space-y-4"}>
                <h3 className={"text-4xl font-bold text-white"}>About us</h3>
            </div>
        </Slider>
        <AboutContainer/>
        <NewsLetter/>
        <Footer/>
    </>;
};

export default AboutUS;
