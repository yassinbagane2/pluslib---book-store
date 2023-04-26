import React from "react";

const Button = ({ children }) => {
  return (
    <button className="px-3 py-2 rounded-r-md bg-[#64ab03] text-white h-10 -mx-4">
      {children}
    </button>
  );
};

export default Button;
