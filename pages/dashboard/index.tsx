import React, { useState } from "react";
import { RightSide, MiddleSide, NavItem } from "./DashboardStyled";
import { MdNotifications, MdOutlineMessage } from "react-icons/md";
import { FaUserAlt } from "react-icons/fa";
import { RiDashboardLine } from "react-icons/ri";
import {
  Widget,
  NewWidget,
  MyBalance,
  Table,
  HeaderDashboard,
} from "@components";
import { data } from "../../src/data/dashboard";
const Dashboard = () => {
  const [sideTab, setSidetab] = useState(0);

  return (
    <div className="bg-darkBody w-full ">
      <div className="grid grid-cols-12 gap-">
        <MiddleSide>
          <HeaderDashboard />
          <div className="w-full  pt-11 border-opacity-10">
            <Table />
          </div>
        </MiddleSide>
        <RightSide>
          <div className="w-11/12 mx-auto">
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
              <div className="grid grid-cols-12 w-full">
                {data?.map((item) => (
                  <div className="col-span-6 mb-5 ml-5" key={item.id}>
                    <Widget
                      type={item.type}
                      title={item.title}
                      count={item.count}
                      icon={item.icon}
                    />
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
