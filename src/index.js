import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ActiveComponent from "./ActiveComponent.js";
import Start from "./components/Start";


const ActiveComponentStore = new ActiveComponent();
ActiveComponentStore.activeComp = [
  Start,
  null,
  null,
];
export const ActiveCompContext = React.createContext(ActiveComponentStore);

ReactDOM.render(
  <React.StrictMode>
    <ActiveCompContext.Provider value={ActiveComponentStore}>
        <App />
    </ActiveCompContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
