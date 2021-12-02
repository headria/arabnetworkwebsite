import {CardContent, CardHeader, CardBody, CardFooter, SocialCard} from './Tutoriral-styled';
import {AiOutlineHeart} from "react-icons/ai";
import {BiMessageRoundedDetail} from "react-icons/bi";
import {Stars} from "@components" ;
import {FaFacebook, FaLinkedin, FaTelegram, FaTwitter, FaYoutube} from "react-icons/fa";

const Card = () => {
    return (
        <div className={"bg-white p-10 rounded-2xl col-span-1"}>
            <CardContent>
                <CardHeader>
                    <div className={"Card_Img"}>
                        <img className={"rounded-2xl"} src="/assets/images/bg/crypto.jpeg" alt=""/>
                    </div>
                </CardHeader>
                <CardBody>
                    <h3>Crypto Currency</h3>
                    <p className={""}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, eveniet, ipsam?</p>
                    <div className={"flex  space-x-3 sm:justify-end my-4"}>
                        <div className={"gap-5 inline-flex "}>
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
                    </div>
                </CardBody>
                <CardFooter>
                    <p className={"leading-loose text-justify"}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur dignissimos inventore
                        magnam nihil quas, sed totam. Ab accusamus atque beatae consequatur culpa deserunt, dignissimos
                        esse est facilis fuga incidunt, ipsam minus odit officia placeat quaerat quas quisquam rem
                        esse est facilis fuga incidunt, ipsam minus odit officia placeat quaerat quas quisquam rem
                        esse est facilis fuga incidunt, ipsam minus odit officia placeat quaerat quas quisquam rem
                        sapiente sed tempore unde veniam voluptate. Architecto, aut dolorum est eum labore neque
                        pariatur quos rerum sint.
                    </p>
                        <SocialCard>
                            <li>
                                <span>Share :</span>
                            </li>
                            <li>
                                <FaLinkedin/>
                            </li>
                            <li>
                                <FaTelegram/>
                            </li>
                            <li>
                                <FaYoutube/>
                            </li>
                            <li>
                                <FaFacebook/>
                            </li>
                            <li>
                                <FaTwitter/>
                            </li>
                        </SocialCard>
                </CardFooter>
            </CardContent>

        </div>
    );
};

export default Card;
