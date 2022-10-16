import React, { Component } from 'react';
import { Wrapper } from './App.styled';
import { ContactList } from './ContactList/ContactList';
import { ContactForm } from './ContactForm/ContactForm';
import { nanoid } from 'nanoid/non-secure';
import { Section } from './Section/Section';
import { Filter } from './Filter/Filter';
import contacts from '../data/contacts.json';
// const id = nanoid(); //=> "Uakgb_J5m9g-0JDMbcJqLJ"

export class App extends Component {
  state = {
    contacts: contacts,
    filter: '',
  };

  formSubmitHandler = data => {
    const { contacts } = this.state;

    if (contacts.find(({ name }) => name === data.name))
      return alert(`${data.name} is alredy in contacts`);

    const todo = { id: nanoid(), ...data };

    this.setState(({ contacts }) => ({ contacts: [todo, ...contacts] }));
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  addFilterContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  deleteContacts = contactsId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactsId),
    }));
  };

  render() {
    const visibleTodos = this.addFilterContacts();
    return (
      <Wrapper className="Reviews">
        <Section title={'Phonebook'}>
          <ContactForm onSubmit={this.formSubmitHandler} />
        </Section>

        <Section title={'Contacts'}>
          <Filter value={this.state.filter} onChange={this.changeFilter} />

          <ContactList
            contacts={visibleTodos}
            onContactsDelete={this.deleteContacts}
          />
        </Section>
      </Wrapper>
    );
  }
}
