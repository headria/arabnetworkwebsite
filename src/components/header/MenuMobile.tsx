import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { AiOutlineClose } from "react-icons/ai";

interface IMenuProps {
  show?: boolean;
  setShow(val: boolean): void;
}
const MenuMobile = ({ show, setShow }: IMenuProps) => {
  return (
    <>
      <BurGerNav show={show}>
        <CloseWrapper>
          <CloseBTn
            color={"#fff"}
            size={22}
            onClick={() => {
              setShow(!open);
            }}
          />
        </CloseWrapper>
        <ul>
          <li>Home</li>
          <li>Tools</li>
          <li>Developers</li>
          <li>Arab Academy</li>
          <li>Community</li>
          <li>WhitPaper</li>
        </ul>
      </BurGerNav>
      <OverLay show={show} onClick={() => setShow && setShow(!open)} />
    </>
  );
};

export default MenuMobile;
interface IProps {
  show?: boolean;
}
const BurGerNav = styled.div<IProps>`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  background: #022640;
  width: 300px;
  z-index: 60;
  padding: 20px;
  transform: ${({ show }) => (show ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.5s ease-in-out;

  ul {
    display: flex;
    justify-content: flex-start;
    flex-direction: column;

    li {
      padding: 15px 0;
      list-style: none;
      border-bottom: 1px solid rgba(255, 255, 255, 0.2);
      &:last-of-type {
        border: none;
      }
      color: #fff;
      a {
        font-weight: 600;
        color: #fff;
      }
    }
  }
`;

const CloseBTn = styled(AiOutlineClose)`
  cursor: pointer;
`;

const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const OverLay = styled.div<IProps>`
  position: fixed;
  top: 0;
  background-color: rgba(0, 0, 0, 0.25);
  display: ${({ show }) => (show ? "bloc" : "none")};
  transition: display 0.9s ease-in-out;
  left: 0;
  z-index: 50;
  width: 100%;
  height: 100%;
`;
