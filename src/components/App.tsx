import * as React from 'react';
import { Component } from 'react';
import Navbar from './Navbar';
import LoginForm from './LoginForm';
import RegistrationForm from './RegistrationForm';
import { IState } from '../store';
import { Link } from 'react-router';

export default class App extends Component<{ state: IState }, {}> {
  render() {
    return (
      <div>
        <Navbar />
        <Link to='something'>Something</Link>
        {this.props.children}
      </div>
    );
  }
}
