import React from 'react';

import css from './ContactList.module.css';

const ContactList = ({ contacts }) => (
  <ul className={css.list}>
    {contacts.map(contact => (
      <li className={css.list__item} key={contact.id}>
        <span>{contact.name}:</span>
        <span className={css.list__item__number}>{contact.number}</span>
      </li>
    ))}
  </ul>
);

export default ContactList;
