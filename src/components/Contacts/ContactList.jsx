import React from 'react';
import PropTypes from 'prop-types';
import { Contact } from 'components/Contacts/';
import { ContactListStyled, ContactStyled } from 'components/Contacts/';

// import css from './Contacts.module.css';

export const ContactList = ({ contacts, onClick }) => {
  return (
    <ContactListStyled>
      {contacts.map(contact => (
        <ContactStyled key={contact.id}>
          <Contact contact={contact} onClick={onClick} />
        </ContactStyled>
      ))}
    </ContactListStyled>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  onClick: PropTypes.func.isRequired,
};
