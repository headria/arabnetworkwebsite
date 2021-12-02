import React from 'react';
import {
    CardBody,
    CardContent,
    CardFooter,
    ReviewHeader,
    SocialCard
} from "@containers/tutorialDetails/Tutoriral-styled";
import {BiMessageRoundedDetail, BiPlusCircle} from "react-icons/bi";
import {AiOutlineHeart} from "react-icons/ai";
import {Stars} from "@components";
import {FaFacebook, FaLinkedin, FaTelegram, FaTwitter, FaYoutube} from "react-icons/fa";

const Reviews = () => {
    return (
        <div className={"bg-white p-10 rounded-2xl col-span-1"}>
            <CardContent>
                <ReviewHeader>
                    <div className={"inline-flex gap-5 items-center "}>
                        <h3>Reviews</h3>
                        <div className={"inline-flex items-center gap-1"}>
                            <BiPlusCircle size={15} color={"#0668AF"}/>
                            <span
                                className={"text-blue-400 border-dashed border-b-3 border-blue-400"}>Send Comment</span>
                        </div>
                    </div>
                    <div className={"flex items-center space-x-2 sm:my-0 my-3"}>
                        <div>Sort :</div>
                        <div>Newest</div>
                        <div className={"bg-blue-100 text-blue-600 text-sm rounded-md py-2 px-2"}>Most Points</div>
                    </div>
                </ReviewHeader>
                <CardBody>
                    <div className={"flex flex-col space-y-7"}>
                        {[1, 2, 3, 4, 5].map((item) => (
                            <div className={"flex gap-3"} key={item}>
                                <div className={"w-12 h-12  flex-shrink-0"}>
                                    <img className={"w-full h-full object-contain rounded-full"}
                                         src="/assets/images/person/Ellipse 64.png" alt=""/>
                                </div>
                                <div>
                                    <div className="flex items-center gap-2">
                                        <span className={"text-bold text-sm capitalize"}>user Name</span>
                                        <span className={"text-gray-400 text-xs"}>2021-11-06</span></div>
                                    <p className={"leading-relaxed mt-2"}>Lorem ipsum dolor sit amet, consectetur adipisicing
                                        elit. Est fugit harum obcaecati
                                        odio officia quia totam. Iste neque quaerat quia quis quisquam quo quod rem,
                                        repudiandae sit. Amet distinctio dolores odio quia.</p>
                                </div>

                            </div>
                        ))}
                    </div>
                </CardBody>
            </CardContent>
        </div>
    );
};

export default Reviews;
