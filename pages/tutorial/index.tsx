import React from "react";
import {Footer, Header} from "@components";
import {NewsLetter, TutorailContainer} from "@containers";

const Tutorial = () => {
    return <>
        <Header isTutorailPage={true} />
        <TutorailContainer/>
        <NewsLetter/>
        <Footer/>
    </>;
};

export default Tutorial;
