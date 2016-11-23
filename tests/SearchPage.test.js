import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';

import SearchPage from '../modules/SearchPage';

describe('Search page', function() {
  let wrapper;
  beforeEach(function() {
    const contacts = [
      {
        id: 0,
        name: 'Adam',
        phone: '01234567890'
      },
      {
        id: 1,
        name: 'Bob',
        phone: '01234567891'
      },
      {
        id: 2,
        name: 'Carl',
        phone: '01234567892'
      }
    ];
    wrapper = mount(<SearchPage {...{contacts}} />);
  })
  it('should render the page', function() {
    expect(wrapper.find('h2').html()).to.contain('Directory');
  });
  it('should list the contacts', function() {
    expect(wrapper.find('h3').first().html()).to.contain('Adam');
    expect(wrapper.find('h3').at(1).html()).to.contain('Bob');
  });

  describe('Searching feature', function() {
    beforeEach(function() {
      wrapper.setState({ searchString: 'a' });
    });
    it('should filter the contact list when the user types in the search box', function() {
      expect(wrapper.find('.ContactList').html()).to.contain('Adam');
      expect(wrapper.find('.ContactList').html()).to.not.contain('Bob');
      expect(wrapper.find('.ContactList').html()).to.contain('Carl');
    });
  });
});