import React from "react";
import {Footer, Header} from "@components";
import {NewsLetter, TeamContainer, CommonSliderr, CommonCard, FooterContent} from "@containers";


const Wallet = () => {
    return <>
        <Header/>
        <CommonSliderr center={true} img={"Wallet.png"}
                       desc={"Buy, Store, Exchanges Cryptocurrency And Intrect Dapps, implemented entirely on contracts, and has the potential to lunch new markets freely without the need fir listing perssion  Arab Dex is a decentralized exchange with additional service such as  Launchpad and more to come in the future, making it a one-stop DeFi platform."}
                       title={"Arab Wallet"} subtitle={"The must Trusted & Secure Crypto Wallet"}/>
        <CommonCard
            desc={"Arab is able to serve up to 15000 + transaction Per Secound Arab Processes thousend og transaction per secound and extend to even more "}
            title={"Property"} subtitle={"Lorem ipsum dolor sit amet, consectetur. Lorem ipsum."}
            img={""} cardTitle={"Speed"}/>
        <FooterContent
            desc={"Arab Dex is decentralized exchange that offers limit/ market trading (on-chain matching) with zero fees, implemented entirely on contracts, and has the potential to lunch new markets freely without the need fir listing perssion"}
            title={"Arab Wallet"}/>
        <NewsLetter isWhite={true} />
        <Footer/>
    </>;
};

export default Wallet;
