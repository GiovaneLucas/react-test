import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person'
import FormContainer from './Containers/FormContainer'

class App extends Component {
  state = {
    textoMacaco: '!!!'
  };

  changeTextHandler = (evt) => {

    this.setState({
      textoMacaco: evt.target.value
    });

  };

  clickHandler = () => {
    this.setState({ textoMacaco: 'macaco clicado' });
  };
  render() {
    
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
        </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
        </a>
          <input type="text" value={this.state.inputValue} onChange={this.changeTextHandler} />
          <button onClick={this.clickHandler}>botão maroto</button>
          <Person cor="preto"></Person>
          <Person cor="amarelo"></Person>
          <Person cor="verde">{this.state.textoMacaco}</Person>

        </header>
        <content>

          <div className="col-md-6">
            <h3> Sample Form Container </h3>
            <FormContainer />
          </div>

        </content>
      </div>
    );
  }
}

export default App;
