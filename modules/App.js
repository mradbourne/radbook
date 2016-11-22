import React from 'react'
import { IndexLink } from 'react-router'

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      contacts: []
    }
  }
  componentWillMount() {
    fetch('https://radbook-1e5ca.firebaseio.com/contacts.json').then(function(response) { 
      return response.json()
    }).then(function(j) {
      this.setState({contacts: j})
    }.bind(this))
  }
  render() {
    if (this.state.contacts.length) {
      return (
        <div>
          <h1><IndexLink to="/">Phone book</IndexLink></h1>
          {React.cloneElement(this.props.children, { contacts: this.state.contacts })}
        </div>
      )
    } else {
      return (
        <div>Loading...</div>
      )
    }
  }
}
