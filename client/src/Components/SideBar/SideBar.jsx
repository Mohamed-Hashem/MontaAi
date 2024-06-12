import React, { useState } from "react";
import NewChatButton from "../NewChatButton/NewChatButton";
import History from "../History/History";
import CopyRight from "../CopyRight/CopyRight";
import "./SideBar.css";

const SideBar = ({
  handleNewChatClick,
  newChat,
  uniqueTitles,
  clearHistory,
}) => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <aside className={`${isOpen ? "open" : "close"}`}>
      <NewChatButton
        clearHistory={clearHistory}
        createNewChat={newChat}
        toggleSidebar={toggleSidebar}
        isOpen={isOpen}
      />
      <History
        handleNewChatClick={handleNewChatClick}
        uniqueTitles={uniqueTitles}
      />
      <CopyRight />
    </aside>
  );
};

export default SideBar;
