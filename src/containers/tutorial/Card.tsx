import {CardContent, CardHeader, CardBody, CardFooter} from './Tutoriral-styled';
import {AiOutlineHeart} from "react-icons/ai";
import {BiMessageRoundedDetail} from "react-icons/bi";
import {Stars} from "@components" ;

const Card = () => {
    return (
        <div className={"bg-white rounded-2xl col-span-1"}>
            <CardContent>
                <CardHeader>
                    <div className={"Card_Img"}>
                        <img className={"rounded-t-2xl"} src="/assets/images/bg/crypto.jpeg" alt=""/>
                    </div>
                </CardHeader>
                <CardBody>
                    <h3>Crypto Currency</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, eveniet, ipsam?</p>
                </CardBody>
                <CardFooter>
                    <div className={"gap-5 inline-flex"}>
                        <div className={"inline-flex items-center gap-1"}>
                            <BiMessageRoundedDetail/>
                            <span className={"text-gray-400 text-xs"}>23</span>
                        </div>
                        <div className={"inline-flex items-center gap-1"}>
                            <AiOutlineHeart/>
                            <span className={"text-gray-400 text-xs"}>13</span>
                        </div>
                    </div>
                    <Stars/>
                </CardFooter>
            </CardContent>

        </div>
    );
};

export default Card;
