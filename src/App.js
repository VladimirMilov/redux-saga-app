import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from './logo.svg';
import './App.css';
import {simpleAction} from './actions/index';

class App extends Component {
  onSimpleAction = () => {
    console.log('button was clicked!')
    this.props.simpleAction();
   }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <pre>
          {
            JSON.stringify(this.props)
          }
        </pre>
        <button onClick={this.onSimpleAction}>Special button</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state
 })

const mapDispatchToProps = dispatch => ({
  simpleAction: () => dispatch(simpleAction())
 });


export default connect(mapStateToProps, mapDispatchToProps)(App);
