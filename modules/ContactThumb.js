import React from 'react'
import { Link } from 'react-router'

export default class ContactThumb extends React.Component {
  render() {
    return (
      <div>
        <h3><Link to={`/${this.props.name}`}>{this.props.name}</Link></h3>
        <p>Tel: {this.props.phone}</p>
      </div>
    )
  }
}