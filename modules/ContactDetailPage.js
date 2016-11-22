import React from 'react'

export default class ContactDetail extends React.Component {
  render() {
    const contact = this.props.contacts.filter((item) => {
      return item.id == this.props.params.id
    })[0]

    return (
      <div>
        <h2>{contact.name}</h2>
        <p>Welcome to the detail page for {contact.name}.</p>
        <p>{contact.name}'s phone number is {contact.phone}.</p>
      </div>
    )
  }
}