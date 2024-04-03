import React, { Ref } from "react";

export interface IDrawerProps {
  children: React.ReactNode;
}

export interface IDrawerMethods {
  handleDrawerState: (value: boolean) => void;
  isDrawerOpen: boolean;
}
