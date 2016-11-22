import React from 'react'
import ContactList from './ContactList'

export default class ContactListLayout extends React.Component {
  constructor() {
    super()
    this.state = {
      searchString: ''
    }
  }
  _handleChange(e) {
    this.setState({ searchString: e.target.value })
  }
  _handleSubmit(e) {
    e.preventDefault();
    this.setState({ searchString: this.searchBox.value })
    console.log(this.state.searchString);
  }
  render() {
    let searchString = this.state.searchString;
    let latestMatches = this.props.contacts.filter((match) => {
      return match.name.toLowerCase().match(searchString);
    });
    return (
      <div>
        <h2>Directory</h2>
        <form onSubmit={this._handleSubmit.bind(this)}>
          <input type="text" placeholder="Search for contacts" ref={(input) => this.searchBox = input} value={this.state.searchString} onChange={this._handleChange.bind(this)} />
          <button type="submit" ref="submitBtn">Search</button>
        </form>
        <ContactList contacts={latestMatches} />
      </div>
    )
  }
}