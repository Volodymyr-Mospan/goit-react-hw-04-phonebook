import React, { useEffect, useRef, useState } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm, ContactList, Filter } from 'components/Contacts/';
import { StyledApp } from 'components/App.styled';

export const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  const isStartApp = useRef(true);

  useEffect(() => {
    if (isStartApp.current) {
      const localeStorageContacts = localStorage.getItem('contacts');
      if (localeStorageContacts) {
        setContacts(JSON.parse(localeStorageContacts));
      }
      isStartApp.current = false;
      return;
    }

    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = contact => {
    const { name, number } = contact;
    setContacts([{ id: nanoid(10), name, number }, ...contacts]);
  };

  const checkingContacts = name => {
    return contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
  };

  const deleteContact = contactId => {
    setContacts(contacts.filter(contact => contact.id !== contactId));
  };

  const handleFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const getFilteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(
      contact =>
        contact.name.toLowerCase().includes(normalizedFilter) ||
        contact.number.toLowerCase().includes(normalizedFilter)
    );
  };

  return (
    <StyledApp
    // style={
    //   {
    //     // alignItems: 'center',
    //     // fontSize: 20,
    //     // color: '#010101',
    //   }
    // }
    >
      <div className={'container'}>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={addContact} onCheck={checkingContacts} />
      </div>

      <div className={'container'}>
        <h2>Contacts</h2>
        <Filter filter={filter} onChange={handleFilter} />
        <ContactList contacts={getFilteredContacts()} onClick={deleteContact} />
      </div>
    </StyledApp>
  );
};
