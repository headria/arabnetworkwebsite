import styled from "styled-components";
import tw from "twin.macro";

const SubScribe = styled.div`
  ${tw`w-full`};
  .form-control {
    ${tw`relative w-full max-w-sm`};
    input {
      ${tw`w-full px-4 py-3  rounded-3xl outline-none`}
    }

    button {
      margin-top: 4px;
      ${tw`rounded-3xl px-4 py-2 absolute top-0  right-1 bg-Blue text-white `}
    }
  }
`;

export { SubScribe };
