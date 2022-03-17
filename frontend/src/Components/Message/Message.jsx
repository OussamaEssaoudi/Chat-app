import React, { useState } from "react";
import "./Message.scss";

function Message(props) {
  
  
  let temp = JSON.parse(props.message);
  const [message, setMessage] = useState(temp);

  
    return (
    <div className="Message">
      {message.body}
    </div>
    );
  
}

export default Message;