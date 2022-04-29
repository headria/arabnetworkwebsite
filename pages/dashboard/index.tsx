import React, { useState } from "react";
import {
  RightSide,
  MiddleSide,
  NavItem,
  DashboardContainer,
} from "../../src/containers/DashboardStyled";
import { MdNotifications, MdOutlineMessage } from "react-icons/md";
import { AiOutlineCloseCircle } from "react-icons/ai";
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
import "../../third-party/react-chartjs-2-defaults";
const Dashboard = () => {
  const [sideTab, setSideTab] = useState(0);
  const [openRightSide, setOpenRightSide] = useState(false);
  const [fullSide, setFullSide] = useState(false);

  return (
    <DashboardContainer>
      <div className="grid lg:grid-cols-12 gap-1 h-full">
        <MiddleSide isFull={fullSide}>
          <HeaderDashboard
            setFullSide={setFullSide}
            fullSide={fullSide}
            openRightSide={openRightSide}
            setOpenRightSide={setOpenRightSide}
          />
          <div className="w-full  pt-11 border-opacity-10">
            <Table />
          </div>
        </MiddleSide>
        <RightSide isActive={openRightSide}>
          <div className="w-11/12 mx-auto">
            <div className="flex justify-center ">
              <ul className="flex items-center gap-12 ">
                {openRightSide && (
                  <li onClick={() => setOpenRightSide(false)}>
                    <AiOutlineCloseCircle fontSize={19} />
                  </li>
                )}
                <NavItem isActive={sideTab === 0} onClick={() => setSideTab(0)}>
                  <MdNotifications fontSize={19} />
                </NavItem>
                <NavItem isActive={sideTab === 1} onClick={() => setSideTab(1)}>
                  <MdOutlineMessage fontSize={16} />
                </NavItem>
                <NavItem isActive={sideTab === 2} onClick={() => setSideTab(2)}>
                  <RiDashboardLine fontSize={16} />
                </NavItem>
                <NavItem isActive={sideTab === 3} onClick={() => setSideTab(3)}>
                  <FaUserAlt fontSize={16} />
                </NavItem>
              </ul>
              <div className="pt-12" />
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
    </DashboardContainer>
  );
};

export default Dashboard;
