import styled from "styled-components";
import tw from "twin.macro";

const Wrapper = styled.section`
  ${tw`mt-12`}
  position: relative;
  .top_Item {
    position: absolute;
    width: 100%;
  }
  .bottom_Academy {
    position: absolute;
    width: 100%;
    bottom: -5px;
    @media (min-width: 768px) {
      bottom: -14px;
    }
  }
`;
const BackGround = styled.div`
  background-color: #022640;
  @media (min-width: 768px) {
    height: calc(100vh);
  }
  width: 100%;
  ${tw`md:py-44 py-24`};
`;

const Control = styled.div`
  ${tw`flex items-center bg-white justify-center w-14 rounded-full h-14`}
`;

const Row = styled.div`
  ${tw`flex sm:flex-row flex-col pt-12 px-2`};
`;
const Col = styled.div`
  ${tw`flex-1 `};
  .Uniq_Skills {
    &:before {
      content: "";
      position: absolute;
      left: 39px;
      width: 3px;
      bottom: 12px;
      height: 70%;
      z-index: 2;
      border: 2px dashed #ffcb57;
    }
  }
  .Image_Academy {
    width: 300px;
    @media (min-width: 768px) {
      width: 350px;
    }
  }
  .Technical_Analysis,
  .Uniq_Skills {
    ${tw`flex gap-7`};
    h3 {
      ${tw`text-white text-xl font-medium`};
    }
    p {
      color: rgba(255, 255, 255, 0.8);
      line-height: 20px;
      ${tw`my-3`};
    }

    .Circle {
      ${tw`bg-white w-20 h-20 z-10 rounded-full flex items-center justify-center`};

      svg {
        width: 50px;
        height: 50px;
      }
    }
  }
`;
const Container = styled.div`
  ${tw`max-w-screen-xl mx-auto w-full`};
`;
const Title = styled.h3`
  ${tw`text-Blue font-medium text-xl`};
`;
const Desc = styled.p`
  color: #81807e;
  ${tw`leading-4 text-sm md:text-lg my-3`}
`;

export { Wrapper, BackGround, Row, Col, Container, Desc, Title, Control };
