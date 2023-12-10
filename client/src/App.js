import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    axios.get('http://localhost:5000/api')
      .then(res => {
        console.log(res.data); // Check the response data
        setMessage(JSON.stringify(res.data, null, 2)); // Convert to a string for display
      })
      .catch(err => console.log(err));
  }, []);

 
  
  
  return (
    <div className="App">
      <h2>Test</h2>
      <pre>
        <code>
          {message}
        </code>
      </pre>
    </div>
  );
}


export default App;
