import React from "react";
import { Row, Col, Container, Desc, Title, SubTitle } from "./Research-stylrd";
const Research = () => {
  return (
    <div className={"relative"}>
      <Container>
        <Row>
          <Col>
            <div className={"IMG_RESERSH"}>
              <img
                className={"object-cover w-full h-full border"}
                src="../../assets/images/bg/polygon.svg"
                alt=""
              />
            </div>
          </Col>
          <Col>
            <Title>Arab Research & Development</Title>
            <SubTitle>Grant program</SubTitle>
            <Desc>
              The Arab Network community grant program funds the creation of new
              smart contract applications and new ideas that advances the
              development of the Arab Network and brings true value across the
              Arab World.
            </Desc>
          </Col>
        </Row>
        <div className={"absolute top-0  right-10 w-60 h-60 hidden md:block"}>
          <img
            className={"w-full h-full object-cover"}
            src="/assets/images/bg/Pathe.png"
            alt=""
          />
        </div>
      </Container>
      <div className={"absolute bottom-0 z-20  w-full"}>
        <img
          className={"w-full h-full"}
          src="/assets/images/vector/section-header-desert-2.svg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Research;
