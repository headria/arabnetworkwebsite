import React, { useState } from "react";
import { RightSide, NavSide, MiddleSide, NavItem } from "./DashboardStyled";
import { MdNotifications, MdOutlineMessage } from "react-icons/md";
import { FaUserAlt } from "react-icons/fa";
import { RiDashboardLine } from "react-icons/ri";

import { Widget, NewWidget, MyBalance } from "@components";

const Dashboard = () => {
  const [sideTab, setSidetab] = useState(0);
  return (
    <div className="bg-darkBody w-full h-screen ">
      <div className="grid grid-cols-12 gap-8">
        <NavSide>side Navbar</NavSide>
        <MiddleSide>
          <div className="w-full border-b border-gray-500 pt-11 border-opacity-30">
            middle
          </div>
        </MiddleSide>
        <RightSide>
          <div className="w-11/12">
            <div className="flex justify-center">
              <ul className="flex items-center gap-12">
                <NavItem isActive={sideTab === 0} onClick={() => setSidetab(0)}>
                  <MdNotifications fontSize={19} />
                </NavItem>
                <NavItem isActive={sideTab === 1} onClick={() => setSidetab(1)}>
                  <MdOutlineMessage fontSize={16} />
                </NavItem>
                <NavItem isActive={sideTab === 2} onClick={() => setSidetab(2)}>
                  <RiDashboardLine fontSize={16} />
                </NavItem>
                <NavItem isActive={sideTab === 3} onClick={() => setSidetab(3)}>
                  <FaUserAlt fontSize={16} />
                </NavItem>
              </ul>
              <div className="pt-12"></div>
            </div>

            <div className="border-t border-gray-500 mx-auto border-opacity-30 pl-5 pr-5 flex flex-col justify-center  items-center">
              <MyBalance />
              <div className="grid grid-cols-12">
                {[1, 2, 3, 4, 5].map((item) => (
                  <div className="col-span-6 mb-5 ml-5" key={item}>
                    <Widget />
                  </div>
                ))}
                <div className="col-span-6  ml-5">
                  <NewWidget />
                </div>
              </div>
            </div>
          </div>
        </RightSide>
      </div>
    </div>
  );
};

export default Dashboard;
