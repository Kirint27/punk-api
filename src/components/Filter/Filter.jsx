import React, { useState } from "react";
import styles from "./Filter.module.scss";

const Filter = (props) => {
  const { filterBeers, setAbv, abv} = props;

  return (
    <form>
      <input
        type="checkbox"
        id="abv"
        value="abv_gt"
        onChange={() => {
          filterBeers(!abv);
          setAbv(!abv);
        }}
      />
      <label htmlFor="abv"> Alcohol content ({">"}6.0%) </label>
      
    </form>
  );
};

export default Filter;
