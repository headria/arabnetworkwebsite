import Card from './Card';
import {Title, Wrapper} from "./Tutoriral-styled"
import {HiOutlineArrowNarrowRight, HiOutlineArrowNarrowLeft} from "react-icons/hi";
import Reviews from "@containers/tutorialDetails/Reviews";


const Main = () => {
    return (
        <div className={"col-span-9"}>
            <Wrapper>
                <Card/>
                <Reviews/>
            </Wrapper>
        </div>
    );
};

export default Main;
