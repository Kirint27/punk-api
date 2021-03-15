import React from "react";
import { Router } from "@reach/router";
import Dashboard from "../Dashboard";
import SignIn from "../SignIn";

const Routes = (props) => {
  const {
    signIn,
    signOut,
    user,
    filterBeers,
    beers,
    setName,
    setAbv,
    abv,
    name,
  } = props;

  return (
    <Router>
      <Dashboard
        path="api"
        signOut={signOut}
        user={user}
        filterBeers={filterBeers}
        setName={setName}
        setAbv={setAbv}
        beers={beers}
        abv={abv}
        name={name}
      />

      <SignIn path="/" signIn={signIn} />
    </Router>
  );
};

export default Routes;
