import { forwardRef } from "react";

const Label = forwardRef((props, ref) => {
  const { children, htmlFor } = props;
  return (
    <label
    htmlFor={htmlFor}
      ref={ref}
      className="block text-sm font-medium text-gray-700"
    >
      {children}
    </label>
  );
});

export default Label;