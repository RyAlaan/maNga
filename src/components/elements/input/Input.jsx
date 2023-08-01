import clsx from "clsx";
import { forwardRef } from "react";

const Input = forwardRef((props, ref) => {
  const { type, placeholder, name, className, onChange, onSubmit } = props;
  return (
    <input
      ref={ref}
      type={type}
      placeholder={placeholder}
      name={name}
      id={name}
      onChange={onChange}
      onSubmit={onSubmit}
      className={clsx(
        " border border-gray-300 text-gray-200 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-700 block w-full p-2.5 bg-secondary",
        className
      )}
    />
  );
});

export default Input;
