"use client";

import { ButtonsProps } from "@/types/index";

import React from "react";

const Buttons = ({
  label,
  onClick,
  disabled,
  outline,
  small,
  icon: Icon,
}: ButtonsProps) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`relative disabled:opacity-70 disabled:cursor-not-allowed rounded-lg hover:opacity-80 transition w-full ${
        outline ? "bg-white" : "bg-rose-500"
      } ${outline ? "border-black" : "border-rose-500"} ${
        outline ? "text-black" : "text-white"
      } ${
        small
          ? "py-1 text-sm font-light border-[1px]"
          : "py-3 text-md font-semibold border-2"
      }`}
    >
      {Icon && <Icon size={24} className="absolute left-4 top-3" />}
      {label}
    </button>
  );
};

export default Buttons;
