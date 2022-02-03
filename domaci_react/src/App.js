import React from "react";
import "./App.css";
import WishForm from "./components/WishForm";
import WishList from "./components/WishList";

function App() {

  return (
    <div className="App">
      <header>
        <h1>Predrag's New year's bucket list</h1>
      </header>
      <WishForm />
      <WishList/>
    </div>
  );
}

export default App;