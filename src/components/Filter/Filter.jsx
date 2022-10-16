import React from 'react';
import './Filter.scss';

export const Filter = ({ value, onChange }) => (
  <label className="Filter__label">
    Фильтр по имени
    <input
      className="Filter__input"
      type="text"
      value={value}
      onChange={onChange}
    />
  </label>
);
