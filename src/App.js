import React from "react";
import logo from "./logo.svg";
import correo from "./correo.png";
import "./App.css";

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
      </header>
      <div className='content'>
        <p>
          For more information about your product please contact us at{" "}
          <img src={correo} className='correo' />
        </p>
      </div>
    </div>
  );
}

export default App;
