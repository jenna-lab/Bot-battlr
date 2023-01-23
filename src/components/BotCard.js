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
                <img
                src={bot.avatar_url}
                className="card-img-top"
                alt={bot.name}
              ></img>
               <div className="card-body">
                <h5 className="card-title">{bot.name}</h5>
                <p className="card-text">{bot.catchphrase}</p>
              </div>