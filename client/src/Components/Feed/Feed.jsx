import Message from "../Message/Message";
import "./Feed.css";

const Feed = ({ chatTitles, inputMessage }) => {
  return (
    <ul className="feed">
      {chatTitles &&
        chatTitles.map((chatMessage, index) => (
          <Message
            key={index}
            chatMessage={chatMessage}
            inputMessage={inputMessage}
          />
        ))}
    </ul>
  );
};

export default Feed;
