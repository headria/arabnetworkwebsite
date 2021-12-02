import styled from "styled-components";
import tw from "twin.macro";

const FooterContainer = styled.div`
  .footer-inner {
    ${tw`flex flex-col justify-center w-full `};
  }
  footer {
    ${tw`p-24`};
  }
`;

const Row = styled.div`
  ${tw`flex items-start  flex-col md:flex-row   flex-wrap md:gap-28 `};
`;
const Col = styled.div`
  ${tw`flex-1`};
`;
const Container = styled.div`
  ${tw`w-full max-w-screen-xl mx-auto`};
`;
const SocialList = styled.div`
  ${tw`mt-3`};
  .WrapperIcon {
    ${tw`flex items-center space-x-2`}
  }

  li {
    background-color: #ffbd48;
    ${tw`flex items-center justify-center w-12 h-12 rounded-full`};

    svg {
      color: #fff;
    }
  }
`;

const FooterInner = styled.div`
  ${tw`flex justify-center items-center w-full text-center leading-6`};
  .desc {
    color: #5c5c5c;
  }
`;
const Copyright = styled.div`
  background-color: #022640;
  color: rgb(184 194 201);
  ${tw`text-center mt-5 py-3 w-full  text-xs md:text-sm `};
`;
export {
  FooterContainer,
  Row,
  Col,
  SocialList,
  Container,
  Copyright,
  FooterInner,
};
