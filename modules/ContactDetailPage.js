import React from 'react';
import { IndexLink } from 'react-router';

export default class ContactDetail extends React.Component {
  constructor() {
    super();
    this.state = {
      contact: {}
    }
  }
  componentWillMount() {
    const contactId = this.props.params.id;
    fetch(`https://radbook-1e5ca.firebaseio.com/contacts/${contactId}.json`)
      .then(function(response) {
        if (response.status === 200) {
          return response.json();
        } else {
          return false;
        }
      }).then(function (j) {
        this.setState({contact: j});
      }.bind(this)).catch(function() {
        this.setState({ contact: false });
      }.bind(this));
  }
  render() {
    const contact = this.state.contact;
    if (this.state.contact) {
      if (Object.keys(this.state.contact).length) {
        return (
          <div>
            <h2>{contact.name}</h2>
            <p>Welcome to the detail page for {contact.name}.</p>
            <p>{contact.name}'s phone number is {contact.phone}.</p>
          </div>
        )
      } else {
        return (
          <div>Loading...</div>
        )
      }
    } else {
      return (
        <div>
          <h2>Contact not found</h2>
          <p>Why not try <IndexLink to="/">searching the directory</IndexLink>?</p>
        </div>
      )
    }
  }
}