import NavLinks from "./NavLink";
import {Container, Wrapper, Col, Row} from "./Header-Styled";
import {Logo, Button} from "@components";
import {useEffect, useState} from "react";
import {useScrollHandler} from "../../hook/useScrollHandler";
import {AiOutlineMenu} from "react-icons/ai";
import MenuMobile from "@components/header/MenuMobile";

const BuyButton = () => (
    <div className="nav-buycoin">
        <Button className="btn-primary">
            <a href="/">Buy Arab Coin</a>
        </Button>
    </div>
);

interface IHeaderProps {
    isTutorailPage?: boolean;
}

const Header = ({isTutorailPage}: IHeaderProps) => {
    const [show, setShow] = useState<boolean>(false);
    const scroll = useScrollHandler();
    return (
        <Wrapper>
            <header style={{background: scroll ? "#022640" : isTutorailPage ? "#022640" : "transparent"}}>
                <Container>
                    <Row>
                        <Col className={"flex-1 mt-2"}>
                            <div className="nav-logo">
                                <Logo/>
                            </div>
                        </Col>
                        <Col className={"justify-end items-end"}>
                            <div className={"items-center gap-12 hidden lg:flex"}>
                                <NavLinks/>
                                <BuyButton/>
                            </div>
                            <button
                                onClick={() => setShow(!show)}
                                className={"block lg:hidden"}
                            >
                                <AiOutlineMenu color={"#fff"} size={22}/>
                            </button>
                        </Col>
                    </Row>
                </Container>
            </header>
            {show && <MenuMobile show={show} setShow={setShow}/>}
        </Wrapper>
    );
};

export default Header;
