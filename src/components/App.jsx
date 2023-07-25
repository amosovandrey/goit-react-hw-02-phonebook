import css from './App.module.css';

import React, { Component } from 'react';

import { nanoid } from 'nanoid';

class App extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
  };

  id = nanoid();

  handleInputChange = evt => {
    const { name, value } = evt.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    const { name, number } = this.state;

    const newContact = {
      id: nanoid(),
      name: name,
      number: number,
    };

    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));

    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };
  render() {
    const { name, contacts } = this.state;
    return (
      <div className={css.wrapper}>
        <div className={css.container}>
          <h2 className={css.title}>Phonebook</h2>
          <form className={css.form} onSubmit={this.handleSubmit} action="">
            <label className={css.label} htmlFor={this.id}>
              Name:
              <input
                className={css.input}
                value={this.state.name}
                onChange={this.handleInputChange}
                id={name}
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([ '-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
              />
            </label>
            <label className={css.label} htmlFor={this.id}>
              Number:
              <input
                className={css.input}
                value={this.state.number}
                onChange={this.handleInputChange}
                id={name}
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?.{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
              />
            </label>
            <button className={css.button} type="submit">
              Add contact
            </button>
          </form>
        </div>
        <div className={css.container}>
          <h2 className={css.title}>Contacts</h2>
          <ul className={css.list}>
            {contacts.map(contact => (
              <li className={css.list__item} key={contact.id}>
                <span>{contact.name}:</span>
                <span className={css.list__item__number}>{contact.number}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
