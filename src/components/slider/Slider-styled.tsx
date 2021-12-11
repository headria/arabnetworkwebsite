import styled, { css } from "styled-components";
import tw from "twin.macro";

type SliderWrapper = {
  isFullHeight?: boolean;
};

const SliderWrapper = styled.div<SliderWrapper>`
  convas {
    height: 300px !important;
  }

  ${(props) =>
    props.isFullHeight
      ? css`
          height: auto;
          @media (min-width: 800px) {
            height: calc(100vh - 150px);
          }
        `
      : css`
          @media (max-width: 765px) {
            height: 400px;
          }

          @media (min-width: 765px) {
            height: 450px;
          }
        `}

  background-color: #022640;
  position: relative;
  width: 100%;
  padding: 20px 0;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  place-content: center;

  svg {
    position: absolute;
    bottom: 0;
  }

  .middle_Content {
    ${tw`px-4 w-full max-w-screen-xl mx-auto`}
  }
`;
const Row = styled.div`
  ${tw`flex flex-col px-3  w-full max-w-screen-xl  md:absolute  bottom-0 md:flex-row justify-between flex-wrap`};
`;
const Col = styled.div`
  ${tw`w-full flex-1 `};

  .left_Side {
    ${tw`space-y-5`};
  }

  .Stars_img {
    ${tw`hidden md:block mt-5  absolute`};
    width: 500px;
    @media (max-width: 1024px) {
      width: 400px;
    }
  }
`;

const Title = styled.h1`
  ${tw`text-white text-xl lg:text-5xl font-bold`};
`;
const SubTitle = styled.h3`
  color: rgb(204 212 217);
  ${tw`text-lg lg:text-4xl font-normal`}
`;

const Convas = styled.div`
  .tsparticles-canvas-el {
    height: 450px !important;
    top: 40px !important;
  }
`;

export { SliderWrapper, Row, Col, Title, SubTitle, Convas };
