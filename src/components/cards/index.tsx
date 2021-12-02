import React from "react";
import data from "@public/meta.json";
import styled from "styled-components";
import tw from "twin.macro";

export const Cards = () => {
  return (
    <div className="flex-1 mt-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {(data?.Choose ?? []).map((item) => (
          <div
            key={item.name}
            className="col-span-1 rounded-lg border shadow-md bg-white border-gray-50 "
          >
            <div className="relative">
              <Shape>
                <div className={"md:w-10 md:h-10 w-8 h-8"}>
                  <img
                    className={"w-full h-full object-contain"}
                    src={item.icon}
                    alt=""
                  />
                </div>
              </Shape>
              <div className={"max-w-xs ml-auto pl-12 md:pl-9 py-5"}>
                <h2 className="md:text-lg text-md  text-Darkblue font-bold capitalize mb-2">
                  {item.name}
                </h2>
                <p className="m-0 leading-relaxed">{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Shape = styled.div`
  ${tw`bg-LightYellow px-5  py-4  md:px-7 md:py-7 absolute left-0`}
  border-radius: 10px 0 80px 0;
`;
