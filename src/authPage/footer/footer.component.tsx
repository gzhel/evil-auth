import React, { FC } from "react";
import styles from "./footer.module.scss";

export const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
      <span>
        Developed by{" "}
        <a
          href="https://gzhel.vercel.app"
          target="_blank"
          rel="noreferrer"
          className={styles.link}
        >
          Gregory Zhelyabin
        </a>{" "}
        in 2023
      </span>
    </footer>
  );
};
