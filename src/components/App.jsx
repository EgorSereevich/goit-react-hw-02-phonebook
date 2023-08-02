import React from 'react';
import { Component } from 'react';
import { FormPhonebook } from './FormPhonebook/FormPhonebook';
import { ContactsList } from './Contacts/Contacts';
class App extends Component {
  state = {
    contacts: [],
    name: '',
  };
  addContact = evt => {
    evt.preventDefault();
    console.log(evt.target.elements.name.value);
  };
  render() {
    return (
      <div>
        <FormPhonebook addContact={this.addContact} />
        <ContactsList />
      </div>
    );
  }
}
export { App };
