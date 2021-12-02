import React from "react";
import MenuList from "./MenuList";
import Image from "next/image";
import {
  FooterContainer,
  Row,
  Col,
  Container,
  Copyright,
  FooterInner,
} from "./Footer-styled";
import SocialMedia from "./SocialMedia";
const NavigateMenus = [
  {
    title: "Home",
    url: "#",
  },
  {
    title: "About Us",
    url: "#",
  },
  {
    title: "Contact Us",
    url: "#",
  },
  {
    title: "Team",
    url: "#",
  },
];

const LinksMenus = [
  {
    title: "Terms & Condition",
    url: "#",
  },
  {
    title: "Privacy Policy",
    url: "#",
  },
  {
    title: "FAQ",
    url: "#",
  },
  {
    title: "Support",
    url: "#",
  },
];

const Footer = () => {
  return (
    <FooterContainer>
      <footer>
        <Container>
          <FooterInner>
            <div>
              <div className={"w-23 h-23"}>
                <Image
                  className={"object-contain"}
                  width={"100%"}
                  height={"100%"}
                  src="/assets/images/LogoFooterGroup.png"
                  alt=""
                />
              </div>
              <div className="desc">
                The combination of Arab Network's unique & supportive community
                and its highly experienced team of developers makes this one of
                the most highly revered projects in the cryptospace and
                especially in the Arab world.
              </div>
            </div>
          </FooterInner>
          <hr className={"my-7"} />
          <Row className="row">
            <Col>
              <MenuList title="Navigate" menus={NavigateMenus} />
            </Col>
            <Col>
              <MenuList title="Links" menus={LinksMenus} />
            </Col>
            <Col>
              <div className="footer-links">
                <h5 className="mt-3 font-semibold">Follow Us On</h5>
                <SocialMedia />
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
      <Copyright>
        <span>Copyright © 2021 Arab Network. All Rights Reserved.</span>
      </Copyright>
    </FooterContainer>
  );
};

export default Footer;
