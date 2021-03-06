import {
    makeAutoObservable,
} from "mobx";
import Start from "./components/Start.jsx";
import React from "react";


export default class ActiveComponent {
    activeComp = [];

    constructor() {
        makeAutoObservable(this);
    }

    setActiveComp(n) {
        // N should be a react component.
        this.activeComp = n;
    }
}