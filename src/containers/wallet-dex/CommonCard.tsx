import React from 'react';
import {CardContent, Wrapper, Title, CardBody, Card, BG, WrapperImg} from "./Styled"

interface IProps {
    title: string
    subtitle: string;
    desc: string;
    img: string
    cardTitle: string
}


const CommonCard = ({desc, img, subtitle, title, cardTitle}: IProps) => {
    return (
        <BG>
            <div className={"flex items-center justify-center gap-5 flex-col px-4"}>
                <Title>{title}</Title>
                <p>{subtitle}</p>
            </div>
            <div className={"max-w-screen-2xl mx-auto px-4"}>
                <Wrapper>
                    {[1, 2, 3, 4, 5, 6].map((item) => (
                        <Card key={item}>
                            <CardContent className={"relative"}>
                                <WrapperImg
                                    className={`${item === 1 ? "bg-red-100" : item === 2 ? "bg-blue-100" : item === 3 ? "bg-green-100" : item === 4 ? "bg-purple-100" : item === 5 ? "bg-red-100" : item === 6 ? "bg-pink-100" : "bg-red-100"}`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30.883" height="44.36"
                                         viewBox="0 0 40.883 54.36">
                                        <path id="earth"
                                              d="M41.61,4.79,42.86,5a1.55,1.55,0,0,1,1.39,1.89A15.78,15.78,0,0,1,42,12.71a8.07,8.07,0,0,1-6.67,3.66H33.65v1.89c1,.19,2,.33,3,.56a20.44,20.44,0,1,1-9.11-.07c.77-.17,1.57-.27,2.36-.37.35,0,.49-.16.47-.52s0-1,0-1.45a15.862,15.862,0,0,1-2.51-.13,7.9,7.9,0,0,1-6.06-3.83,16.52,16.52,0,0,1-2.09-5.59A1.53,1.53,0,0,1,21,5a14.78,14.78,0,0,1,6.21.34A8.38,8.38,0,0,1,31.79,9l.21.2c.58-.67,1.11-1.39,1.74-2a8.51,8.51,0,0,1,5-2.31,2.424,2.424,0,0,0,.45-.1ZM16.92,30.33c2.31,2.31,4.56,4.59,6.85,6.83a8.16,8.16,0,0,1,2.59,6.27q0,5.085,0,10.15c0,1.55,0,1.53,1.49,1.92a.75.75,0,0,0,.9-.3c2.46-3,4.94-6.06,7.42-9.09a1.87,1.87,0,0,0,.08-2.36A3.67,3.67,0,0,0,32.92,42H30.58a2.42,2.42,0,0,1-2.26-1.58,2.37,2.37,0,0,1,.53-2.74c1.43-1.47,2.9-2.91,4.35-4.37a1.32,1.32,0,0,0,0-2.09l-8-8a.59.59,0,0,0-.52-.12,17.31,17.31,0,0,0-7.76,7.23Zm15.33,8.45a3.39,3.39,0,0,0,.48,0,6.81,6.81,0,0,1,5.8,2.66,5.16,5.16,0,0,1,.12,6.64q-3,3.69-6,7.36c-.12.14-.23.3-.37.48,7.94,0,15-6.08,16.38-13-1.19-.38-2.39-.75-3.58-1.15A6.64,6.64,0,0,1,42.18,31c.88-1,1.77-2,2.65-3,.13-.14.24-.29.35-.43A16.87,16.87,0,0,0,28.4,22c.11.15.32.21.45.34,2.2,2.19,4.39,4.37,6.58,6.57a4.51,4.51,0,0,1,0,6.7c-.56.57-1.13,1.13-1.69,1.69ZM23.14,53.49V43.23a4.88,4.88,0,0,0-1.54-3.7c-1.88-1.84-3.74-3.72-5.6-5.59l-.42-.4a17.12,17.12,0,0,0,7.56,19.95ZM47.06,30.37c-.91,1-1.82,2-2.65,3a3.39,3.39,0,0,0,1.45,5.31c.86.33,1.75.58,2.62.86l.69.22C49.61,37.38,48.66,33.16,47.06,30.37ZM30,13.13a5.93,5.93,0,0,0-6.7-5.05A6.08,6.08,0,0,0,30,13.13ZM40.69,8A6,6,0,0,0,34,13.11,6,6,0,0,0,40.69,8Z"
                                              transform="translate(-11.501 -4.79)" fill="#48ffbc"/>
                                    </svg>
                                </WrapperImg>
                                <CardBody>
                                    <div className={"absolute_Item"}>
                                        <h4>
                                            {cardTitle}
                                        </h4>
                                        <p>{desc}</p>
                                    </div>
                                </CardBody>
                            </CardContent>
                        </Card>
                    ))}
                </Wrapper>
            </div>
        </BG>
    );
};

export default CommonCard;
