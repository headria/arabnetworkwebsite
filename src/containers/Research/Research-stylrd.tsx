import styled from "styled-components";
import tw from "twin.macro";

const Row = styled.div`
  ${tw`flex  sm:flex-row flex-col justify-center  items-center  px-2 gap-5`};
`;
const Col = styled.div`
  ${tw`flex-1 w-full mx-auto`};
  .IMG_RESERSH {
    width: 300px;
    @media (max-width: 768px) {
      width: 350px;
    }
  }
`;
const Container = styled.div`
  height: calc(100vh - 100px);
  ${tw`max-w-screen-lg mx-auto w-full py-24`};
  .Arab_Network {
    ${tw`font-bold py-10 text-xl md:text-3xl leading-6  text-center`}
  }
`;
const Title = styled.h3`
  color: #3b3b3b;
  ${tw`text-lg font-bold md:text-3xl`};
`;
const Desc = styled.p`
  color: #81807e;
  ${tw`leading-4 text-sm md:text-lg my-3`}
`;
const SubTitle = styled.p`
  color: #0668af;
  ${tw`leading-4 text-sm md:text-2xl font-bold my-3`}
`;

export { Row, Col, Container, Desc, Title, SubTitle };
