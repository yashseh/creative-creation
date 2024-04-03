import React from "react";
import { ICreativeCardProps } from "./types";
import styles from "./creativeCard.module.css";
const CreativeCard: React.FC<ICreativeCardProps> = ({
  title,
  subtitle,
  backgroundColor,
}) => {
  return (
    <div
      className={styles.cardContainer}
      style={{ backgroundColor: backgroundColor }}
    >
      <h1>{title}</h1>
      <h4>{subtitle}</h4>
    </div>
  );
};

export default CreativeCard;
