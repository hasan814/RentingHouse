import { BodyContentProps } from "@/types/index";

import Heading from "./Heading";
import React from "react";
import Input from "./Input";

const BodyContent = ({ isLoading, register, errors }: BodyContentProps) => {
  return (
    <div className="flex flex-col gap-4">
      <Heading title="Welcome to Renting House" subtitle="Create an account" />
      <Input
        id="email"
        label="Email"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id="name"
        label="Name"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id="password"
        label="Password"
        type="password"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
    </div>
  );
};

export default BodyContent;
