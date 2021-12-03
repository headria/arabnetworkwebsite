import styled, { css } from "styled-components";
import tw from "twin.macro";

const Container = styled.div`
  ${tw`px-4  mx-auto max-w-screen-xl w-full`};
`;
const Wrapper = styled.div`
  position: relative;
  header {
    z-index: 100;
    ${tw`fixed w-full top-0 `}
  }
`;
const Row = styled.div`
  ${tw`flex items-center justify-between`};
`;

interface IColProps {
  fullWidth?: boolean;
}

const Col = styled.div`
  ${tw``}
`;

const List = styled.div`
  ${tw`space-x-3 flex items-center whitespace-nowrap`};
`;
const ListItems = styled.div`
  a {
    color: #d4dade;
  }
`;

const SubMenu = styled.div`
  background-color: #ccd4d9;
  -webkit-box-shadow: 0 5px 15px rgb(173 181 189 / 50%);
  box-shadow: 0 5px 15px rgb(173 181 189 / 50%);
  min-width: 150px;
  transform: translateY(6px);
  left: 0;
  ${tw`hidden rounded-md top-4 py-4 px-2 absolute z-50`};

  ul a {
    color: #3b3b3b;
    ${tw`hover:text-Blue`};
  }
`;
const WrapperIcon = styled.div`
  svg {
    ${tw`text-white`};
  }
`;
export { Wrapper, Container, Col, Row, ListItems, List, SubMenu, WrapperIcon };
