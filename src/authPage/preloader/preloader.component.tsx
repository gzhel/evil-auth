import React, { FC, SyntheticEvent } from "react";
import { createPortal } from "react-dom";
import { IoEarth } from "react-icons/io5";
import { GiAlienStare, GiExplodingPlanet } from "react-icons/gi";
import { IconContext } from "react-icons";
import styles from "./preloader.module.scss";
import { useModel } from "./preloader.model";

interface PreloaderProps {
  isLoading: boolean;
}

export const Preloader: FC<PreloaderProps> = (props) => {
  const model = useModel();

  return !props.isLoading
    ? null
    : createPortal(
        <div className={styles.preloader}>
          <div
            className={styles.container}
            onClick={(event: SyntheticEvent) => {
              event.preventDefault();
            }}
          >
            <div className={styles.icons}>
              <IconContext.Provider
                value={{
                  size: model.isMobile ? "3rem" : "6rem",
                  color: "#000",
                }}
              >
                <GiAlienStare />
              </IconContext.Provider>
              <IconContext.Provider
                value={{
                  size: model.isMobile ? "3rem" : "6rem",
                  color: "#000",
                }}
              >
                <IoEarth />
              </IconContext.Provider>
              <IconContext.Provider
                value={{
                  size: model.isMobile ? "3rem" : "6rem",
                  color: "#000",
                }}
              >
                <GiExplodingPlanet />
              </IconContext.Provider>
            </div>
            <span className={styles.loadingText}>Loading</span>
          </div>
        </div>,
        model.preloaderElement
      );
};
