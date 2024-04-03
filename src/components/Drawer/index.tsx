import React, { useImperativeHandle, useRef, useState, useEffect } from "react";
import styles from "./drawer.module.css";
import { IDrawerMethods, IDrawerProps } from "./types";
import CROSS from "./../../assets/icons/x.svg";

const Drawer = React.forwardRef<IDrawerMethods, IDrawerProps>(
  ({ children }, ref) => {
    const [isDrawerOpen, setIsOpen] = useState<boolean>(false);
    const isDrawerOpenRef = useRef<boolean>(isDrawerOpen);

    useEffect(() => {
      isDrawerOpenRef.current = isDrawerOpen;
    }, [isDrawerOpen]);

    useImperativeHandle(
      ref,
      () => ({
        handleDrawerState: async (value: boolean) => {
          setIsOpen(value);

          isDrawerOpenRef.current = value;
        },
        isDrawerOpen: isDrawerOpenRef.current, // Pass ref object directly
      }),
      [isDrawerOpen]
    );

    const toggleDrawer = () => {
      setIsOpen(!isDrawerOpen);
    };

    return (
      <div
        className={`${styles.drawer} ${
          isDrawerOpen ? styles.open : styles.closed
        }`}
      >
        <div className={styles.content}>
          <div className={styles.drawerHeader}>
            <h1>Creative Creation</h1>
            <img
              onClick={toggleDrawer}
              className={styles.cross}
              src={CROSS}
              alt="X"
            />
          </div>
          {children}
        </div>
      </div>
    );
  }
);

export default Drawer;
