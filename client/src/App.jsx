import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import "./App.css";
import SideBar from "./Components/SideBar/SideBar";
import Feed from "./Components/Feed/Feed";
import BusinessInfo from "./Components/BusinessInfo/BusinessInfo";
import InputContainer from "./Components/InputContainer/InputContainer";
import Header from "./Components/Header/Header";

const App = () => {
  const [previousChats, setPreviousChats] = useState([]);
  const [inputMessage, setInputMessage] = useState("");
  const [chatTitle, setChatTitle] = useState("");
  const [prompt, setPrompt] = useState("");
  const textAreaRef = useRef(null);
  const [activeChat, setActiveChat] = useState(false);

  const getMessage = async () => {
    if (inputMessage.length === 0) return;

    await axios
      .post("http://localhost:4000/completions", {
        message: inputMessage,
      })
      .then(({ data }) => {
        setPrompt(data.message);
        resetDom();
      })
      .catch((error) => {
        console.error("Error ==> ", error);
        alert("Something wrong in connection, Please try again ...");
      });
  };

  const autoResize = (textarea) => {
    if (textarea.value.length > 256) {
      textarea.style.overflowY = "scroll";
      textarea.style.height = "120px";
    } else {
      textarea.style.overflowY = "hidden";
      textarea.style.height = textarea.scrollHeight + "px";
    }
  };

  const resetDom = () => {
    textAreaRef.current.style.height = "44px";

    setTimeout(() => {
      setInputMessage(""); // Clear the text area
    }, 100);
  };

  const handleTextChange = (event) => {
    setInputMessage(event.target.value);
    autoResize(event.target);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault(); // Prevent newline
      getMessage(); // Call the submit function
    }
  };

  useEffect(() => {
    autoResize(textAreaRef.current);
  }, [inputMessage]);

  useEffect(() => {
    if (!chatTitle && inputMessage && prompt) {
      setChatTitle(inputMessage);
      setActiveChat(true);
    }

    if (chatTitle && inputMessage && prompt) {
      const newChat = [
        ...previousChats,
        {
          title: chatTitle,
          role: "user",
          content: inputMessage,
        },
        {
          title: chatTitle,
          role: prompt.role,
          content: prompt.content,
        },
      ];

      localStorage.setItem("chats", JSON.stringify(newChat));
      setPreviousChats(newChat);
    }
  }, [prompt, chatTitle]);

  useEffect(() => {
    const savedChats = JSON.parse(localStorage.getItem("chats")) || [];
    setPreviousChats(savedChats);
  }, []);

  const createNewChat = () => {
    setChatTitle("");
    setPrompt("");
    setInputMessage("");
  };

  const handleNewChatClick = (uniqueTitle) => {
    setChatTitle(uniqueTitle);
    setPrompt("");
    resetDom();
  };

  const clearHistory = () => {
    setPreviousChats([]);
    localStorage.removeItem("chats");
  };

  const currentChatTitles = previousChats.filter((prevChat) => prevChat.title === chatTitle);

  const uniqueTitles = Array.from(new Set(previousChats.map((prevChat) => prevChat.title)));

  return (
    <main id="app">
      <Header />
      <SideBar
        clearHistory={clearHistory}
        handleNewChatClick={handleNewChatClick}
        newChat={createNewChat}
        uniqueTitles={uniqueTitles}
        activeChat={activeChat}
        setActiveChat={setActiveChat}
      />
      <section id="content">
        <Feed chatTitles={currentChatTitles} inputMessage={inputMessage} />
        <div id="bottom-content">
          <InputContainer
            inputMessage={inputMessage}
            handleTextChange={handleTextChange}
            handleKeyDown={handleKeyDown}
            textAreaRef={textAreaRef}
            getMessage={getMessage}
          />
          <BusinessInfo />
        </div>
      </section>
    </main>
  );
};

export default App;
