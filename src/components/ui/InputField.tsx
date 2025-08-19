"use client";
import React from "react";

interface InputFieldProps {
  name: string;
  value: string;
  placeholder: string;
  type?: string;
  error?: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  textarea?: boolean;
}

const InputField = ({
  name,
  value,
  placeholder,
  type = "text",
  error,
  onChange,
  textarea,
}: InputFieldProps) => {
  const baseClasses =
    "w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-purple-400 transition";

  return textarea ? (
    <>
      <textarea
        id={name}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        rows={5}
        className={baseClasses}
        aria-invalid={!!error}
      />
      {error && <p className="text-red-600 text-sm mt-1">{error}</p>}
    </>
  ) : (
    <>
      <input
        id={name}
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={baseClasses}
        aria-invalid={!!error}
      />
      {error && <p className="text-red-600 text-sm mt-1">{error}</p>}
    </>
  );
};

export default InputField;
