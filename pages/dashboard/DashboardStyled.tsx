import styled, { css } from "styled-components";
import tw from "twin.macro";

const DashboardContainer = styled.div`
  ${tw`bg-darkBody w-full`};
`;

const RightSide = styled.div`
  ${tw`col-span-3 text-white border-l border-gray-500 pt-2 border-opacity-30 mt-5`}
  height: calc(100vh - 2.5rem);
`;

const MiddleSide = styled.div`
  ${tw`col-span-9 text-white `}
  margin-top: 20px;
`;

const NavSide = styled.div`
  ${tw`col-span-2 text-white`}
`;

interface NavActive {
  isActive: boolean;
}
const NavItem = styled.div<NavActive>`
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    width: 2rem;
    height: 2rem;
    border: 1.5px solid #fff;
    border-radius: 5px;
  }
  &:hover svg {
    color: #fff;
  }

  ${({ isActive }) => isActive && css``}
  ${({ isActive }) =>
    isActive &&
    css`
      width: 2rem;
      height: 2rem;
      border: 1.5px solid #fff;
      border-radius: 5px;
    `}
  outline:none;
  width: 2rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    ${({ isActive }) =>
      isActive
        ? css`
            color: #fff;
          `
        : css`
            color: #0668af;
          `}
  }
`;

export { RightSide, MiddleSide, NavSide, NavItem, DashboardContainer };
