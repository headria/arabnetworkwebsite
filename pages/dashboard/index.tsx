import React from "react";
import { RightSide, NavSide, MiddleSide } from "./DashboardStyled";
const Dashboard = () => {
  return (
    <div className="bg-darkBody w-full h-screen ">
      <div className="grid grid-cols-12 gap-8">
        <NavSide>side Navbar</NavSide>
        <MiddleSide>
          <div className="w-full border-b border-gray-500 pt-10">middle</div>
        </MiddleSide>
        <RightSide>
          <div className="w-11/12 border-b border-gray-500 pt-10 mx-auto">
            side rigth
          </div>
        </RightSide>
      </div>
    </div>
  );
};

export default Dashboard;
