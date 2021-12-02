import styled from "styled-components";
import tw from "twin.macro";


const BgCommunity = styled.div`
  background-color: #F0EEE7;
  padding: 140px 0;
  margin-top: -79px;
`

const Wrapper = styled.div`
  ${tw`grid gap-10 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3`};
`;


const Card = styled.div`
  ${tw`relative mt-8 md:mt-3 xl:mt-0`};
`;
const CardContent = styled.div`
  height: 100%;
  min-height: 420px;
  ${tw`bg-white rounded-xl col-span-1 relative overflow-hidden px-4 py-7  z-10 relative`};

  .Cover_img {
    width:180px;
    height:180px;
    ${tw`absolute top-0 -left-5 `}
  }

`;
const CardHeader = styled.div`
  ${tw`flex justify-center  items-center`};
`;
const CardBody = styled.div`
  ${tw`flex items-center justify-center flex-col space-y-7   mt-20`};

  .Control {
    a {
      ${tw`block mx-auto mb-5 text-Blue text-center font-bold underline`}
    }

    p {
      color: #5C5C5C;
    }
  }
`;


const Container = styled.div`
  ${tw`w-full max-w-screen-2xl mx-auto px-4`};
`;

const Circle = styled.div`
  ${tw`rounded-full w-24 h-24 shadow-md absolute z-20 top-0 -mt-11 bg-white flex justify-center  items-center`};

  img {
    ${tw`w-12 h-12`};
  }
`;


const Title = styled.div`
  ${tw`font-semibold text-xl md:text-2xl`};

`;


export {BgCommunity, Card, CardHeader, Wrapper, CardBody, Container, Circle, Title, CardContent};