import { useCallback, useMemo, useState } from "react";
import { InputPasswordProps } from "./inputPassword.types";

export const useModel = (props: InputPasswordProps) => {
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

  const passwordValue = props.watch("password", false);

  const [isPasswordShown, setPasswordShown] = useState(false);

  const handleShowPassword = useCallback(() => {
    setPasswordShown((prevState) => !prevState);
  }, []);

  const inputType = useMemo(() => {
    return !isPasswordShown ? "password" : "text";
  }, [isPasswordShown]);

  return {
    fieldName,
    validation,
    passwordValue,
    isPasswordShown,
    handleShowPassword,
    inputType,
  };
};
