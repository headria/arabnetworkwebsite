import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import {
  Wrapper,
  BackGround,
  Row,
  Col,
  Container,
  Desc,
  Title,
  Control,
} from "./Network-stylrd";
const ArabNetWork = () => {
  return (
    <>
      <div>
        <img
          className={"w-full h-full"}
          src="/assets/images/vector/header-desert.svg"
          alt=""
        />
      </div>
      <Wrapper>
        <BackGround>
          <Container>
            <Row>
              <h3 className={"Arab_Network"}>
                A world where value is created and exchanged by everyone in an
                efficient, open, and secure manner.
              </h3>
            </Row>
            <Row>
              <Col>
                <div className={"Start_Img"}>
                  <img
                    className={"object-cover w-full h-full"}
                    src="../../assets/images/bg/polygon.svg"
                    alt=""
                  />
                </div>
              </Col>
              <Col>
                <Title>What is Arab Network?</Title>
                <Desc>
                  Arab Network is a community that doesn't have a central
                  command. There is no single owner. Instead, a group of people
                  shares their knowledge in blockchain technology, business, and
                  education, working together to empower the Arab community in
                  blockchain for a better future.
                </Desc>
                <div className={"flex space-x-5 mt-5"}></div>
              </Col>
            </Row>
          </Container>
        </BackGround>
        <div className={"relative md:-top-24 -top-9"}>
          <img
            className={"w-full h-full"}
            src="/assets/images/vector/section-header-desert-1.svg"
            alt=""
          />
        </div>
      </Wrapper>
    </>
  );
};

export default ArabNetWork;
