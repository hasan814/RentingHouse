"use client";

import { InputProps } from "@/types/index";
import { FieldError } from "react-hook-form";
import { BiDollar } from "react-icons/bi";

const Input = ({
  id,
  label,
  type = "text",
  disabled,
  formatPrice,
  register,
  required,
  errors,
}: InputProps) => {
  // ============= Constant =============
  const error = errors?.[id] as FieldError | undefined;

  // ============= Rendering =============
  return (
    <div className="w-full relative">
      {formatPrice && (
        <BiDollar
          size={24}
          className="text-neutral-700 absolute top-5 left-2"
        />
      )}
      <input
        id={id}
        type={type}
        disabled={disabled}
        {...register(id, { required })}
        placeholder=" "
        className={`peer w-full p-4 pt-6 font-light bg-white border-2 rounded-md outline-none transition disabled:opacity-70 disabled:cursor-not-allowed ${
          formatPrice ? "pl-9" : "pl-4"
        } ${
          error
            ? "border-rose-500 focus:border-rose-500"
            : "border-neutral-300 focus:border"
        }`}
      />
      <label
        className={`absolute text-md duration-150 transform -translate-y-3 top-5 z-10 origin-[0] ${
          formatPrice ? "left-9" : "left-4"
        } peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 ${
          error ? "text-rose-500" : "text-zinc-400"
        }`}
      >
        {label}
      </label>
      {error && <span className="text-rose-500 text-sm">{error.message}</span>}
    </div>
  );
};

export default Input;
