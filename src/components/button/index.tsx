import React from "react";

export type IButton = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;
const Button: React.FC<IButton> = ({ className = "", children, ...rest }) => {
  return (
    <button
      className={`py-2 px-4 rounded bg-Blue  focus:outline-none ring-opacity-75  focus:ring text-white text-sm rounded-xl ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
