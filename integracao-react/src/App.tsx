import React, { Component } from 'react';
import './App.css';
import ContadorValor from './componentes/ContadorValor';

class App extends Component{
  render() {
    return (
      <div className="App">
        <ContadorValor contador={111}/>
      </div>
    );
  }
}



export default App;

/*
function App() {
  return (
    <div className="App">
      
    </div>
  );
}
*/
