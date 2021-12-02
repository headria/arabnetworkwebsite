import styled, { css } from "styled-components";
import tw from "twin.macro";

const Wrapper = styled.section`
  position: relative;
`;
const BgRoad = styled.div`
  min-height: calc(100vh - 100px);
  ${tw`bg-Darkblue  h-full md:pt-24 py-10`};
  margin-top: -20px;
  @media (min-width: 767px) {
    margin-top: -35px;
  }
  @media (min-width: 1024px) {
    margin-top: -45px;
  }
  @media (min-width: 1204px) {
    margin-top: -87px;
  }
`;
const Title = styled.h3`
  ${tw`text-xl my-4 text-white font-bold md:text-3xl`};
`;

const SubTitle = styled.p`
  ${tw`text-white opacity-90 leading-normal`};
`;
const TopSection = styled.div`
  ${tw`text-center p-14`};
  background-image: url("/assets/images/bg/starts.png");
  background-repeat: repeat-x;
  background-position: top right;
  background-size: contain;
`;
interface ICardProps {
  isArrowRight?: boolean;
}

const Card = styled.div<ICardProps>`
  background-color: #355166;
  @media (min-width: 766px) {
    width: 80%;
  }
  @media (min-width: 769px) {
    width: 40%;
  }
  ${tw` relative rounded-2xl px-4 my-4 py-5`};
  &:after {
    content: "";
    transform: translateY(-50%);
    -webkit-transform: translateY(-50%);
    -o-transform: translateY(-50%);
    -moz-transform: translateY(-50%);
    ${({ isArrowRight }) =>
      isArrowRight
        ? css`
            right: -20px;
            border-color: transparent transparent transparent
              rgba(255, 255, 255, 0.2);
            border-width: 12px 0 12px 20px;
          `
        : css`
            left: -20px;

            border-width: 12px 20px 12px 0;
            border-color: transparent rgba(255, 255, 255, 0.2) transparent
              transparent;
          `}
    top: 50%;
    ${tw`absolute w-5 h-5`}
  }
  h4 {
    ${tw`text-sm my-4 text-white font-bold md:text-xl `};
  }
  p {
    ${tw`text-white opacity-90 leading-normal`};
  }
`;

const Middle = styled.div`
  height: 400px;
  overflow-y: scroll;
  width: 100%;
  direction: rtl;
  ${tw`max-w-screen-2xl mx-auto relative px-6`}
  ::-webkit-scrollbar {
    width: 7px;
    background: #355166;
  }
  ::-webkit-scrollbar-track {
    border-radius: 5px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #fff;
    border-radius: 10px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #fff;
  }
`;
const Row = styled.div`
  ${tw`flex justify-between items-center md:flex-row flex-col gap-24`}
`;
interface IColProps {
  isRight?: boolean;
}
const Col = styled.div<IColProps>`
  ${tw`flex  gap-5 justify-between`};
  @media (min-width: 768px) {
    justify-content: ${({ isRight }) => (isRight ? "flex-start" : "flex-end")};
  }
`;
const Number = styled.div`
  gap: 10.2rem;
  @media (max-width: 769px) {
    right: 10px;
  }
  ${tw`absolute top-14   flex-col   justify-between   md:left-1/2  hidden md:flex`};
  .line {
    left: 50%;
    height: 100%;
    ${tw`absolute top-0 border-yellow-500  border-2 border-dashed`}
  }
  .Number_Circle {
    ${tw`bg-white relative flex items-center justify-center w-12 h-12 rounded-full ring-yellow-400 ring-2`}
  }
`;

export {
  BgRoad,
  TopSection,
  SubTitle,
  Title,
  Wrapper,
  Middle,
  Card,
  Row,
  Col,
  Number,
};
