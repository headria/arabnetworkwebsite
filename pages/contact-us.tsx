import React from "react";
import {Footer, Header, Slider} from "@components";
import {ContactContainer, NewsLetter} from "@containers";

const ContactUs = () => {
    return <>
        <Header/>
        <Slider>
            <div className={"w-full  flex flex-col justify-center items-center space-y-4"}>
                <h3 className={"text-4xl font-bold text-white"}>Contact us</h3>
            </div>
        </Slider>
        <ContactContainer/>
        <NewsLetter/>
        <Footer/>
    </>;
};

export default ContactUs;
