import React from "react";
import {Footer, Header} from "@components";
import {NewsLetter, TutorailDetailsContainer} from "@containers";

const TutorialDetails = () => {
    return <>
        <Header isTutorailPage={true} />
        <TutorailDetailsContainer/>
        <NewsLetter/>
        <Footer/>
    </>;
};

export default TutorialDetails;
