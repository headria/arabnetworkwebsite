import {useState} from "react";
import Siderbar from './Siderbar';
import Main from './Main';
import {Bg, Container, Layout} from "./Tutoriral-styled"

const TutorialContainer = () => {
    const [tabs, setTabs] = useState(0);
    const [showSidebar, setShowSidebar] = useState(false);
    return (
        <Bg>
            <Container>
                <Layout>
                    <Siderbar className={`${showSidebar ? "fixed w-44  top-20 -ml-4 lef-0 z-50 h-full" : "hidden"}  md:block`} setTabs={setTabs}
                              tabs={tabs}/>
                    <Main showSidebar={showSidebar} setShowSidebar={setShowSidebar}/>
                </Layout>
            </Container>
        </Bg>
    );
};

export default TutorialContainer;
