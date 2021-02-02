import React from "react";
import styles from './SearchBar.module.scss';


const SearchBar = (props) => {
  const { setName, filterBeers, name } = props;

  return (
    <section className={styles.searchBar}>
      <h2>Search beer by name:</h2>
      <input
        type="text"
        onInput ={(e) => {
        setName(e.target.value);
         filterBeers(name);
        }
      }
      

      />
    </section>
  );
};
export default SearchBar;