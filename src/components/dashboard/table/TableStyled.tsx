import styled, { css } from "styled-components";
import tw from "twin.macro";

const Tr = styled.tr`
  ${tw`
  transition-all
  duration-300
  ease-in-out
  hover:shadow-xl


   `};
`;
const Td = styled.td`
  ${tw` px-6 py-4 whitespace-nowrap rtl:text-right ltr:text-left dark:text-white`};
`;
const Table = styled.table`
  ${tw`
  min-w-full
  
`}
`;
const Th = styled.th`
  ${tw` dark:text-white px-6 py-3 rtl:text-right ltr:text-left text-xs font-medium text-gray-500 uppercase tracking-wider  `};
`;
const Thead = styled.thead`
  ${tw`bg-gray-50   dark:bg-black
 `};
`;
const Tbody = styled.tbody`
  ${tw`
   bg-white
   dark:bg-black
`};
`;

const Button = styled.button`
  background-color: ${(props) => props.color};
  color: #fff;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.4);
  padding: 5px;
  ${tw`
     w-16
  `};
`;
const SameStyle = css`
  ${tw`
    w-20
    h-10
    rounded-sm
    flex
    justify-center
    items-center
   font-black

  `}
`;
const Success = styled.div`
  background-color: #def3ef;
  color: #40d632;

  ${SameStyle}
`;
const Danger = styled.div`
  color: #fc8585;
  background-color: #ffedee;
  ${SameStyle}
`;

const View = styled.div`
  color: #3fa9f5;
  ${tw`
    mt-10
    mb-10
    w-full
    text-center
    text-lg
    md:text-xl
  `};
`;
const Active = styled.div`
  ${tw`hover:bg-darBox opacity-80 cursor-pointer transition-all ease-in duration-300 rounded-lg w-24 h-20 flex flex-col justify-center items-center`}
`;

export {
  Tr,
  Th,
  Danger,
  Td,
  Success,
  Thead,
  Table,
  Tbody,
  Button,
  View,
  Active,
};
