import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm, ContactList, Filter } from 'components/Contacts/';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const localeStorageContacts = localStorage.getItem('contacts');

    if (localeStorageContacts)
      this.setState({ contacts: JSON.parse(localeStorageContacts) });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  addContact = contact => {
    const { name, number } = contact;
    this.setState(prevState => ({
      contacts: [
        { id: nanoid(10), name: name, number: number },
        ...prevState.contacts,
      ],
    }));
  };

  checkingContacts = name => {
    return this.state.contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  handleFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getFilteredContacts = () => {
    const { contacts, filter } = this.state;

    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(
      contact =>
        contact.name.toLowerCase().includes(normalizedFilter) ||
        contact.number.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    const { filter } = this.state;

    return (
      <div
        style={{
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <div className={'container'}>
          <h1>Phonebook</h1>
          <ContactForm
            onSubmit={this.addContact}
            onCheck={this.checkingContacts}
          />
        </div>

        <div className={'container'}>
          <h2>Contacts</h2>
          <Filter filter={filter} onChange={this.handleFilter} />
          <ContactList
            contacts={this.getFilteredContacts()}
            onClick={this.deleteContact}
          />
        </div>
      </div>
    );
  }
}
