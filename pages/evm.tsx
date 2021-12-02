import React from "react";
import {Footer, Header, Slider} from "@components";
import {EvmContainer, NewsLetter} from "@containers";

const EVM = () => {
    return <>
        <Header/>
        <Slider>
            <div className={"w-full  flex flex-col justify-center items-center space-y-4"}>
                <h3 className={"text-4xl font-bold text-white"}>Arab EVm</h3>
            </div>
        </Slider>
        <EvmContainer/>
        <NewsLetter/>
        <Footer/>
    </>;
};

export default EVM;
