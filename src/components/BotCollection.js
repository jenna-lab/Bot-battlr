import React from "react";
import BotCard from "./BotCard";

function BotCollection({ bots, handleOnClick }) {
  return <BotCard bots={bots} handleOnClick={handleOnClick} />;
}

export default BotCollection;
