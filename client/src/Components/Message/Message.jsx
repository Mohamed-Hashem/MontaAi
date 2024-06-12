import React, { useEffect, useRef } from "react";
import UserMessage from "../UserMessage/UserMessage";
import BotMessage from "../BotMessage/BotMessage";

const Message = ({ chatMessage, inputMessage }) => {
  const endRef = useRef(null);

  useEffect(() => {
    if (endRef.current) {
      endRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [inputMessage]);

  return (
    <li
      className={`${chatMessage.role === "user" ? "user" : "bot typewriter"}`}
    >
      {chatMessage.role === "user" ? (
        <UserMessage chatMessage={chatMessage} />
      ) : (
        <BotMessage chatMessage={chatMessage} />
      )}

      <div ref={endRef}></div>
    </li>
  );
};

export default Message;
