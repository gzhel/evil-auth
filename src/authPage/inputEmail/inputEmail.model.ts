import { useMemo } from "react";
import { InputEmailProps } from "./inputEmail.types";

export const useModel = (props: InputEmailProps) => {
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

  return {
    fieldName,
    validation,
  };
};
