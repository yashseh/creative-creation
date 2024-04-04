export interface IColorsApiResponse {
  colors: IColors;
}

export type IColors = string[] | [];

export const maxCreative = 5;

export const getColors =
  "https://random-flat-colors.vercel.app/api/random?count=10";

// export const colors = ["#f85931", "#f9f2e7", "#13747d", "#e9f2f9", "#ebefc9"];
