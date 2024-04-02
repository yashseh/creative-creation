import React from "react";
import styles from "./progressBar.module.css";
import {
  IProgressBarProps,
  getProgressWidthFromCurrentProgress,
} from "./types";
const ProgressBar: React.FC<IProgressBarProps> = ({
  currentProgress,
  totalValue,
}) => {
  const progressWidth = getProgressWidthFromCurrentProgress(
    currentProgress,
    totalValue
  );

  return (
    <div className={styles.container}>
      <div className={styles.progressOuter}>
        <div
          style={{ width: progressWidth }}
          className={styles.progressInner}
        />
      </div>
      <h4 className={styles.progressCount}>
        {`${currentProgress} / ${totalValue} Creatives`}
      </h4>
    </div>
  );
};

export default ProgressBar;
