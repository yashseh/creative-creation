import React, { useState } from "react";
import "./titleOrSubtitleField.css";
import TextInput from "../../../../components/TextInput";
import { ITitleOrSubtitleFieldProps } from "./types";
const TitleOrSubtitleField: React.FC<ITitleOrSubtitleFieldProps> = ({
  getText,
}) => {
  const [textValue, updateTextValue] = useState("");

  const onTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateTextValue(e.target.value);
    getText(e.target.value);
  };

  return (
    <div className="container-main">
      <TextInput
        value={textValue}
        onTextChange={(e) => onTextChange(e)}
        placeholder={"search across title or subtitle"}
        heading={"title / subtitle"}
      />
    </div>
  );
};

export default TitleOrSubtitleField;
