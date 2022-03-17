import React, { Component } from "react";
import "./Discussion.scss";
import Message from "../Message/Message";


function Discussion(props) {
  
  console.log(props.chatHistory);
  const messages = props.chatHistory.map(msg => <Message message={msg.data} />);
  
  return (
    <div className='ChatHistory'>
      <h2>Discussion</h2>
      {messages}
    </div>
  );
  
}


export default Discussion;