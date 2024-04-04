import { createContext } from "react";
import { IColors } from "./types";

export const CreativeContext = createContext<ICreativeContext | null>(null);

type ICreativeContext = {
  colors: IColors | undefined;
  creatives: ICreative[];
};

export type ICreative = {
  title: string;
  subtitle: string;
  backgroundColor: string;
};
