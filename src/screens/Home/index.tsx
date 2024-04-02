import React from "react";
import { ColorsContext, colors } from "./types";
import Header from "./components/Header";
import ProgressBar from "../../components/ProgressBar";
import Button from "../../components/Button";

const Home = () => {
  return (
    <ColorsContext.Provider value={colors}>
      <Header />
      <ProgressBar currentProgress={4} totalValue={5} />
      <Button
        title="+ Add Creative"
        onClick={() => alert("hello")}
        isDisabled={false}
      />
    </ColorsContext.Provider>
  );
};

export default Home;
