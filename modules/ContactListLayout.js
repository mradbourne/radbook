import React from 'react'
import ContactList from './ContactList'

export default class ContactListLayout extends React.Component {
  render() {
    return <ContactList contacts={this.props.contacts} />
  }
}