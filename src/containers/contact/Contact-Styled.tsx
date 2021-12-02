import styled from "styled-components";
import tw from "twin.macro";


const Container = styled.div`
  ${tw`max-w-screen-lg w-full mx-auto px-4`};
`;
const Form = styled.div``;
const FormContainer = styled.div`
  ${tw`bg-white rounded-lg shadow-md p-10`};
`;
const FormControl = styled.div`
  ${tw`flex-1 w-full my-2 sm:my-5`};

  input, textarea {
    ${tw`w-full rounded-xl text-sm`}
    background-color: #F4F1FA;
    outline: none;
  }

  label {
    ${tw`mb-4 block`};
  }

  input {
    ${tw`px-4 py-3`};

  }

  textarea {
    ${tw`resize-none p-4`};
  }
`;
const BgContact = styled.div`
  background-color: #F0EEE7;
  padding: 140px 0;
  margin-top: -79px;
`;
const FormRow = styled.div`
  ${tw`flex flex-col md:flex-row sm:gap-10 md:items-center justify-center`};
`;

export {Container, Form, FormContainer, FormControl, BgContact, FormRow}