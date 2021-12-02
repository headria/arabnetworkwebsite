import styled from "styled-components";

import tw from "twin.macro";

const Wrapper = styled.section`
  ${tw`mt-2`}
`;

const Row = styled.div`
  ${tw`flex md:flex-row flex-col items-start md:items-center`};
`;
const Col = styled.div`
  ${tw`flex-1`};
`;
const Container = styled.div`
  ${tw`max-w-screen-xl mx-auto w-full px-4`};
  .title {
    ${tw`flex justify-center items-center flex-col space-y-3 `};
  }
`;
const Title = styled.h3`
  ${tw`font-extrabold text-2xl`};
`;
const Desc = styled.p`
  color: #81807e;
  ${tw`leading-4 text-sm md:text-lg my-3`}
`;

export { Wrapper, Row, Col, Container, Desc, Title };
