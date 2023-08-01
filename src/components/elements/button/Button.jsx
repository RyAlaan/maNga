import React from "react";
import clsx from "clsx";

const Button = (props) => {
  const { children, className, onClick, type, onSubmit } = props;
  return (
    <button
      type={type}
      onClick={onClick}
      onSubmit={onSubmit}
      className={clsx("text-white font-bold py-2 px-4 rounded", className)}
    >
      {children}
    </button>
  );
};

export default Button;
