import React, { useEffect, useRef, useState } from "react";
import { colors, maxCreative } from "./types";
import Header from "./components/Header";
import ProgressBar from "../../components/ProgressBar";
import Button from "../../components/Button";
import AddNewCreativeDrawer from "./components/AddNewCreativeDrawer";
import { IDrawerMethods } from "../../components/Drawer/types";
import { CreativeContext, ICreative } from "./creativeContext";
import CreativeCard from "./components/CreativeCard";
import styles from "./home.module.css";
import { log } from "console";
const Home = () => {
  const drawerRef = useRef<IDrawerMethods | null>(null);
  const [globalCreative, updateGlobalCreative] = useState<ICreative[]>([]);
  const [creatives, updateCreatives] = useState<ICreative[]>([]);

  useEffect(() => {
    updateCreatives(globalCreative);
  }, [globalCreative]);

  // on add creative
  const onButtonPress = () => {
    if (creatives.length + 1 <= 5) {
      drawerRef.current?.handleDrawerState(true);
    } else {
      alert("You can add a maximum of 5 creatives");
    }
  };

  //filterByColor
  const filterCreativesByColor = (color: string) => {
    let filteredCreatives = globalCreative.filter(
      (creative) => creative.backgroundColor === color
    );
    updateCreatives(filteredCreatives);
  };

  //filterByTitleOrSubtitle
  const filterCreativesByTitleOrSubtitle = (text: string) => {
    let filteredCreatives = globalCreative.filter(
      (creative) =>
        creative.title.toLowerCase().includes(text.toLowerCase()) ||
        creative.subtitle.toLowerCase().includes(text.toLowerCase())
    );
    updateCreatives(filteredCreatives);
  };

  //add new creative
  const addNewCreative = (creative: ICreative) => {
    if (creatives.length + 1 <= 5) {
      updateGlobalCreative((prev) => {
        let prevArray = [...prev];
        prevArray.unshift(creative);
        return prevArray;
      });
      drawerRef.current?.handleDrawerState(false);
    } else {
      alert("You can add a maximum of 5 creatives");
    }
  };

  //close drawer
  const closeDrawer = () => {
    drawerRef.current?.handleDrawerState(false);
  };

  return (
    <CreativeContext.Provider
      value={{ colors: colors, creatives: globalCreative }}
    >
      <Header
        getSelectedColor={(color) => filterCreativesByColor(color)}
        getFilterText={(text) => filterCreativesByTitleOrSubtitle(text)}
      />
      <ProgressBar
        currentProgress={globalCreative.length}
        totalValue={maxCreative}
      />
      <div className={styles.button}>
        <Button
          title="+ Add Creative"
          onClick={onButtonPress}
          isDisabled={false}
        />
      </div>
      <AddNewCreativeDrawer
        drawerRef={drawerRef}
        onClick={closeDrawer}
        doneHandler={addNewCreative}
      />
      <div className={styles.creativeContainer}>
        {creatives.map((creative) => (
          <CreativeCard {...creative} />
        ))}
      </div>
    </CreativeContext.Provider>
  );
};

export default Home;
