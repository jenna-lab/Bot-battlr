import React from "react";
const YourBotArmy = ({ army, handleOnClick }) => {
    return (
         //mapping pver the data for the bots
    <div className="ui four column grid">
    <div className="row">
      {army.map((bot, index) => {
        return (
          <div
            className="card col-2 p-0 m-3 "
            key={bot.id}
            onClick={() => handleOnClick(bot.id)}
          >