import styled, {css} from "styled-components";
import tw from "twin.macro";


const Container = styled.div`${tw`max-w-screen-2xl mx-auto w-full px-4`};`;

const Layout = styled.div`
  ${tw`grid md:grid-cols-12 md:gap-7 `};
`;

const Bg = styled.div`
  background-color: #F0EEE7;
  height: 100%;
  width: 100%;
  padding: 140px 0;
  margin-bottom: 40px;
  position: relative;
`;

const Title = styled.div`
  ${tw`text-lg md:text-2xl font-semibold`}
`;
const Filters = styled.div`
  ${tw`bg-white  rounded-xl shadow-md py-5`}
  h4 {
    padding-left: 18px;

    ${tw`text-lg font-semibold `};
  }

  h5 {
    padding-left: 18px;

    color: #BBBBBB;
    ${tw`text-sm  font-medium my-4`};
  }
`;

const List = styled.ul`

  ${tw`space-y-5`}

`;

interface IListPorps {
    isActive: boolean;
}

const ListItem = styled.li<IListPorps>`
  ${tw`py-2 relative cursor-pointer transition-all duration-500 ease-in-out`};

  ${props => props.isActive && css` ${tw`bg-blue-100 `} `}
  &:before {
    content: "";
    width: 4px;
    height: 35px;
    ${props => props.isActive && css` ${tw`bg-blue-500 absolute top-0  transition-all duration-700 ease-in-out left-0`} `}
  }

  span {
    padding-left: 18px;
  }
`;
const CheckControl = styled.div`
  padding-left: 18px;

  ${tw`my-3`}
  label {
    ${tw`inline-flex gap-1 items-center`}

  }
`;

const CardContent = styled.div``
const CardHeader = styled.div`
  .Card_Img {
    width: 100%;
    height: 180px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

`
const CardBody = styled.div`
  ${tw`px-4 py-3`};

  h3 {
    ${tw`py-1 text-xl font-semibold`};
  }
  
  p {
    ${tw`text-sm font-light leading-relaxed`};
  }
`
const CardFooter = styled.div`
  ${tw`border-t flex items-center justify-between w-full px-4 py-3`}
`
const Wrapper = styled.div`
  ${tw`grid grid-cols-1 gap-10 sm:grid-cols-2 xl:grid-cols-3`};
`;

export {
    Wrapper,
    Container,
    Layout,
    Bg,
    Title,
    Filters,
    List,
    ListItem,
    CheckControl,
    CardContent,
    CardHeader,
    CardBody,
    CardFooter,
}