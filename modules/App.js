import React from 'react'
import ContactList from './ContactList'

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
          <ContactList contacts={this.state.contacts} />
        </div>
      )
    } else {
      return (
        <div>Loading...</div>
      )
    }
  }
}
