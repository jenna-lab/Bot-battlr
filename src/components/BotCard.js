import React from "react";
const BotCard = ({ bots, handleOnClick }) => {
    return (
        <div className="ui four column grid">
        <div className="row">
          {bots.map((bot, index) => {
            return (
              // passing details about all the bots
              <div
                className="card col-2 p-0 m-3 "
                key={bot.id}
                onClick={() => handleOnClick(bot.id)}
              >