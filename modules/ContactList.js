import React from 'react'
import ContactThumb from './ContactThumb'

export default class ContactList extends React.Component {
  render () {
    let contacts = this.props.contacts
    return (
      <div>
      {
        contacts.map((contact) => {
          return <ContactThumb key={contact.index} name={contact.name} phone={contact.phone} />
        })
      }
      </div>
    )
  }
}