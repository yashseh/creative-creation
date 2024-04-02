export type IProgressBarProps = {
  currentProgress: number;
  totalValue: number;
};

export const getProgressWidthFromCurrentProgress = (
  currentProgress: number,
  totalValue: number
): string => {
  if (currentProgress > 0 && totalValue > 0) {
    const progressWidth = (currentProgress / totalValue) * 100;
    return `${progressWidth}%`;
  } else {
    return "0%";
  }
};
