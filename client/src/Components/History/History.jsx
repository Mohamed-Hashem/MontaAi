import React, { useState } from "react";
import * as style from "./History.module.css";

const History = ({ handleNewChatClick, uniqueTitles }) => {
  return (
    <nav className={style.history}>
      <ul>
        {uniqueTitles &&
          uniqueTitles.map((title, index) => (
            <li
              onClick={() => handleNewChatClick(title)}
              key={index}
              aria-hidden="true"
            >
              {title}
            </li>
          ))}
      </ul>
    </nav>
  );
};

export default History;
