import React, { Component } from 'react';
import Hello from './Hello';
import Funktion from './Funktion';
import Form from './Form';

class App extends Component {

  myCallback = (message) => {
    console.log("Hello from callback: " + message);
  }

  render() {
    return (
      <div>
          <h1>Hello APP</h1>
          <Hello myCallback={this.myCallback}/>
          <Funktion myCallback={this.myCallback}/>
          <Form />
      </div>
    );
  }
}

export default App;