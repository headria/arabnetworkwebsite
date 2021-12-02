import styled from "styled-components";
import tw from "twin.macro";

const Wrapper = styled.section`
  ${tw`-mt-20`}
  z-index: -5;
`;
const BackGround = styled.div`
  background-color: #f0eee7;
  width: 100%;
  height: calc(100vh - 50px);
  padding: 0 15px;
  @media (max-width: 768px) {
    height: auto;
  }
  padding-top: 120px;
`;

const Control = styled.div`
  ${tw`flex items-center bg-white justify-center w-14 rounded-full h-14`}
`;

const Row = styled.div`
  ${tw`flex md:flex-row flex-col items-center md:items-center `};
  @media (max-width: 768px) {
    padding-bottom: 70px;
  }
`;
const Col = styled.div`
  ${tw`flex-1`};
  .Start_Img {
    max-width: 100%;
    width: 330px;
    @media (max-width: 768px) {
      width: 250px;
    }
  }
`;
const Container = styled.div`
  ${tw`max-w-screen-lg mx-auto w-full`};
  .Arab_Network {
    ${tw`font-bold py-10 text-sm md:text-3xl leading-6  text-center`}
  }
`;
const Title = styled.h3`
  ${tw`text-Blue font-bold md:text-2xl text-lg`};
`;
const Desc = styled.p`
  color: #81807e;
  ${tw`leading-4 text-sm md:text-lg my-3 max-w-md`}
`;

export { Wrapper, BackGround, Row, Col, Container, Desc, Title, Control };
