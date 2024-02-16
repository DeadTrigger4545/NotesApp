import send_button from "../assets/send-button.png";

import { useState, useEffect } from "react";
import "./HomeLeft.css";
import "./MessageDropbox.css";

const MessageDropbox = ({ group }) => {
  const [messageInput, setMessageInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [isInputEmpty, setIsInputEmpty] = useState(true);

  useEffect(() => {
    if (group) {
      const storedMessages = localStorage.getItem(group.name);
      if (storedMessages) {
        setMessages(JSON.parse(storedMessages));
      } else {
        setMessages([]);
      }
    }
  }, [group]);

  const handleMessageChange = (e) => {
    setMessageInput(e.target.value);
    setIsInputEmpty(e.target.value.trim() === "");
  };

  const handleSendMessage = () => {
    if (messageInput.trim() !== "") {
      const newMessage = {
        id: Date.now(),
        text: messageInput,
        timestamp: new Date().toLocaleString(),
      };
      localStorage.setItem(
        group.name,
        JSON.stringify([...messages, newMessage])
      );
      setMessages([...messages, newMessage]);

      setMessageInput("");
      setIsInputEmpty(true);
    }
  };

  if (!group) {
    return <div>Loading...</div>;
  }

  return (
    <div className="message-dropbox">
      <div id="grp_div">
        <div className="groupname_circle" style={{ background: group.color }}>
          <h1 id="ini">{group.initials}</h1>
        </div>
        <h1 id="Dropboxgrp_name">{group.name}</h1>
      </div>

      <div className="message-display">
        {messages.map((message) => (
          <div key={message.id} className="message">
            <p>{message.text}</p>
            <span id="timestamp">{message.timestamp}</span>
          </div>
        ))}
      </div>

      <div className="message-input">
        <div className="message-input_innerbox">
          <input
            type="text"
            placeholder="Enter your text here..."
            value={messageInput}
            onChange={handleMessageChange}
          />
          <button
            onClick={handleSendMessage}
            disabled={isInputEmpty}
            className={isInputEmpty ? "disabled" : ""}
          >
            <img id="send_button" src={send_button} alt="send-button" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MessageDropbox;
