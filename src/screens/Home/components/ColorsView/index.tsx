import React, { useContext, useState } from "react";

import styles from "./colors.module.css";
import { CreativeContext } from "../../creativeContext";
import { IColorsViewProps } from "./types";
const ColorsView: React.FC<IColorsViewProps> = ({ onSelectColor, title }) => {
  const colors = useContext(CreativeContext)?.colors;
  const [backgroundColor, setBackgroundColor] = useState("");

  const handleColorSelection = (color: string) => {
    setBackgroundColor(color);
    onSelectColor(color);
  };

  return (
    <div className={styles.containerMain}>
      <h4 className={styles.colorHeading}>{title}</h4>
      <div className={styles.outerContainer}>
        {colors &&
          colors.map((color, index) => (
            <div key={index} className={styles.container}>
              {color === backgroundColor && (
                <div className={styles.highlight} />
              )}
              <div
                onClick={() => handleColorSelection(color)}
                key={index}
                className={styles.colorContainer}
                style={{ backgroundColor: color }}
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default ColorsView;

//  {
//    colors &&
//      colors.map((color, index) => (
//        <div key={index} className={styles.container}>
//          {color === state.backgroundColor && (
//            <div className={styles.highlight} />
//          )}
//          <div
//            onClick={() => handleColorSelection(color)}
//            key={index}
//            className={styles.colorContainer}
//            style={{ backgroundColor: color }}
//          />
//        </div>
//      ));
//  }
