import React, { useEffect, useState } from "react";
import * as style from "./History.module.css";
import { BiSolidCheckCircle } from "react-icons/bi";

const History = ({
  handleNewChatClick,
  uniqueTitles = [],
  activeChat,
  setActiveChat,
}) => {
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [active, setActive] = useState(false);

  const handleClick = (title, index) => {
    handleNewChatClick(title);
    setCurrentIndex(index);
    setActive(true);
    setActiveChat(false);
  };

  useEffect(() => {
    if (activeChat) {
      setCurrentIndex(-1);
      setActive(false);
    }
  });

  return (
    <nav className={style.history}>
      <ul>
        {uniqueTitles &&
          uniqueTitles.map((title, index) =>
            currentIndex === index ||
            (activeChat && index === uniqueTitles.length - 1) ? (
                <li
                  key={index}
                  aria-hidden="true"
                  className={style.active}
                  onClick={() => handleClick(title, index)}
                >
                  {title.slice(0, 20)}
                  <BiSolidCheckCircle />
                </li>
              ) : (
                <li
                  onClick={() => handleClick(title, index)}
                  key={index}
                  aria-hidden="true"
                  className={style.notActive}
                >
                  {title.slice(0, 20)}
                </li>
              )
          )}
      </ul>
    </nav>
  );
};

export default History;
