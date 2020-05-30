import React, { useState, useEffect } from 'react';

import Nav from './components/Nav'
import Todo from './components/Todo'

function App () {
 
const [APIRes, setAPIRes] = useState("")

  async function fetchData() { 
    const res =  await fetch("http://localhost:9000/todoAPI");
    const data = await res.json();
    setAPIRes(data)
  }

  useEffect(() => {
    fetchData();
  }, [])
  
      return (
        <div className="App container-fluid">
          <Nav />
          <Todo />
        </div>
      );
}

export default App;
