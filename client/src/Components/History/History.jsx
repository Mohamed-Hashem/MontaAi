import React, { useState } from "react";
import * as style from "./History.module.css";

const History = ({ handleNewChatClick, uniqueTitles = [] }) => {
  const [active, setActive] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClick = (title, index) => {
    setActive(!active);
    handleNewChatClick(title);
    setCurrentIndex(index);
  };

  return (
    <nav className={style.history}>
      <ul>
        {uniqueTitles &&
          uniqueTitles.map((title, index) =>
            currentIndex === index ? (
              <li key={index} aria-hidden="true" className={style.active}>
                {title}
              </li>
            ) : (
              <li
                onClick={() => handleClick(title, index)}
                key={index}
                aria-hidden="true"
              >
                {title}
              </li>
            )
          )}
      </ul>
    </nav>
  );
};

export default History;
