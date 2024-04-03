import "./header.css";
import ColorsView from "../ColorsView";
import TitleOrSubtitleField from "../TitleOrSubtitleField";
import React from "react";
import { IHeaderProps } from "./types";

const Header: React.FC<IHeaderProps> = ({
  getSelectedColor,
  getFilterText,
}) => {
  return (
    <div className="container">
      <h1>Filter By:</h1>
      <div className="headerMain">
        <ColorsView onSelectColor={getSelectedColor} title={"Color"} />
        <TitleOrSubtitleField getText={getFilterText} />
      </div>
    </div>
  );
};

export default Header;
