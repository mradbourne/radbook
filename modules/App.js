import React from 'react'
import ContactListLayout from './ContactListLayout'

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      contacts: []
    }
  }
  componentWillMount() {
    let that = this;
    fetch('https://radbook-1e5ca.firebaseio.com/contacts.json').then(function(response) { 
      return response.json();
    }).then(function(j) {
      that.setState({contacts: j});
    });
  }
  render() {
    if (this.state.contacts[0]) {
      return (
        <div>
          <h1>Phone book</h1>
          {this.props.children}
        </div>
      )
    } else {
      return (
        <div>Loading...</div>
      )
    }
  }
}
