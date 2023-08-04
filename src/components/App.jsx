import React from 'react';
import { Component } from 'react';
import { FormPhonebook } from './FormPhonebook/FormPhonebook';
import { ContactsList } from './Contacts/Contacts';
class App extends Component {
  state = {
    contacts: [ {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},],
    name: '',
  };
  // addContact = (evt, state) => {
  //   this.setState(prevState => {
  //     console.log(state.contacts);
  //     return {
  //       [state.contacts]: evt.target.elements.name.value,
        
  //     };
  //   });
  // };
  render() {
    return (
      <div>
        <FormPhonebook addContact={this.addContact} />
        <ContactsList contacts={this.state.contacts} />
      </div>
    );
  }
}
export { App };
