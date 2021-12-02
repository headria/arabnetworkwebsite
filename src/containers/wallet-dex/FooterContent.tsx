import React from 'react';
import styled from "styled-components";
import tw from "twin.macro";

interface IFooterProps {
    title: string
    desc: string
}

const FooterContent = ({desc, title}: IFooterProps) => {
    return (
        <Bg>
            <div className={"flex items-center flex-col justify-center "}>
                <h3 className={"text-bold text-2xl "}>{title}</h3>
                <p className={"leading-loose text-center max-w-2xl mt-5"}>{desc}</p>
            </div>
        </Bg>

    );
};

export default FooterContent;


const Bg = styled.div`
  width: 100%;
  height: 400px;
  position: relative;
  border-top-left-radius: 60px;
  border-top-right-radius: 60px;
  ${tw`bg-white py-10`};
`;


