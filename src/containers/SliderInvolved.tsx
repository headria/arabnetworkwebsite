import React from 'react';
import {Slider} from "@components"
import styled from "styled-components";
import tw from "twin.macro";

const SliderInvolved = () => {
    return (
        <div>
            <Slider>
                <div className={"w-full  flex flex-col justify-center items-center space-y-4"}>
                <Title>Get Involved</Title>
                    <SubTitle>
                        The Arab Commiunity decided to revolutionize the Arab Wrold
                        <br/>
                        Together we are marking the Arab Dream possible.Be a Part of the feature
                    </SubTitle>
                </div>
            </Slider>
        </div>
    );
};

export default SliderInvolved;


const Title = styled.div`
${tw`text-white text-lg md:text-2xl`};
`
const SubTitle = styled.div`
  ${tw`text-white opacity-90 text-lg`};
`