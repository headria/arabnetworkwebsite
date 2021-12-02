import styled from "styled-components";
import tw from "twin.macro";

const BgWallet = styled.div`
  ${tw` w-full py-24`};
  background-color: #f0eee7;
  height: calc(100vh -100);
  margin-top: -82px;
`;
const Row = styled.div`
  ${tw`flex flex-col md:flex-row md:items-center md:gap-10 px-4`};
`;
const Col = styled.div`
  ${tw`flex-1 w-full max-w-full`};
  .wallet_App {
    @media (max-width: 769px) {
      width: 300px;
    }
    width: 350px;
    margin: 0 auto;
  }
`;
const Title = styled.div`
  ${tw`text-Darkblue font-bold my-5 text-xl md:text-2xl`};
`;
const SubTitle = styled.div`
  ${tw`text-Blue my-3 font-semibold text-lg md:text-2xl`};
`;
const Desc = styled.div`
  color: #5c5c5c;
  ${tw`flex-1 w-full leading-normal`};
`;

const Container = styled.div`
  ${tw`max-w-screen-2xl mx-auto w-full`};
`;
export { BgWallet, Row, Col, Title, SubTitle, Desc, Container };
