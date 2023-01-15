import React from "react";
import cn from "classnames";
import { GiAlienStare } from "react-icons/gi";
import { IconContext } from "react-icons";
import { useModel } from "./authPage.model";
import { Footer } from "./footer";
import { InputEmail } from "./inputEmail";
import { InputPassword } from "./inputPassword";
import styles from "./authPage.module.scss";

export function AuthPage() {
  const model = useModel();

  //TODO:
  // 4) Mock api response

  return (
    <div className={styles.page}>
      <section className={styles.pageLayout}>
        <form
          className={styles.formLayout}
          onSubmit={model.handleSubmit(model.onSubmit)}
        >
          <div className={cn(styles.row, styles.logo)}>
            <IconContext.Provider value={{ size: "2.5rem", color: "#556B2F" }}>
              <GiAlienStare />
            </IconContext.Provider>
          </div>
          <InputEmail
            name="email"
            className={styles.row}
            register={model.register}
            errors={model.errors.email}
            required={true}
            validation={{
              pattern: {
                value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                message: "Email is not valid",
              },
            }}
          />
          <InputPassword
            name="password"
            className={styles.row}
            register={model.register}
            errors={model.errors.password}
            required={true}
            watch={model.watch}
            validation={{
              minLength: {
                value: 6,
                message: "Password should be at-least 6 characters",
              },
            }}
          />
          <p className={styles.row}>
            <a href="/" className={styles.forgotPassword}>
              Forgot password?
            </a>
          </p>
          <button type="submit" className={cn(styles.row, styles.submitButton)}>
            Sign In
          </button>
        </form>
      </section>
      <Footer />
    </div>
  );
}
