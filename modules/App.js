import React from 'react';
import { IndexLink } from 'react-router';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <h1><IndexLink to="/">Phone book</IndexLink></h1>
        {this.props.children}
      </div>
    )
  }
}
