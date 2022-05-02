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
                <Title>Arab Gate</Title>
                <SubTitle>All in One Gate</SubTitle>
                <Desc>
                  Arab Gate is a non-custodial wallet that will connect billions
                  of users around the world safely. Arab Gate offers multi-chain
                  (NFT & cryptocurrency), DEX, DApp Browser, Payment solutions,
                  and AI Virtual assistant.
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
                  src="/assets/images/bg/assets-light.png"
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
