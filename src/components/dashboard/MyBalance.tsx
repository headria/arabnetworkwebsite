import React from "react";
import PitChart from "@components/chart/PitChart";
const MyBalance = () => {
  return (
    <div className="my-5 w-full px-5">
      <div className="flex justify-between items-center ">
        <div className="text-sm">Your balance</div>
        <div className="custom-select">
          <select
            name=""
            id=""
            className="form-select appearance-none
            block
            w-full
            px-3
            py-1.5
            text-base
            font-normal
            text-gray-300
            bg-transparent bg-clip-padding bg-no-repeat
            border border-solid border-gray-700
            border-opacity-30
            rounded
            transition
            ease-in-out
            m-0
           focus:bg-transparent focus:border-opacity-60 focus:outline-none"
            aria-label="Default select example"
          >
            <option value="">3m</option>
            <option value="">2m</option>
            <option value="">1m</option>
          </select>
        </div>
      </div>
      <PitChart />
      <div className="underline flex items-end justify-end mt-4 text-gray-600 text-sm">
        Details
      </div>
      <div className="flex justify-between items-center my-6">
        <div className="relative">
          <span className="absolute transform -translate-x-6 translate-y-4 w-2 h-2 shadow-md shadow-cyan-500/50  rounded-full bg-blue-600" />
          <p className="my-3">$ 2 565.355</p>
          <div className="text-sm inline-flex gap-3">
            <p className="text-gray-600 ">ETH</p>
            <span className="text-green-400">+33%</span>
          </div>
        </div>
        <div className="relative">
          <span className="absolute transform -translate-x-6 translate-y-4 w-2 h-2 shadow-lg  drop-shadow-xl  rounded-full bg-yellow-600" />
          <p className="my-3">$ 2 565.355</p>
          <div className="text-sm inline-flex gap-3">
            <p className="text-gray-600 ">BTC</p>
            <span className="text-red-400">+33%</span>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center my-6">
        <div className="relative">
          <span className="absolute transform -translate-x-6 translate-y-4 w-2 h-2 shadow-md shadow-cyan-500/50  rounded-full bg-gray-200" />
          <p className="my-3">$ 2 565.323</p>
          <div className="text-sm inline-flex gap-3">
            <p className="text-gray-600 ">DOT</p>
            <span className="text-green-400">+33%</span>
          </div>
        </div>
        <div className="relative">
          <span className="absolute transform -translate-x-6 translate-y-4 w-2 h-2 shadow-md shadow-cyan-500/50  rounded-full bg-blue-200" />
          <p className="my-3">$ 2 323.563</p>
          <div className="text-sm inline-flex gap-3">
            <p className="text-gray-600 ">LUNA</p>
            <span className="text-green-400">+33%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyBalance;
