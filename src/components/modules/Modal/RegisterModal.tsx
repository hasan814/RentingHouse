"use client";

import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useRegisterModal } from "@/hooks/useRegisterModal";
import { useState } from "react";

import FooterContent from "../Others/FooterContent";
import BodyContent from "../Others/BodyContent";
import axios from "axios";
import Modal from "./Modal";
import toast from "react-hot-toast";

const RegisterModal = () => {
  // =========== Register ==============
  const registerModal = useRegisterModal();

  // =========== State ==============
  const [isLoading, setIsLoading] = useState(false);

  // =========== Form ==============
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: { name: "", email: "", password: "" },
  });

  // =========== Function ==============
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);
    axios
      .post("/api/register", data)
      .then(() => {
        registerModal.onClose();
      })
      .catch((error) => {
        toast.error("Something went wrong!");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  // =========== Rendering ==============
  return (
    <Modal
      title="Register"
      actionLabel="Continue"
      disabled={isLoading}
      body={
        <BodyContent
          errors={errors}
          register={register}
          isLoading={isLoading}
        />
      }
      isOpen={registerModal.isOpen}
      onClose={registerModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      footer={<FooterContent />}
    />
  );
};

export default RegisterModal;
