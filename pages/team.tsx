import React from "react";
import {Footer, Header, Slider} from "@components";
import {TeamContainer, NewsLetter} from "@containers";

const Team = () => {
    return <>
        <Header/>
        <Slider>
            <div className={"w-full  flex flex-col justify-center items-center space-y-4"}>
                <h3 className={"text-4xl font-bold text-white"}>Arab Team</h3>
                <p className={"text=lg text-white opacity-90 text-center leading-relaxed capitalize"}>the Arab community decided to revolutaionize the Arab wrold
                    <br/>
                    Togethor we are marking the Arabic dream
                    possible. Be part of the future.
                </p>
            </div>
        </Slider>
        <TeamContainer/>
        <NewsLetter/>
        <Footer/>
    </>;
};

export default Team;
