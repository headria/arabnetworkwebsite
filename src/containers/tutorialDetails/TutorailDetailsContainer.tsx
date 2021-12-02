import {useState} from "react";
import Siderbar from './Siderbar';
import Main from './Main';
import {Bg, Container, Layout} from "./Tutoriral-styled"

const TutorailDetailsContainer = () => {
    return (
        <Bg>
            <Container>
                <Layout>
                    <Siderbar />
                    <Main/>
                </Layout>
            </Container>
        </Bg>
    );
};

export default TutorailDetailsContainer;
