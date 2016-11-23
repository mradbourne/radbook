import React from 'react';
import ContactList from './ContactList';

export default class ContactListLayout extends React.Component {
  constructor() {
    super();
    this.state = {
      searchString: '',
      contacts: []
    }
  }
  _handleChange(e) {
    this.setState({ searchString: e.target.value });
  }
  _handleSubmit(e) {
    e.preventDefault();
    this.setState({ searchString: this.searchBox.value });
  }
  componentWillMount() {
    fetch('https://radbook-1e5ca.firebaseio.com/contacts.json')
      .then(function(response) {
        if (response.status === 200) {
          return response.json();
        } else {
          return false;
        }
      }).then(function (j) {
        this.setState({contacts: j});
      }.bind(this)).catch(function() {
        this.setState({contacts: false});
      }.bind(this));
  }

  render() {
    if (this.state.contacts) {
      if (this.state.contacts.length) {
        let searchString = this.state.searchString;
        let latestMatches = this.state.contacts.filter((match) => {
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
      } else {
        return (
          <div>Loading...</div>
        )
      }
    } else {
      return <p>There seems to be a problem connecting with the database :/</p>
    }
  }
}