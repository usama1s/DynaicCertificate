import React, { useState } from "react";

const TextAreaInput = ({
  label,
  placeholder,
  value,
  onChange,
  type,
  ...rest
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <div className="relative">
      <label className="block mb-1 text-sm font-medium text-gray-900">
        {label}
      </label>
      <textarea
        className={`w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline rounded-lg border ${
          isFocused ? "border-c-gold" : "border-gray-300"
        } sm:text-sm sm:leading-5`}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        {...rest}
      />
    </div>
  );
};

export default TextAreaInput;
