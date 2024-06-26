import React from "react";
import { IoArrowUpCircle } from "react-icons/io5";
import * as style from "./InputContainer.module.css";

const InputContainer = React.memo(function InputContainer({
  inputMessage,
  handleTextChange,
  handleKeyDown,
  textAreaRef,
  getMessage,
}) {
  return (
    <div className={style.inputContainer}>
      <textarea
        placeholder="Type a prompt"
        value={inputMessage}
        onChange={handleTextChange}
        onKeyDown={handleKeyDown}
        ref={textAreaRef}
        rows={1}
      />
      {inputMessage && (
        <button className={style.submit} onClick={getMessage}>
          <IoArrowUpCircle />
        </button>
      )}
    </div>
  );
});

export default InputContainer;
