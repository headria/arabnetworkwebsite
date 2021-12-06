import React from "react";
import { Row, Col, Container, Desc, Title, SubTitle } from "./Research-stylrd";
const Research = () => {
  return (
    <div className={"relative"}>
      <Container>
        <Row>
          <Col>
            <div className={"IMG_RESERSH"} style={{ width: 340 }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                height="100%"
                viewBox="0 0 558 541"
              >
                <defs>
                  <clipPath id="b">
                    <rect width="558" height="541"></rect>
                  </clipPath>
                </defs>
                <g id="a" clipPath="url(#b)">
                  <path
                    d="M473.954,572.1,245.024,404.555a50,50,0,0,1-18.057-55.7L314.558,77.316a50,50,0,0,1,47.586-34.651H644.821a50,50,0,0,1,47.586,34.651L780,348.857a50,50,0,0,1-18.057,55.7L533.012,572.1a50,50,0,0,1-59.058,0Z"
                    transform="translate(-224.415 -42.665)"
                    fill="silver"
                  ></path>
                </g>
              </svg>
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
