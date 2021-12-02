import styled, { css } from "styled-components";
import tw from "twin.macro";

const Container = styled.div`
  ${tw`px-4 container mx-auto max-w-screen-2xl w-full`};
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
  ${tw`space-x-3 flex items-center`};
`;
const ListItems = styled.div`
  a {
    color: #d4dade;
  }
`;
const SubMenu = styled.div`
  ${tw`hidden`};
`;
const WrapperIcon = styled.div`
  svg {
    ${tw`text-white`};
  }
`;
export { Wrapper, Container, Col, Row, ListItems, List, SubMenu, WrapperIcon };
