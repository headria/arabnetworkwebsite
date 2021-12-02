import React from "react";
import { Wrapper, Col, Row, Desc, Container, Title } from "./Choose-styled";
import { Cards } from "@components";
const ChooseUs = () => {
  return (
    <Wrapper>
      <Container>
        <div className={"title"}>
          <Title>Why Choose us</Title>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </div>
        <Cards />
      </Container>
    </Wrapper>
  );
};

export default ChooseUs;
