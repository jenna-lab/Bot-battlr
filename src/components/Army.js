import React, { useState, useEffect } from "react";
import BotCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy";

const Army = () => {
    const [bots, setBots] = useState([]);
    const [army, setArmy] = useState([]);
  //prevent page from reloading
    useEffect(() => {
      fetch("http://localhost:8001/bots")
        .then((resp) => resp.json())
        .then((data) => setBots(data))
        .catch((err) => console.log(err));
    }, []);