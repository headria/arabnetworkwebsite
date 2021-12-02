import React from "react";
import {
  BgRoad,
  TopSection,
  Title,
  SubTitle,
  Wrapper,
  Middle,
  Card,
  Row,
  Col,
  Number,
} from "@containers/roadmap/RoadMap-Styled";

const RoadMap = () => {
  return (
    <>
      <Wrapper>
        <BgRoad>
          <TopSection>
            <Title>Arab Network Road Map</Title>
            <SubTitle>
              The World's first cryptocurrency & Blockchain Education platform
              that will revolutionize the
              <br />
              Arab world.
            </SubTitle>
          </TopSection>
          <Middle>
            <div className={"max-w-screen-lg mx-auto"}>
              <Col isRight={true}>
                <Card>
                  <h4>Q1.2022</h4>
                  <p>List Arab on major exchanges.</p>
                </Card>
              </Col>
              <Col>
                <Card isArrowRight={true}>
                  <h4>Q3.P1 2021</h4>
                  <p>
                    Testing & Security Audits Whitepaper v1 released Arab
                    Network official website release Arab wallet App Android &
                    IOS version release Mainnet Public Launch (Crowd sale stage)
                  </p>
                </Card>
              </Col>
              <Col isRight={true}>
                <Card>
                  <h4>Q3.P2 2021</h4>
                  <p>
                    Deploy Dapp platform for developers, Full Smart contract Dev
                    tutorials Applications Examples Demo Documentation Testnet
                    Faucet
                  </p>
                </Card>
              </Col>
              <Col>
                <Card isArrowRight={true}>
                  <h4>Q3.P1 2021</h4>
                  <p>
                    Testing & Security Audits Whitepaper v1 released Arab
                    Network official website release Arab wallet App Android &
                    IOS version release Mainnet Public Launch (Crowd sale stage)
                  </p>
                </Card>
              </Col>
              <Col isRight={true}>
                <Card>
                  <h4>Q3.P2 2021</h4>
                  <p>
                    Deploy Dapp platform for developers, Full Smart contract Dev
                    tutorials Applications Examples Demo Documentation Testnet
                    Faucet
                  </p>
                </Card>
              </Col>
              <Col>
                <Card isArrowRight={true}>
                  <h4>Q3.P1 2021</h4>
                  <p>
                    Testing & Security Audits Whitepaper v1 released Arab
                    Network official website release Arab wallet App Android &
                    IOS version release Mainnet Public Launch (Crowd sale stage)
                  </p>
                </Card>
              </Col>
            </div>
            <Number>
              <span className="line" />
              <div className={"Number_Circle"}>
                <span className={"text-xl"}>1</span>
              </div>
              <div className={"Number_Circle"}>
                <span className={"text-xl"}>2</span>
              </div>
              <div className={"Number_Circle"}>
                <span className={"text-xl"}>3</span>
              </div>
              <div className={"Number_Circle"}>
                <span className={"text-xl"}>4</span>
              </div>
              <div className={"Number_Circle"}>
                <span className={"text-xl"}>5</span>
              </div>
              <div className={"Number_Circle"}>
                <span className={"text-xl"}>6</span>
              </div>
            </Number>
          </Middle>
        </BgRoad>
        <div>
          <img src="/assets/images/vector/section-desert-bottom.svg" alt="" />
        </div>
      </Wrapper>
    </>
  );
};

export default RoadMap;
