import styled, { css } from "styled-components";
import tw from "twin.macro";

interface IRowProps {
  isCenter?: boolean;
}

const Row = styled.div<IRowProps>`
  ${(props) =>
    props.isCenter &&
    css`
      ${tw`items-center`}
    `}
  ${tw`flex flex-col md:flex-row gap-10 md:gap-32 justify-between mt-24 md:mt-2`};
`;
const Col = styled.div`
  ${tw`flex-1 w-full `};

  img {
    height: 600px;
    width: 100%;
    object-fit: contain;
    @media (max-width: 768px) {
      width: 100%;
      height: 350px;
      margin-right: auto;
    }
  }
`;
const CardContent = styled.div`
  ${tw`sm:inline-flex items-center gap-5 relative `};
`;
const Wrapper = styled.div`
  ${tw`grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 `};
`;
const Title = styled.div`
  ${tw`text-lg md:text-2xl font-semibold`};
`;
const CardBody = styled.div`
  width: 80%;
  right: 0;
  @media (max-width: 425px) {
    transform: translateX(50px);
  }
  transform: translateX(60px);

  ${tw`relative m-auto  px-4`};

  h4 {
    ${tw`mt-1`};
  }

  p {
    ${tw`pt-1`}
  }

  .absolute_Item {
    ${tw`pt-6 `};
  }
`;
const Card = styled.div`
  width: 100%;
  height: 200px;

  ${tw`bg-white rounded-xl shadow-md my-4`};

  img {
    ${tw`max-w-full w-full h-full`};
  }
`;

const BG = styled.div`
  background-color: #f0eee7;
  padding: 140px 0;
  margin-top: -79px;
`;
const WrapperImg = styled.div`
  border-radius: 10px 0 80px 0;
  ${tw`absolute flex-none  lg:w-28 lg:h-28 w-24 h-28 top-0 flex items-center justify-center m-auto`};
`;
export {
  Row,
  Col,
  CardContent,
  Wrapper,
  Title,
  CardBody,
  Card,
  BG,
  WrapperImg,
};
