import React from 'react';
import {BsStarFill, BsStarHalf, BsStar} from "react-icons/bs"
import styled from "styled-components";
import tw from "twin.macro";

const Stars = () => {
    return (
        <Like>
            <BsStarFill color={"#FFD700"} size={12} />
            <BsStarFill color={"#FFD700"} size={12} />
            <BsStarFill color={"#FFD700"} size={12} />
            <BsStar size={12} />
            <BsStar size={12} />
        </Like>
    );
};

export default Stars;

const Like = styled.div`
  ${tw`inline-flex space-x-2`};
`;