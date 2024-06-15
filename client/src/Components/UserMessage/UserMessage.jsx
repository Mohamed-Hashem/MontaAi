import React from "react";
import { FaUserTie } from "react-icons/fa";

const UserMessage = React.memo(function UserMessage({ chatMessage }) {
  return (
    <>
      <p className="messageContent">{chatMessage.content}</p>
      <p className="messageRole">
        <FaUserTie fontSize={18} />
      </p>
    </>
  );
});

export default UserMessage;
