import React from "react";
import { Footer, Header } from "@components";
import {
  CommonCard,
  CommonSliderr,
  FooterContent,
  NewsLetter,
} from "@containers";
import styled from "styled-components";

const DEX = () => {
  return (
    <>
      <Header />
      <Content>
        <CommonSliderr
          center={true}
          img={"Dex.png"}
          desc={
            "Arab Dex is decentralized exchange that offers limit/ market trading (on-chain matching) with zero fees, implemented entirely on contracts, and has the potential to lunch new markets freely without the need fir listing perssion  Arab Dex is a decentralized exchange with additional service such as  Launchpad and more to come in the future, making it a one-stop DeFi platform."
          }
          title={"Arab Dex"}
          subtitle={"Buy, Store, Exchanges Cryptocurrency And Intrect Dapps"}
        />
        <CommonCard
          desc={
            "Arab is able to serve up to 15000 + transaction Per Secound Arab Processes thousend og transaction per secound and extend to even more "
          }
          title={"Property"}
          subtitle={"Lorem ipsum dolor sit amet, consectetur. Lorem ipsum."}
          img={""}
          cardTitle={"Speed"}
        />
        <FooterContent
          desc={
            "Arab Dex is decentralized exchange that offers limit/ market trading (on-chain matching) with zero fees, implemented entirely on contracts, and has the potential to lunch new markets freely without the need fir listing perssion"
          }
          title={"Arab Dex"}
        />
      </Content>
      <NewsLetter isWhite={true} />

      <Footer />
    </>
  );
};

export default DEX;

const Content = styled.div`
  background-color: #f0eee7;
`;
