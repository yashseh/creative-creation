import React from "react";
import { IDrawerMethods } from "../../../../components/Drawer/types";
import { ICreative } from "../../creativeContext";

export interface IAddNewCreativeDrawerProps {
  drawerRef: React.LegacyRef<IDrawerMethods>;
  onClick: () => void;
  doneHandler: (data: ICreative) => void;
}
