import {
  BgWallet,
  Row,
  Col,
  Title,
  SubTitle,
  Desc,
  Container,
} from "./Wallet-styled";
import React from "react";

const Wallet = () => {
  return (
    <>
      <BgWallet>
        <Container>
          <Row>
            <Col>
              <div>
                <Title>Arab Wallet</Title>
                <SubTitle>
                  Buy, Store, Exchange Cryptocurrency And Interact Dapps
                </SubTitle>
                <Desc>
                  The Arab Network community grant program funds the creation of
                  new smart contract applications and new ideas that advances
                  the development of the Arab Network and brings true value
                  across the Arab World.
                </Desc>
                <div className={"flex gap-5"}>
                  <div className={"w-44 h-44"}>
                    <img
                      className={"w-full h-full object-contain"}
                      src="/assets/images/bg/google-play-badge.png"
                      alt=""
                    />
                  </div>
                  <div className={"w-44 h-44"}>
                    <img
                      className={"w-full h-full object-contain"}
                      src="/assets/images/bg/apple-logo.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </Col>
            <Col>
              <div className={"wallet_App"}>
                <img
                  className={"max-w-full w-full h-full max-w-full"}
                  src="/assets/images/bg/app.png"
                  alt=""
                />
              </div>
            </Col>
          </Row>
        </Container>
      </BgWallet>
    </>
  );
};

export default Wallet;
