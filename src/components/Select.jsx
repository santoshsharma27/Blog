/* eslint-disable react/prop-types */
import React, { useId } from "react";

const Select = React.forwardRef(function Select(
  { options = [], label, id, className = "", ...props },
  ref
) {
  const generatedId = useId();
  const selectId = id || generatedId;

  return (
    <div className="w-full">
      {label && (
        <label
          htmlFor={selectId}
          className="inline-block mb-1 pl-1 text-sm font-medium text-gray-700"
        >
          {label}
        </label>
      )}
      <select
        {...props}
        ref={ref}
        id={selectId}
        className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 focus:ring-2 focus:ring-blue-500 duration-200 border border-gray-300 w-full ${className}`}
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
});

export default Select;
