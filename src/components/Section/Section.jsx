import React from 'react';

import css from './Section.module.css';

const Section = ({ title, children }) => (
  <div className={css.container}>
    <h2 className={css.title}>{title}</h2>
    {children}
  </div>
);

export default Section;
