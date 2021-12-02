import React from "react";
import { Col, Row, SubTitle, Title } from "@components/slider/Slider-styled";
import { Subscribe, Slider } from "@components";
const SliderContainer = () => {
  return (
    <Slider>
      <div className={"absolute top-0 right-0  hidden md:block"}>
        <div style={{ maxWidth: "17.7rem" }}>
          <img
            className={"w-full h-full  hidden md:block "}
            src="/assets/images/vector/header-sun.svg"
            alt=""
          />
        </div>
      </div>
      <div className="middle_Content">
        <div className="flex items-center justify-center w-full">
          <Row>
            <Col>
              <div className={"left_Side mt-5 "}>
                <Title>Arab Network</Title>
                <SubTitle>
                  The Feature Of Blockchain
                  <br />
                  Technology in the Arab World.
                </SubTitle>
                <Subscribe
                  className={"mt-3"}
                  titleClass={"text-white"}
                  title={"Subscribe to our newsletter"}
                />
              </div>
            </Col>
            <Col className={"z-10"}>
              <div className={"Stars_img"}>
                <img
                  className={"w-full h-full object-cover"}
                  src="../../assets/images/bg/star.png"
                  alt={""}
                />
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </Slider>
  );
};

export default SliderContainer;
