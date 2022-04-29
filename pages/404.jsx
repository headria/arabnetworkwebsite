import * as React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { params } from "../src/config/particles";
import { tsParticles } from "tsparticles";
import Link from "next/link";

const Comming = () => {
  React.useEffect(() => {
    tsParticles.load("tsparticles", params);
  }, []);
  return (
    <BG>
      {/* <Convas id="tsparticles" className="" /> */}
      <Soon>
        <div className="img_control">
          <img src={"/assets/images/bg/Group 109.png"} alt="" />
        </div>
        <h1>Page Not Found</h1>
        <p>The page you are looking for does not exist or has been deleted</p>
        <Link passHref={true} href="/">
          <Button> Back To Home</Button>
        </Link>
      </Soon>
    </BG>
  );
};

export default Comming;

const Soon = styled.div`
  ${tw`flex flex-col h-screen justify-center items-center`}
  .img_control {
    width: 300px;
    height: 300px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  p {
    color: #666;
    margin: 10px 0;
    font-size: 20px;
  }
  h1 {
    font-size: 50px;
    font-weight: bold;
    color: #fff;
  }
  a {
  }
`;

const Convas = styled.div`
  ${tw``}
`;

const BG = styled.div`
  background-color: #022640;
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
`;

const Button = styled.button`
  ${tw`bg-Blue p-2 rounded-xl mt-10 block text-white cursor-pointer z-50`}
`;
