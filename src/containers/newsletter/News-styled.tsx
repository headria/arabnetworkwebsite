import styled from "styled-components";
import tw from "twin.macro";

const BgNews = styled.div`
  ${tw`bg-gradient-to-b from-LightBlue to-LightBrown flex justify-center items-center w-full`};
  margin-top: -6.5rem;
  height: 470px;
  @media (max-width: 768px) {
    height: 350px;
  }
`;

const Wrapper = styled.div`
  ${tw`relative`};
`;

export { BgNews, Wrapper };
