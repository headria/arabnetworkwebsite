import styled from "styled-components";
import tw from "twin.macro";

const Container = styled.div`
  ${tw`max-w-screen-xl w-full mx-auto px-4`};


  p {
    ${tw`leading-relaxed text-sm md:text-lg`};
  }
`;

const BgAbout = styled.div`
  background-color: #F0EEE7;
  padding: 140px 0;
  margin-top: -79px;
`;

export {Container, BgAbout};