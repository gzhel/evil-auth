import { useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthPageFormData } from "./authPage.types";

export const useModel = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<AuthPageFormData>();

  const delay = useCallback((formData: AuthPageFormData, ms: number) => {
    return new Promise((resolve) =>
      setTimeout(() => {
        resolve(formData);
      }, ms)
    );
  }, []);

  const [isLoading, setLoading] = useState(false);

  const onSubmit = useCallback(
    async (formData: AuthPageFormData) => {
      setLoading(true);
      try {
        const res = await delay(formData, 3000);
        alert(JSON.stringify(res));
        reset({
          email: "",
          password: "",
        });
      } catch (e) {
        alert(e);
      }
      setLoading(false);
    },
    [delay, reset]
  );

  return { register, handleSubmit, watch, errors, onSubmit, isLoading };
};
