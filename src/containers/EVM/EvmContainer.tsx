import React from 'react';
import {Container, BgEvn, Col, Row, Desc, Title, SubTitle} from "./Evm-Styled"

const EvmContainer = () => {
    return (
        <BgEvn>
            <Container>
                <Row>
                    <Col>
                        <div className={"img_control"}>
                            <img src="/assets/images/bg/polygon.svg" alt="Research Images"/>
                        </div>
                    </Col>
                    <Col>
                        <Title>Arab Research & Development</Title>
                        <SubTitle>Grant Programs</SubTitle>
                        <Desc>
                            the Arab Network community grant program funds the creation of new smart contact application
                            abd bew ideas the advances the devlopment of the arab network and brings true value across
                            the Arab Wrold.
                        </Desc>
                    </Col>
                </Row>
            </Container>
        </BgEvn>
    );
};

export default EvmContainer;
