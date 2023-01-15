import React from "react";
import cn from "classnames";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { IconContext } from "react-icons";
import { InputPasswordProps } from "./inputPassword.types";
import { useModel } from "./inputPassword.model";
import styles from "./inputPassword.module.scss";

export function InputPassword(props: InputPasswordProps): JSX.Element {
  const model = useModel(props);

  return (
    <>
      <div
        className={cn(
          props.className,
          styles.formInput,
          styles.inputPassword,
          props.errors && styles.formInputErrors
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
        {!model.passwordValue ? null : (
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
