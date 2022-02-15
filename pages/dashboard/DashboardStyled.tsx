import styled from "styled-components";
import tw from "twin.macro";

const RightSide = styled.div`
  ${tw`col-span-3 text-white `}
  border-left: 1px solid #c0c0c0;
  height: calc(100vh - 2.5rem);
  margin-top: 20px;
`;

const MiddleSide = styled.div`
  ${tw`col-span-7 text-white `}
  margin-top: 20px;
`;

const NavSide = styled.div`
  ${tw`col-span-2 text-white`}
`;

export { RightSide, MiddleSide, NavSide };
