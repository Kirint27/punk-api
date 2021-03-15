import React from "react";

import { useState, useEffect } from "react";
import firebase, { provider } from "./firebase";

import Routes from "./containers/Routes";
import { navigate } from "@reach/router";

const App = () => {
  // state to keep track of the beers to be displayed
  const [beers, setBeers] = useState([]);
  // state to keep track of changes in the filter section
  const [name, setName] = useState();
  const [abv, setAbv] = useState(false);
  const [isClassic, setIsClassic] = useState(false);
  // state for user login
  const [user, setUser] = useState(null);

  // lifecycle effects
  useEffect(() => {
    getUser();
  }, []);

  useEffect(() => {
    filterBeers();
  }, [name, abv, isClassic]);

  const filterBeers = () => {
    const searchTermStr = name ? `&beer_name=${name}` : "";

    const abvQueryStr = abv ? `&abv_gt=6` : "";

    // general URL to get random beers
    const url = `https://api.punkapi.com/v2/beers?per_page=50${searchTermStr}${abvQueryStr}`;
    return fetch(url)
      .then((res) => res.json())
      .then((res) => {
        setBeers(res);
      });
  };

  // Authentification
  const signIn = () => {
    firebase.auth().signInWithRedirect(provider);
    navigate("api");
  };

  const signOut = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        setUser(null);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getUser = () => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
  };

  useEffect(() => {
    getUser();
  });

  return (
    <div className="App">
      <Routes
        signIn={signIn}
        signOut={signOut}
        user={user}
        beers={beers}
        filterBeers={filterBeers}
        setName={setName}
        setAbv={setAbv}
        abv={abv}
        name={name}
      />
    </div>
  );
};

export default App;
