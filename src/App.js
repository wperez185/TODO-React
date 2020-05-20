import React from 'react';

import Nav from './components/Nav'
import Todo from './components/Todo'

class App extends React.Component {
  
  
  render() {

      return (
        <div className="App container-fluid">
          <Nav />
          <Todo />
        </div>
      );
  }

}

export default App;
