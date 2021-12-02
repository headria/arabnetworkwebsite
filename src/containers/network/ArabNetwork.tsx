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
            <h3 className={"Arab_Network"}>
              How Arab Network will Lead The BlockChain Technologie
              <br />
              In the Arab World
            </h3>
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
                <Title>Arab BlockChain</Title>
                <Desc>
                  Arab is third-generation blockchain platform dor building fast
                  scalable distributed application with feeless transactions
                  with making is the ideal network for mainstream adoption
                </Desc>
                <div className={"flex space-x-5 mt-5"}>
                  <Control>
                    <FaChevronLeft />
                  </Control>
                  <Control>
                    <FaChevronRight />
                  </Control>
                </div>
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
