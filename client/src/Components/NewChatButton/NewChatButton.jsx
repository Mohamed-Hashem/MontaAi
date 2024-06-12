import React from "react";
import "./NewChatButton.css";
import { IoClose, IoTrashBinOutline } from "react-icons/io5";

const NewChatButton = ({
  createNewChat,
  toggleSidebar,
  isOpen,
  clearHistory,
}) => {
  return (
    <div className="sideToggle">
      <button
        onClick={clearHistory}
        className="clearHistory"
        title="Clear History"
      >
        <IoTrashBinOutline />
      </button>
      <button onClick={createNewChat} className="newChat" title="New Chat">
        + New Chat
      </button>
      {isOpen ? (
        <button className="toggleBtn" onClick={toggleSidebar}>
          <IoClose />
        </button>
      ) : (
        <button className="toggleBtn" onClick={toggleSidebar}>
          ☰
        </button>
      )}
    </div>
  );
};

export default NewChatButton;
