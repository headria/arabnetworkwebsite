import React from "react";
import { HiOutlineSearch, HiOutlineMenuAlt3 } from "react-icons/hi";
import { CgArrowLongRight, CgArrowLongLeft } from "react-icons/cg";
import { Logo } from "@components";

interface IHeaderProps {
  setOpenRightSide(val: boolean): void;
  setFullSide(val: boolean): void;
  fullSide: boolean;
  openRightSide: boolean;
}

const HeaderDashboard = ({
  setOpenRightSide,
  openRightSide,
  fullSide,
  setFullSide,
}: IHeaderProps) => {
  return (
    <div className="border-b border-opacity-10  mx-6">
      <div className="flex items-center justify-between w-full">
        <div>
          <Logo />
        </div>
        <div className="relative group flex gap-2 items-center">
          <input
            placeholder="Search..."
            type="search"
            className="w-full px-7 pt-2 rounded-md focus:outline-none bg-transparent border-0 "
          />
          <div className="absolute left-0 top-2">
            <HiOutlineSearch className="text-gray-600 opacity-40 text-lg" />
          </div>
          <div
            className="cursor-pointer block lg:hidden"
            onClick={() => setOpenRightSide(!openRightSide)}
          >
            <HiOutlineMenuAlt3 fontSize={19} />
          </div>
          <div
            className="cursor-pointer hidden lg:block"
            onClick={() => setFullSide(!fullSide)}
          >
            {fullSide ? (
              <CgArrowLongLeft fontSize={19} />
            ) : (
              <CgArrowLongRight fontSize={19} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderDashboard;
