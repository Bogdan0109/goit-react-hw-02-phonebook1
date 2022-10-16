import React, { Component } from 'react';
import { Wrapper } from './App.styled';
import { Contacts } from './Contacts/Contacts';
import { Form } from './Form/Form';
import { nanoid } from 'nanoid/non-secure';
import { Section } from './Section/Section';
// const id = nanoid(); //=> "Uakgb_J5m9g-0JDMbcJqLJ"

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  formSubmitHandler = data => {
    const todo = { id: nanoid(), ...data };
    console.log(data);
    this.setState(({ contacts }) => ({ contacts: [todo, ...contacts] }));
    console.log(this.state);
  };

  render() {
    return (
      <Wrapper className="Reviews">
        <Section title={'Phonebook'}>
          <Form onSubmit={this.formSubmitHandler} />
        </Section>
        <Section title={'Contacts'}>
          <Contacts contacts={this.state.contacts} />
        </Section>
      </Wrapper>
    );
  }
}
