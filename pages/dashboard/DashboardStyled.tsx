import styled, { css } from "styled-components";
import tw from "twin.macro";

const DashboardContainer = styled.div`
  ${tw`bg-darkBody w-full`};

  &::-webkit-scrollbar {
    width: 1rem;
    height: 2rem;
  }

  &::-webkit-scrollbar-button {
    background: #2e2d2d;
  }

  &::-webkit-scrollbar-corner {
    border-right: 2px;
  }

  &::-webkit-scrollbar-track {
    background: #2e2d2d;
  }

  &::-webkit-scrollbar-track-piece {
    background: #949393;
  }
`;

interface isMobileRightSide {
  isActive: boolean;
}
const RightSide = styled.div<isMobileRightSide>`
  ${tw`col-span-3 text-white border-l border-gray-500 pt-2 border-opacity-30 mt-5 transition-all ease-in-out duration-300 `}

  ${({ isActive }) =>
    isActive
      ? css`
          ${tw`block fixed -top-6 right-0 bg-darkBody z-50 pt-4`}
          width: 450px;
        `
      : css`
          ${tw`hidden lg:block overflow-hidden lg:overflow-y-auto overflow-x-hidden`}
        `};

  height: 60rem;
`;

interface isFullSide {
  isFull: boolean;
}
const MiddleSide = styled.div<isFullSide>`
  ${tw`text-white`}
  ${({ isFull }) => (isFull ? tw`col-span-9` : tw`col-span-9 `)}
  
  height: 60rem;
  overflow-y: auto;
  overflow-x: hidden;
  margin-top: 20px;
`;

const NavSide = styled.div`
  ${tw`col-span-2 text-white`}
`;

interface NavActive {
  isActive: boolean;
}

const NavItem = styled.li<NavActive>`
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
  outline: none;
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
