import * as React from 'react';
import { Component } from 'react';
import Navbar from './Navbar';
import LoginForm from './LoginForm';
import RegistrationForm from './RegistrationForm';
import { IState } from '../store';
import { Link } from 'react-router';

interface IAppProps {
  state: IState,
  location: Location
}

export default class App extends Component<IAppProps, {}> {
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
