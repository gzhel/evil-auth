import React from "react";
import cn from "classnames";
import { FormInputProps } from "./formInput.types";
import { useModel } from "./formInput.model";
import styles from "./formInput.module.scss";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { IconContext } from "react-icons";

export function FormInput(props: FormInputProps): JSX.Element {
  const model = useModel(props);

  console.log(111, props);

  return (
    <>
      <div
        className={cn(
          props.className,
          styles.formInput,
          props.errors && styles.formInputErrors,
          model.isInputPassword && styles.inputPassword
        )}
      >
        <input
          type={model.inputType}
          id={props.name}
          placeholder=" "
          autoComplete="new-password"
          {...props.register(props.name, model.validation)}
        />
        <label htmlFor={props.name}>{model.fieldName}</label>
        {!model.isInputPassword ? null : (
          <span
            className={styles.inputPasswordIcon}
            onClick={model.handleShowPassword}
          >
            <IconContext.Provider value={{ size: "1.8rem", color: "#000" }}>
              {!model.isPasswordShown ? (
                <AiOutlineEye />
              ) : (
                <AiOutlineEyeInvisible />
              )}
            </IconContext.Provider>
          </span>
        )}
      </div>
      {props.errors && (
        <p className={cn(props.className, styles.errorMessage)}>
          {props.errors.message}
        </p>
      )}
    </>
  );
}
