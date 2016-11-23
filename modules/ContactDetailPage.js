import React from 'react';
import { IndexLink } from 'react-router';

export default class ContactDetail extends React.Component {
  render() {
    const contactsFound = this.props.contacts.filter((item) => {
      return item.id == this.props.params.id;
    });
    const contact = (contactsFound.length) ? contactsFound[0] : false;

    if (contact) {
      return (
        <div>
          <h2>{contact.name}</h2>
          <p>Welcome to the detail page for {contact.name}.</p>
          <p>{contact.name}'s phone number is {contact.phone}.</p>
        </div>
      )
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