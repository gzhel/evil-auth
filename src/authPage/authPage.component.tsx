import React from "react";
import cn from "classnames";
import { GiAlienStare } from "react-icons/gi";
import { IconContext } from "react-icons";
import { FormInput } from "./formInput";
import { useModel } from "./authPage.model";
import styles from "./authPage.module.scss";
import { Footer } from "./footer";

export function AuthPage() {
  const model = useModel();

  //TODO:
  // + 1) Text in the left top corner
  // + 2) Mobile first markup
  // + 2.5) Choose best fonts
  // + 2.6) Add icon
  // 3) Add Show button in password
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
          <FormInput
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
          <FormInput
            name="password"
            className={styles.row}
            register={model.register}
            errors={model.errors.password}
            required={true}
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
