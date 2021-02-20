import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import Start from "./components/Start.jsx";


class App extends React.Component {
    constructor() {
        super();
        this.state = {
            activeItem: Start,
        }

        this.setActive = this.setActive.bind(this);
    }

    render() {
        return (
            <this.state.activeItem set_active={this.setActive}/>
        )
    }

    setActive(target) {
        this.setState({
            activeItem: target,
        })
    }
}

export default App;
