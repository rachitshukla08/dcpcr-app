import React, { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

const Accordian = ({ title, body, icon, level, children }) => {
  const [show, setShow] = useState(false);
  const handleClick = () => {
    setShow(!show);
  };

  return (
    <div
      className={`${level === 3 && "bg-[#f7f7f7]"} rounded border ${
        level === 1 && "custom-border"
      } px-4 py-2 my-4 flex`}
    >
      {icon}
      <div className="w-full">
        <div className={`flex justify-between items-center`}>
          <h3
            className={`${
              level === 1 ? "text-xl" : level === 2 ? "text-base" : "text-sm"
            } font-medium`}
          >
            {title}
          </h3>

          <button
            className="font-bold text-lg"
            type="button"
            onClick={handleClick}
          >
            {!show ? (
              <FiChevronDown className="transition-transform" />
            ) : (
              <FiChevronDown className="rotate-180 transition-transform" />
            )}
          </button>
        </div>
        <div className={`${!show && "hidden"}`}>
          {body}
          {children}
        </div>
      </div>
    </div>
  );
};

export default Accordian;
