import styled from "styled-components";
import tw from "twin.macro";

const BgSocail = styled.div`
  background-color: #F0EEE7;
  padding: 140px 0;
  margin-top: -79px;
  
`
const Wrapper = styled.div``;

const Shape = styled.div`
  ${tw` px-5  py-4  md:px-7 md:py-7 absolute left-0`}
  border-radius: 10px 0 80px 0;
`;

const Container = styled.div`
${tw`px-4 w-full max-w-screen-lg w-full mx-auto`};
`;


const Card=styled.div`
${tw`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6`};
`;

export {BgSocail, Wrapper, Shape,Container,Card}