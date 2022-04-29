import React from "react";
import { Wrapper, Col, Row, Desc, Container, Title } from "./Choose-styled";
import { Cards } from "@components";
const ChooseUs = () => {
  return (
    <Wrapper>
      <Container>
        <div className={"title"}>
          <Title>We are building a revolutionary ecosystem.</Title>
        </div>
        <Cards />
      </Container>
    </Wrapper>
  );
};

export default ChooseUs;
