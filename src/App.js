import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React from "react";
import {
    ActiveCompContext
} from "./index";
import {
    observer,
} from "mobx-react-lite";
import { toJS } from "mobx";


function App() {
    return (
        <ActiveCompContext.Consumer>
            {function(value) {
                return React.createElement.apply(null, value.activeComp);
            }}
        </ActiveCompContext.Consumer>
    )
}


export default observer(App);
