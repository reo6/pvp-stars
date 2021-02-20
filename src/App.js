import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Form,
    Button,
} from "react-bootstrap";
import React from "react";

function App() {
  return (
    <div className="App">
        <main className="AppHeader">
            <h1 className="stick-font display-3">Welcome to PvP Game!</h1>
            <p>Just type your nickname to start playing!</p>
        </main>
    </div>
  );
}

export default App;
