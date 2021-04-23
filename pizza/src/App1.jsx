import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Head from './Head';
import Customize from "./Customize";
import Checkout from "./Checkout";

function App1() {
  const [ingredients, setIngredients] = useState({
    basil: false,
    cheese: false,
    mushroom: false,
    olive: false,
    pineapple: false,
    tomato: false,
  });

  useEffect(() => {
    const data = localStorage.getItem("ingredients");
    if (data) {
      setIngredients(JSON.parse(data));
    }
  }, []);

  return (
    <div>
      <Head />
      <Router>
        <Switch>
          <Route exact path="/">
            <Customize
              ingredients={ingredients}
              setIngredients={setIngredients}
            />
          </Route>
          <Route path="/checkout">
            <Checkout ingredients={ingredients} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App1;
