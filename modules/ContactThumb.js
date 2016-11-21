import React from 'react'


export default class ContactThumb extends React.Component {
  render() {
    return (
      <div>
        <h2>{this.props.name}</h2>
        <h3>{this.props.phone}</h3>
      </div>
    )
  }
}