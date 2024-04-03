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
      <h1 className="filterText">Filter By:</h1>

      <div className="headerMain">
        <div className="colorVie">
          <ColorsView onSelectColor={getSelectedColor} title={"Color"} />
        </div>
        <div className="titleCont">
          <TitleOrSubtitleField getText={getFilterText} />
        </div>
      </div>
    </div>
  );
};

export default Header;
