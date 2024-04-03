import React, { memo, useContext, useEffect, useState } from "react";
import Drawer from "../../../../components/Drawer";
import { IAddNewCreativeDrawerProps } from "./types";
import TextInput from "../../../../components/TextInput";
import styles from "./addNewCreativeDrawer.module.css";
import Button from "../../../../components/Button";
import { CreativeContext, ICreative } from "../../creativeContext";
import CreativeCard from "../CreativeCard";
import ColorsView from "../ColorsView";

const AddNewCreativeDrawer: React.FC<IAddNewCreativeDrawerProps> = ({
  drawerRef,
  doneHandler,
}) => {
  const colors = useContext(CreativeContext)?.colors;

  const [state, setState] = useState({
    title: "",
    subTitle: "",
    backgroundColor: "",
    isDisabled: true,
  });

  useEffect(() => {
    const { title, subTitle, backgroundColor } = state;
    const trimmedTitle = title.trim();
    const trimmedSubTitle = subTitle.trim();
    const isDisabled = !(trimmedTitle && trimmedSubTitle && backgroundColor);
    setState((prevState) => ({ ...prevState, isDisabled }));
  }, [state.title, state.subTitle, state.backgroundColor]);

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState((prevState) => ({ ...prevState, title: e.target.value }));
  };

  const handleSubTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState((prevState) => ({ ...prevState, subTitle: e.target.value }));
  };

  const handleColorSelection = (color: string) => {
    setState((prevState) => ({ ...prevState, backgroundColor: color }));
  };

  const donePressHandler = () => {
    doneHandler({
      title: state.title,
      subtitle: state.subTitle,
      backgroundColor: state.backgroundColor,
    });
    setState({
      title: "",
      subTitle: "",
      backgroundColor: "",
      isDisabled: true,
    });
  };

  return (
    <Drawer ref={drawerRef}>
      <TextInput
        value={state.title}
        onTextChange={handleTitleChange}
        placeholder="Please enter a title"
        heading="Title"
      />
      <div className={styles.titleSec}>
        <TextInput
          value={state.subTitle}
          onTextChange={handleSubTitleChange}
          placeholder="Please enter a sub title"
          heading="Subtitle"
        />
      </div>
      <div className={styles.titleSec}>
        <ColorsView
          onSelectColor={(color) => handleColorSelection(color)}
          title={"Background color"}
        />
      </div>
      <div className={styles.titleSec}>
        <Button
          onClick={donePressHandler}
          isDisabled={state.isDisabled}
          title="Done"
        />
      </div>
    </Drawer>
  );
};

export default memo(AddNewCreativeDrawer);
