import React from "react";
import {HiOutlineSearch} from "react-icons/hi";
import {Logo} from "@components";


const HeaderDashboard = () => {
    return (
        <div className="border-b border-opacity-10  mx-6">
            <div className="flex items-center justify-between w-full">
                <div>
                    <Logo/>
                </div>
                <div className="relative group ">
                    <input
                        placeholder="Search..."
                        type="search"
                        className="w-full px-7 pt-2 rounded-md focus:outline-none bg-transparent border-0 "
                    />
                    <div className="absolute left-0 top-2">
                        <HiOutlineSearch className="text-gray-600 opacity-40 text-lg"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderDashboard;


