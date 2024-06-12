import React from "react";
import monta from "../../assets/monta.svg";
import Typewriter from "./TypeWriter";

const BotMessage = ({ chatMessage }) => {
  return (
    <>
      <div className="messageRole">
        <img width={34} height={34} src={monta} alt="Monta AI Assistant" />
      </div>
      <Typewriter text={chatMessage.content} />
    </>
  );
};

export default BotMessage;
