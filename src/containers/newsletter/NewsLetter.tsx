import {BgNews, Wrapper} from "./News-styled";
import {Subscribe} from "@components";
import React from "react";
import {FooterContainer} from "@components/footer/Footer-styled";

interface INewsLatterProps {
    isWhite?: boolean
}

const NewsLetter = ({isWhite}: INewsLatterProps) => {
    return (
        <Wrapper>
            <div className={"absolute w-full top-0"}>
                <img
                    className={"w-full h-full"}
                    src={`/assets/images/vector/${isWhite ? "Section_bottom.png" : "section-curve-bottom-grey.svg"}`}
                    alt=""
                />
            </div>
            <BgNews>
                <Subscribe
                    center={true}
                    className={"mx-auto"}
                    titleClass={"py-5 text-4xl font-semibold text-Darkblue"}
                    title={"Subscribe For Newsletter"}
                />
            </BgNews>
            <div className={"absolute w-full bottom-0 xl:-mb-20 sm:-mb-10 -mb-5"}>
                <img
                    className={"w-full h-full"}
                    src="/assets/images/vector/section-header-desert-2.svg"
                    alt=""
                />
            </div>
        </Wrapper>
    );
};

export default NewsLetter;
