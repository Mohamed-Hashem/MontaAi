import React, { useState, useEffect } from "react";

const TypeWriter = ({ text = "", speed = 50 }) => {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let currentIndex = 0;

    const intervalId = setInterval(() => {
      setDisplayedText((prev) => {
        if (currentIndex < text.length) {
          currentIndex += 1;
          return text.slice(0, currentIndex);
        } else {
          clearInterval(intervalId);
          return prev;
        }
      });
    }, speed);

    return () => clearInterval(intervalId);
  }, [text, speed]);

  return <p className="messageContent">{displayedText}</p>;
};

export default TypeWriter;
