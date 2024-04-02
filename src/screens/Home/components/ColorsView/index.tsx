import React, { useContext } from "react";
import { ColorsContext } from "../../types";
import styles from "./colors.module.css";
const ColorsView = () => {
  const colors = useContext(ColorsContext);

  return (
    <div className={styles.containerMain}>
      <h4 className={styles.colorHeading}>Color</h4>
      <div className={styles.outerContainer}>
        {colors.map((color, index) => (
          <div
            key={index}
            className={styles.colorContainer}
            style={{
              backgroundColor: color,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default ColorsView;
