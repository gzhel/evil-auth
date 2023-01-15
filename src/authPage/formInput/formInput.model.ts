import { useCallback, useMemo, useState } from "react";
import { FormInputProps } from "./formInput.types";

export const useModel = (props: FormInputProps) => {
  const fieldName = useMemo(() => {
    return props.name[0].toUpperCase() + props.name.slice(1);
  }, [props.name]);

  const validation = useMemo(() => {
    return Object.assign(
      {},
      {
        required: {
          value: props.required,
          message: `${fieldName} is required`,
        },
        ...props.validation,
      }
    );
  }, [fieldName, props.required, props.validation]);

  const isInputPassword = useMemo(() => {
    return props.name === "password";
  }, [props.name]);

  const [isPasswordShown, setPasswordShown] = useState(false);

  const handleShowPassword = useCallback(() => {
    setPasswordShown((prevState) => !prevState);
  }, []);

  const inputType = useMemo(() => {
    if (isInputPassword && !isPasswordShown) {
      return "password";
    }
    if (props.name === "email") {
      return "email";
    }
    return "text";
  }, [isInputPassword, isPasswordShown, props.name]);

  return {
    fieldName,
    validation,
    isInputPassword,
    isPasswordShown,
    handleShowPassword,
    inputType,
  };
};
