import React from 'react';

import css from './Filter.module.css';

const Filter = ({ value, onChange }) => (
  <label className={css.label} htmlFor="">
    Find contacts by name
    <input
      type="text"
      className={css.input}
      value={value}
      onChange={onChange}
    />
  </label>
);

export default Filter;
