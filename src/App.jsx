import React from "react";
import GlobalStyles from "./components/GlobalStyles";
import Home from "./pages/Home";
import { Route } from "react-router-dom";
import Nav from "./components/Nav";
function App() {
  return (
    <div>
      <GlobalStyles />
      <Nav />
      <Route path={["/anime/:id", "/"]}>
        <Home />
      </Route>
    </div>
  );
}

export default App;
