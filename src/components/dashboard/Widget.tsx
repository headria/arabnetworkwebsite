import React from "react";
import { BsArrowUp, BsArrowDown } from "react-icons/bs";
interface IWidgetProps {
  title: string;
  icon: any;
  count: string;
  type: string;
}
const Widget = ({ count, title, icon = <></>, type }: IWidgetProps) => {
  return (
    <div className="bg-darBox p-2 rounded-md w-36 h-36">
      <div className="rounded-md  flex  h-full flex-col gap-4 mt-3">
        <div className="w-7 h-7 bg-darkBody ml-auto rounded-md flex justify-center items-center">
          {icon}
        </div>
        <div className="inline-flex gap-1">
          {type === "up" ? (
            <BsArrowUp className="text-green-400" />
          ) : type === "down" ? (
            <BsArrowDown className="text-red-400" />
          ) : null}
          <p
            className={`text-xs ${
              type === "down"
                ? "text-red-400"
                : type === "up"
                ? "text-green-400"
                : null
            }`}
          >
            {title}
          </p>
        </div>
        <p className="text-xs text-gray-600">{count}</p>
      </div>
    </div>
  );
};

export default Widget;
