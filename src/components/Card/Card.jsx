import React from "react";
import styles from './Card.module.scss';

const Card = (props) => {
  const {beer} = props;

  return (
    <div className={styles.card}>
      <img src={beer.image_url} alt="beer" />
      <h1>{beer.name}</h1>
      <p className={styles.tagline}>{beer.tagline}</p>
      <div>
        <p>Alcohol content: {beer.abv}</p>
        <p>First brewed: {beer.first_brewed}</p>
        
      </div>

    </div>
  );
};

export default Card;