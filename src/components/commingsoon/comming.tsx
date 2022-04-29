import * as React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { params } from "../../config/particles";
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
        <h1>Commming Soon</h1>
        <p>
          Lorem ipsu adipisicing elit. Aspernatur iste autem dolores deleniti
          velit?
        </p>
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
