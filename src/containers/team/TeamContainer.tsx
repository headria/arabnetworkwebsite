import React from "react";
import {
  Wrapper,
  BgTeam,
  Card,
  CardBody,
  CardHeader,
  Container,
} from "./Team-styled";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";

const TeamContainer = () => {
  return (
    <BgTeam>
      <Container>
        <Wrapper>
          {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
            <Card key={item}>
              <CardHeader>
                <div className={""}>
                  <div className={"Image_Container"} style={{ zIndex: 2 }}>
                    <img
                      className={"w-full h-full   object-cover"}
                      src="/assets/images/bg/pexels-pixabay-220453.jpg"
                      alt="person"
                    />
                    <img
                      className={
                        "w-full h-full absolute top-7 sm:top-7 md:top-6 "
                      }
                      style={{ zIndex: -1 }}
                      src="/assets/images/bg/Rectangle 10426@2x.png"
                      alt=""
                    />
                  </div>
                </div>
              </CardHeader>
              <CardBody>
                <ul>
                  <li>
                    <div className={"font-semibold text-lg"}>Duane Mody</div>
                  </li>
                  <li>
                    <div>position</div>
                  </li>
                  <li>
                    <div className={"flex items-center gap-3"}>
                      <a href="">
                        <FaFacebook size={20} />
                      </a>
                      <a href="">
                        <FaTwitter size={20} />
                      </a>
                      <a href="">
                        <FaLinkedin size={20} />
                      </a>
                    </div>
                  </li>
                </ul>
              </CardBody>
            </Card>
          ))}
        </Wrapper>
      </Container>
    </BgTeam>
  );
};

export default TeamContainer;
