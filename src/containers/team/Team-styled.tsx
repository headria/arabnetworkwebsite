import styled from "styled-components";
import tw from "twin.macro";

const Wrapper = styled.div`
  ${tw`grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 `};
`;

const BgTeam = styled.div`
  background-color: #f0eee7;
  padding: 140px 0;
  margin-top: -79px;
`;

const Card = styled.div`
  height: 100%;
  min-height: 480px;
  ${tw`bg-white rounded-xl col-span-1 z-0`};
`;
const CardHeader = styled.div`
  position: relative;
  .Image_Container {
    width: 100%;
    height: 300px;
    position: relative;
    img {
      border-bottom-right-radius: 280px;
      border-bottom-left-radius: 20px;
      ${tw`rounded-t-xl`};
    }
  }

  .Sub_image {
    height: 220px;
    width: 100%;
    position: absolute;
    top: 35px;
    left: 15px;
    img {
      left: -21px;
      top: 168px;
    }
  }
`;
const CardBody = styled.div`
  ${tw`mt-10 px-6 `};

  ul {
    ${tw`space-y-4`};
  }
`;

const Container = styled.div`
  ${tw`w-full max-w-screen-xl mx-auto px-4`}
`;
export { Wrapper, BgTeam, Card, CardHeader, CardBody, Container };
