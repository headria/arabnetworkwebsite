import React from "react";
import {Footer, Header, Slider} from "@components";
import {CommunityContainer, NewsLetter} from "@containers";

const Community = () => {
    return <>
        <Header/>
        <Slider>
            <div className={"w-full  flex flex-col justify-center items-center space-y-4"}>
                <h3 className={"text-4xl font-bold text-white"}>Community</h3>
                <p className={"text=lg text-white opacity-90 text-center leading-relaxed capitalize"}>
                    vechain Empowers Community Members To Work together And Create Valuebale
                    <br/>
                    Transactions
                </p>
            </div>
        </Slider>
        <CommunityContainer/>
        <NewsLetter/>
        <Footer/>
    </>;
};

export default Community;
