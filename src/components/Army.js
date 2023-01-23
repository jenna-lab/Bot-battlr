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
    //handleclick functions
  const handleOnClick = (id) => {
    const bot = bots.find((bot) => bot.id === id);
    const armies = army.find((bot) => bot.id === id);

    armies ? alert("Bot exists in the list already") : setArmy([...army, bot]);
  };
  const handleClick = (id) => {
    const newArmy = army.filter((bot) => bot.id !== id);
    setArmy(newArmy);
  };
  return (
    <div>
      <YourBotArmy army={army} handleOnClick={handleClick} />
      <BotCollection bots={bots} handleOnClick={handleOnClick} />
    </div>
  );
};
export default   Army;
