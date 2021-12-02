import Card from './Card';
import {Title, Wrapper} from "./Tutoriral-styled"
import {HiOutlineArrowNarrowRight, HiOutlineArrowNarrowLeft} from "react-icons/hi";

interface IMainProps {
    setShowSidebar: (val: boolean) => void;
    showSidebar: boolean;

}

const Main = ({setShowSidebar, showSidebar}: IMainProps) => {
    return (
        <div className={"col-span-9"}>
            <div className={"flex justify-between"}>
                <div>
                    <Title>Arab Con Tutorial</Title>
                    <p className={"mb-7"}>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                </div>
                <button onClick={() => setShowSidebar(!showSidebar)}>
                    {showSidebar ? <HiOutlineArrowNarrowLeft size={24}/> : <HiOutlineArrowNarrowRight size={24}/>}

                </button>
            </div>
            <Wrapper>
                {[1, 2, 3, 4, 5, 6].map((item) => (
                    <Card/>
                ))}
            </Wrapper>
        </div>
    );
};

export default Main;
