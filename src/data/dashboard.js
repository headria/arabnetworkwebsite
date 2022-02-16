import { BsCurrencyBitcoin } from "react-icons/bs";
import { AiOutlineStar } from "react-icons/ai";
import { RiUserSmileLine } from "react-icons/ri";
import { BiStats } from "react-icons/bi";

export const data = [
  {
    id: 1,
    title: "11 coins",
    count: "On Your WatchList",
    type: "up",
    icon: <AiOutlineStar color="#0668af" />,
  },
  {
    id: 2,
    title: "74% Extremes Greed",
    count: "Fear and Greed Index",
    type: "defualt",
    icon: <RiUserSmileLine color="#0668af" />,
  },
  {
    id: 3,
    title: "39.56%",
    count: "Bitcoin Market cap",
    icon: <BsCurrencyBitcoin color="#0668af" />,
    type: "up",
  },
  {
    id: 4,
    title: "$59.66",
    count: "Wallet porfit 3M",
    type: "down",
    icon: <BiStats color="#0668af" />,
  },
  {
    id: 5,
    title: "$27.16 %",
    count: "Wallet porfit 3M",
    type: "up",
    icon: <BiStats color="#0668af" />,
  },
];
