import React from "react";
import s from "./index.module.scss";
import { useForm } from "react-hook-form";
import cn from "classnames";
import { GiAlienStare } from "react-icons/gi";
import { IconContext } from "react-icons";

interface FormData {
  email: string;
  password: string;
}

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (formData: FormData) => {
    alert(formData.email + formData.password);
  };

  return (
    <section className={s.pageLayout}>
      <form className={s.formLayout} onSubmit={handleSubmit(onSubmit)}>
        <div className={cn(s.row, s.logo)}>
          <IconContext.Provider value={{ size: "2.5rem", color: "#556B2F" }}>
            <GiAlienStare />
          </IconContext.Provider>
        </div>
        <div className={cn(s.row, s.formControl)}>
          <input
            type="email"
            id="email"
            placeholder=" "
            {...register("email", {
              required: {
                value: true,
                message: "Email is required",
              },
              pattern: {
                value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                message: "Email is not valid",
              },
            })}
          />
          <label htmlFor="email">Email</label>
        </div>
        {errors.email && (
          <p className={cn(s.row, s.errorMessage)}>{errors.email.message}</p>
        )}
        <div className={cn(s.row, s.formControl)}>
          <input
            type="password"
            id="password"
            placeholder=" "
            {...register("password", {
              required: {
                value: true,
                message: "Password is required",
              },
              minLength: {
                value: 6,
                message: "Password should be at-least 6 characters",
              },
            })}
          />
          <label htmlFor="password">Password</label>
        </div>
        {errors.password && (
          <p className={cn(s.row, s.errorMessage)}>{errors.password.message}</p>
        )}
        <p className={s.row}>
          <a href="/" className={s.forgotPassword}>
            Forgot password?
          </a>
        </p>
        <button type="submit" className={cn(s.row, s.submitButton)}>
          Sign In
        </button>
      </form>
    </section>
  );
}

export default App;
