import React from "react";
import cn from "classnames";
import { InputEmailProps } from "./inputEmail.types";
import { useModel } from "./inputEmail.model";
import styles from "./inputEmail.module.scss";

export function InputEmail(props: InputEmailProps): JSX.Element {
  const model = useModel(props);

  return (
    <>
      <div
        className={cn(
          props.className,
          styles.formInput,
          props.errors && styles.formInputErrors
        )}
      >
        <input
          type="email"
          id={props.name}
          placeholder=" "
          autoComplete="new-password"
          {...props.register(props.name, model.validation)}
        />
        <label htmlFor={props.name}>{model.fieldName}</label>
      </div>
      {props.errors && (
        <p className={cn(props.className, styles.errorMessage)}>
          {props.errors.message}
        </p>
      )}
    </>
  );
}
