import styled, {css} from "styled-components";
import tw from "twin.macro";


const Container = styled.div`${tw`max-w-screen-2xl mx-auto w-full px-4`};`;

const Layout = styled.div`
  ${tw`md:grid md:grid-cols-12 md:gap-7 w-full`};
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
  ${tw`space-y-5 flex flex-col px-4 divide-y`}
`;


const ListItem = styled.li`
  ${tw`inline-flex gap-1 items-center`};

  span {
    padding-left: 18px;
  }

  .Img_Control {
    width: 100px;
    height: 100px;

    img {
      width: 100%;
      height: 100%;
      border-radius: 15px;
      object-fit: contain;
    }
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
    @media (min-width: 768px) {
      height: 500px;
    }
    height: 200px;

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
  ${tw`border-t py-4`}
`
const Wrapper = styled.div`
  ${tw`space-y-4 w-full`};
`;

const SocialCard = styled.ul`
  list-style-type: none;
  ${tw`flex justify-end items-center space-x-2`};

  li {
    ${tw`bg-blue-100 px-2 py-2 rounded-md cursor-pointer flex-shrink-0`};

    &:first-of-type {
      background: transparent;
    }

    svg {
      color: #0668AF;
    }
  }

`;

const ReviewHeader = styled.div`
  ${tw`flex items-start sm:items-center justify-between flex-col sm:flex-row`};
`
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
    SocialCard,
    ReviewHeader
}