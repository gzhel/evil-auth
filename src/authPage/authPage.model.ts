import { useForm } from "react-hook-form";
import { AuthPageFormData } from "./authPage.types";

export const useModel = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<AuthPageFormData>();

  const onSubmit = (formData: AuthPageFormData) => {
    alert(formData.email + formData.password);
  };

  return { register, handleSubmit, watch, errors, onSubmit };
};
