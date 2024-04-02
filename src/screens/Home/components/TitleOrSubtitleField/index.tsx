import React from "react";
import "./titleOrSubtitleField.css";
import TextInput from "../../../../components/TextInput";
const TitleOrSubtitleField = () => {
  return (
    <div className="container-main">
      <TextInput
        value={""}
        onTextChange={(e) => console.log(e.target.value)}
        placeholder={"search across title or subtitle"}
        heading={"title / subtitle"}
      />
    </div>
  );
};

export default TitleOrSubtitleField;
