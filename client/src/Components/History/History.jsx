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

  const handleClick = (title, index) => {
    handleNewChatClick(title);
    setCurrentIndex(index);
    setActiveChat(false);
  };

  useEffect(() => {
    if (activeChat) {
      setCurrentIndex(-1);
    }
  }, [activeChat, setCurrentIndex]);

  return (
    <nav className={style.history}>
      <ul>
        {uniqueTitles &&
          uniqueTitles.map((title, index) => {
            const isActive =
              currentIndex === index ||
              (activeChat && index === uniqueTitles.length - 1);
            return (
              <li
                key={index}
                aria-hidden="true"
                className={isActive ? style.active : ""}
                onClick={() => handleClick(title, index)}
              >
                {title.slice(0, 20)}
                {isActive && <BiSolidCheckCircle />}
              </li>
            );
          })}
      </ul>
    </nav>
  );
};

export default History;
