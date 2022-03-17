import React, { useState } from "react";
import "./App.css";
import mainPic from "./circle.png";
import ChatPage from "./ChatPage";

function App() {
  
  const [user, setUser] = useState("");
  const [click, setClick] = useState(false);

  const handleInputs = e => {
    setUser(e.target.value);
  };

  const [username, setUsername] = useState("");

  const SubmitForm = (e) => {
		e.preventDefault();
    if(user !== ""){ 
      setUsername(user);
      console.log('a '+username)
      setClick(true)
      console.log('b '+username)
    }else{
      alert("Please enter your name")
    }
    
	};

  
  return (
    <div className="App">
     {click ? (<ChatPage username={username} />):
      (<div className="container">
        <div className="leftText">
        <h1>
        Hi<br/> I’m Oussama<br/> & this is my chat app
        </h1>
        <p>
        Made with <span>React</span> & <span>GO</span>
        </p>
      </div>
      <div className="rightForm">
        <img alt='main_picture' src={mainPic} />
        <form className="pt-5" onSubmit={(e) => SubmitForm(e)}>
              <input
                  label="username"
                  name="username"
                  type="text"
                  placeholder="Enter your name"
                  value={user}
                  onChange={handleInputs}
              />
          <button type="submit">Go</button>
          </form>
      </div>
      </div>)
      }
    </div>
  );
  
}

export default App;