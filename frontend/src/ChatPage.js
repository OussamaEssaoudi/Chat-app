import React, { useState, useEffect } from "react";
import "./App.css";
import { connect, sendMsg } from "./api";
import Header from './Components/Header/Header';
import Discussion from './Components/Discussion/Discussion';
import ChatInput from './Components/ChatInput/ChatInput';

function ChatPage(props) {
  
  const [discussion, setDiscussion] = useState([]);

  useEffect(() => {
      connect((msg) => {
        console.log("New Message")
        setDiscussion([...discussion, msg]);
        console.log(Discussion);
      });
  });


  const send=(event) => {
    if(event.keyCode === 13) {
      sendMsg(props.username + " : " +event.target.value);
      event.target.value = "";
    }
    console.log('this'+ props.username)
  }

  
  return (
    <div className="ChatPage">
      <Header />
      <Discussion chatHistory={discussion} username={props.username} />
      <ChatInput send={send} />
    </div>
  );
  
}

export default ChatPage;