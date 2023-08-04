import { number } from 'prop-types';
import React from 'react';

export const ContactsList = ({contacts}) => {
  return (
    <div>
      <h1>Contacts</h1>
      <ul>
        {contacts.map(contact => {
          return (
            <li key={contact.id}>{contact.name}:{contact.number}</li>
          )
          
        })}
      </ul>
    </div>
  );
};
