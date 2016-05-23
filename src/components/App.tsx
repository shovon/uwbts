import * as React from 'react';
import { Component } from 'react';
import Navbar from './Navbar';
import LoginForm from './LoginForm';
import RegistrationForm from './RegistrationForm';
import { IState } from '../store';

class App extends Component<IState, {}> {
  render() {
    return (
      <div>
        <Navbar />
        <RegistrationForm />
      </div>
    );
  }
}

export default App;
