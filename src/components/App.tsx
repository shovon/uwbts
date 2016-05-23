import * as React from 'react';
import { Component } from 'react';
import Navbar from './Navbar';
import LoginForm from './LoginForm';
import RegistrationForm from './RegistrationForm';
import { IState } from '../store';

export default class App extends Component<{ state: IState }, {}> {
  render() {
    console.log(this.props);
    return (
      <div>
        <Navbar />
      </div>
    );
  }
}
