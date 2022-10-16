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
    console.log(data);
    this.setState(({ contacts }) => ({ contacts: [todo, ...contacts] }));
    console.log(this.state);
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleTodos = () => {
    const { filter, contacts } = this.state;
    console.log('line 30 ~ App ~ contacts', contacts);
    const normalizedFilter = filter.toLowerCase();

    const onFilter = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
    console.log('line 35 ~ App ~ onFilter', onFilter);
    return onFilter;
  };

  render() {
    const visibleTodos = this.getVisibleTodos();
    return (
      <Wrapper className="Reviews">
        <Section title={'Phonebook'}>
          <ContactForm onSubmit={this.formSubmitHandler} />
        </Section>
        <Section title={'Contacts'}>
          <Filter value={this.state.filter} onChange={this.changeFilter} />
          <ContactList
            contacts={visibleTodos}
            onContactsCompleted={this.state.contacts}
          />
        </Section>
      </Wrapper>
    );
  }
}
