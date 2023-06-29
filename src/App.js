import React, { useState } from "react";
import CardNetworkSelection from "./components/CardNetworkSelection";
import "./App.css";

const App = () => {
  const [netrwork, setNetwork] = useState("");
  const [networkFromHook, setNetworkFromHook] = useState("");

  const onRadioButtonChange = (val) => {
    setNetwork(val);
  };

  const onRadioButtonChangeFromHook = (val) => {
    setNetworkFromHook(val);
  };

  const onClickDo = () => {
    console.log("with value from event:"+netrwork);
    console.log("with value from hook:"+networkFromHook);//prints previous value --clojure effect
  };
  return (
    <div className="centered">
      <h1>Banking Card Network Selection</h1>
      <CardNetworkSelection onRadioChange={onRadioButtonChange} onRadioChangeFromHook={onRadioButtonChangeFromHook}/>
      <button onClick={onClickDo}>LOG</button>
    </div>
  );
};

export default App;
