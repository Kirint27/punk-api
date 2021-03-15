import React from "react";
import styles from "./Dashboard.module.scss";
import SideBar from "../../components/SideBar";
import CardList from "../../components/CardList";
import NavBar from "../../components/NavBar";
import firebase from "../../firebase";

const DashBoard = (props) => {
  const { filterBeers, beers, signOut, setName, setAbv, abv, name } = props;

  return (
    <div className={styles.dashboard}>
      <NavBar signOut={signOut} />
      <SideBar
        filterBeers={filterBeers}
        setName={setName}
        setAbv={setAbv}
        abv={abv}
        name={name}
      />
      <CardList beers={beers} />
    </div>
  );
};

export default DashBoard;
