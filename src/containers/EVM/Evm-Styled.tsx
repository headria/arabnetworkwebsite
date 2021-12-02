import styled from "styled-components";
import tw from "twin.macro";

const Container = styled.div`
  ${tw`mx-auto max-w-screen-xl w-full px-4`};
`;
const Row = styled.div`
  ${tw`flex flex-col md:flex-row md:items-center items-start justify-between md:gap-10`};
`;
const Col = styled.div`
  ${tw`flex-1 w-full`};

  .img_control {
    max-width: 300px;
    @media (min-width: 768px) {
      max-width: 350px;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

`;
const Title = styled.h3`
  ${tw`font-semibold md:text-3xl text-xl`};
`;
const SubTitle = styled.h4`
  ${tw`text-Blue font-bold py-2`};
`;
const Desc = styled.p`
${tw`leading-relaxed sm:mt-10`};
`

const BgEvn = styled.div`
  background-color: #F0EEE7;
  padding: 140px 0;
  margin-top: -79px;
`;

export {Container, BgEvn, Col, Row, Desc, Title, SubTitle};