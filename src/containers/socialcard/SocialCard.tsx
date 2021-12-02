import React from 'react';
import {BgSocail, Wrapper, Shape, Container, Card} from "./Socail-Styled"
import data from "@public/meta.json";
import Link from "next/link"
import Image from "next/image"
import {FaFacebook, FaTelegramPlane, FaTwitter, FaYoutube} from "react-icons/fa";

const SocailCard = () => {
    return (
        <Wrapper>
            <div className={""}>
                <img src="/assets/images/vector/section-desert-bottom.svg" alt=""/>
            </div>
            <BgSocail>
                <Container>
                    <Card>
                        {(data?.Socail ?? []).map((item) => (
                            <div
                                key={item.name}
                                className="col-span-1 rounded-lg border shadow-md bg-white border-gray-50"
                            >
                                <div className="relative">
                                    <Shape
                                        className={`${item.icon === "Twitter" ? "bg-blue-50" : item.icon === "Telegram" ? "bg-blue-50" : item.icon === "YouTube" ? "bg-red-50" : item.icon === "Facebook" ? "bg-blue-50" : null}`}>


                                        {item.icon === "Twitter" ?
                                            <FaTwitter size={37} color={"#1C99E6"}/> : item.icon === "Telegram" ?
                                                <FaTelegramPlane size={37}
                                                                 color={"#0081C2"}/> : item.icon === "YouTube" ?
                                                    <FaYoutube size={37}
                                                               color={"#F20000"}/> : item.icon === "Facebook" ?
                                                        <FaFacebook size={37} color={"#3B5998"}/> : null}
                                    </Shape>
                                    <div className={"max-w-xs ml-auto px-2 py-5"}>
                                        <h2 className="md:text-lg text-md mt-14 md:mt-0  text-Darkblue font-bold capitalize mb-2">
                                            {item.name}
                                        </h2>
                                        <p className="m-0 leading-relaxed">{item.description}</p>
                                        <Link href={item.url}>
                                        <span className="text-Blue underline text-right block font-semibold mt-5 mr-6">
                                            {item.Follow}
                                        </span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Card>
                </Container>
            </BgSocail>
        </Wrapper>
    );
};

export default SocailCard;
