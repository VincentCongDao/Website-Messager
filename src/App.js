import React, {useState, useEffect} from 'react';

// Tailwind CSS
import { Button, FormControl, InputLabel, Input } from '@material-ui/core';

// CSS
import './App.css';

// Components
import Messagedisplay from './components/message/messagedisplay';

function App() {
  
const [inputs, setInput] = useState('');
const [message, sendMessages] = useState([]);
const [username, setUsername] = useState('');


useEffect(() => {
  setUsername(prompt("What would you like your username like to be?"))
}, []);
const sendMessage = (event) =>
{
  // All logic for send message will be under here
  event.preventDefault();
  sendMessages([...message, {username: username, text: inputs}]);
  setInput('');
}
  return (
    <div className="App">
      <h1>Hello Let's Create Messenger</h1>
      <h4>Hi, {username}</h4>
      {/* Header */}

      {/* Main */}
      {/* Send Mesasge Field */}
      <form className="type-input">
            <div className="input-value">
                <FormControl>
                  <InputLabel>Enter Your Message</InputLabel>
                  <Input value={inputs} className="input-message" 
                  onChange={event => 
                    setInput(event.target.value)} />
                  <Button className="submit-button" variant="contained" color="primary" disabled={!inputs} type="submit" onClick={sendMessage}>Send Message</Button>
                </FormControl>
            </div>
        </form>
        {
              message.map(m => (
            <Messagedisplay username={username} m={m}/>
                ))
        }

    </div>
  );
}

export default App;
