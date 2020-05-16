import React from "react";
import logo from "./logo.svg";
import "./App.scss";
import Routes from "./Routes";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <section>{Routes}</section>
    </div>
  );
}

export default App;
