import { createContext } from "react";

export const ColorsContext = createContext<IColors>([]);

export interface IColorsApiResponse {
  colors: IColors;
}

export type IColors = string[] | [];

export const colors = ["#f85931", "#f9f2e7", "#13747d", "#e9f2f9", "#ebefc9"];
