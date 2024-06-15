import React, { useState } from "react";
import NewChatButton from "../NewChatButton/NewChatButton";
import History from "../History/History";
import CopyRight from "../CopyRight/CopyRight";
import "./SideBar.css";

const SideBar = React.memo(function SideBar({
  handleNewChatClick,
  newChat,
  uniqueTitles,
  clearHistory,
  activeChat,
  setActiveChat,
}) {
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
        HistoryCopyRight={
          <>
            <History
              handleNewChatClick={handleNewChatClick}
              uniqueTitles={uniqueTitles}
              activeChat={activeChat}
              setActiveChat={setActiveChat}
            />
            <CopyRight />
          </>
        }
      />
    </aside>
  );
});

export default SideBar;
