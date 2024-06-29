import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSearch } from '../../redux/filters/slice.js';
import { selectFilter } from '/src/redux/filters/selectors.js';
import { useId } from 'react';
import css from './SearchBox.module.css';

export default function SearchBox() {
  const id = useId();
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  return (
    <div className={css.wrapper}>
      <label className={css.label} htmlFor={id}>
        Find contacts by name
      </label>
      <input
        className={css.filterInput}
        type="text"
        value={filter}
        onChange={e => dispatch(setSearch(e.target.value))}
        placeholder="Search..."
        id={id}
      />
    </div>
  );
}
