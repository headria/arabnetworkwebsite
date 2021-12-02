import React from 'react';
import {
    BgCommunity,
    Card,
    CardHeader,
    Wrapper,
    CardBody,
    Container,
    Circle,
    Title,
    CardContent
} from "./Community-styled";
const CommunityContainer = () => {
    return (
        <BgCommunity>
            <Container>
                <Wrapper>
                    <Card>
                        <CardHeader>
                            <Circle>
                                <img src="/assets/images/icons/man.png" alt=""/>
                            </Circle>
                        </CardHeader>
                        <CardContent>
                            <CardBody>
                                <Title>
                                    For Enterpreneur
                                </Title>
                                <div className={"Control"}>
                                    <a href="">Funding Support </a>
                                    <p>Apply For Funding Support Fpr Early Stage Projects
                                    </p>
                                </div>
                                <div className={"Control"}>
                                    <a href="">Talent Pool </a>
                                    <p>Connect With the Talents who Share the Same Vision
                                    </p>
                                </div>
                                <div className={"Control"}>
                                    <a href="">Advisory</a>
                                    <p>Get Advice On The Project To Have A Jump Start And Avoid Pitfalls
                                    </p>
                                </div>
                            </CardBody>
                            <div className={"Cover_img"}>
                                <img src="/assets/images/bg/Intersection 26.png" alt=""/>
                            </div>
                        </CardContent>

                    </Card>
                    <Card>
                        <CardHeader>
                            <Circle>
                                <img src="/assets/images/icons/coding.png" alt=""/>
                            </Circle>
                        </CardHeader>
                        <CardContent>
                            <CardBody>
                                <Title>
                                    For Developer
                                </Title>
                                <div className={"Control"}>
                                    <a href="">Technical Support </a>
                                    <p>Learn About The Development On Vechainthor Blockchain</p>
                                </div>
                                <div className={"Control"}>
                                    <a href="">Bounty </a>
                                    <p>
                                        Leverage Bounty Programs To Contribute And Get Rewards
                                    </p>
                                </div>
                                <div className={"Control"}>
                                    <a href="">Developer Channel</a>
                                    <p>Interact With Other Developers in The vechain Ecosystem</p>
                                </div>
                            </CardBody>
                            <div className={"Cover_img"}>
                                <img src="/assets/images/bg/Intersection 28@2x.png" alt=""/>
                            </div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <Circle>
                                <img src="/assets/images/icons/user-glass.png" alt=""/>
                            </Circle>
                        </CardHeader>
                        <CardContent>
                            <CardBody>
                                <Title>
                                    For Contributor
                                </Title>
                                <div className={"Control"}>
                                    <a href="">Offer Your Help</a>
                                    <p>Let Us Know You And Contribute to the Ecosysten Whit Your
                                    </p>
                                </div>
                                <div className={"Control"}>
                                    <a href="">Explor Vachain Application
                                    </a>
                                    <p>Explore And Share Interesting Application Bulit On Vechain
                                    </p>
                                </div>
                                <div className={"Control"}>
                                    <a href="">Stay Up To Date About Vechain
                                    </a>
                                    <p>Get The First Hand Infornation About Vechain And Join Our Events
                                    </p>
                                </div>
                            </CardBody>
                            <div className={"Cover_img"}>
                                <img src="/assets/images/bg/Intersection 30.png" alt=""/>
                            </div>
                        </CardContent>
                    </Card>
                </Wrapper>
            </Container>
        </BgCommunity>
    );
};

export default CommunityContainer;
