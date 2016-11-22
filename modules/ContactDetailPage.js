import React from 'react'

export default class ContactDetail extends React.Component {
  render() {
    return (
      <div>
        <h2>{this.props.params['contactName']}</h2>
        <p>Welcome to the detail page for someone</p>
      </div>
    )
  }
}