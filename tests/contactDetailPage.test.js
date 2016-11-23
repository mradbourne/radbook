import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';

import ContactDetailPage from '../modules/ContactDetailPage';

describe('Contact details page (contact view)', function() {
  let wrapper;
  beforeEach(function() {
    const contacts = [{
      id: 0,
      name: 'Adam',
      phone: '01234567890'
    }];
    wrapper = shallow(<ContactDetailPage {...{contacts, params: { id: 0 }}} />);
  })
  it('should display the page when records are found', function() {
    expect(wrapper.find('p').first().html()).to.contain('Welcome to the detail page');
  });
  it('should return the contact`s name', function() {
    expect(wrapper.find('h2').html()).to.contain('Adam');
  });
});

describe('Contact details page (contact not found view)', function() {
  it('should display the page when records are not found', function() {
    const contacts = [];
    let wrapper = shallow(<ContactDetailPage {...{contacts, params: { id: 0 }}} />);
    expect(wrapper.find('h2').html()).to.contain('Contact not found');
  });
});