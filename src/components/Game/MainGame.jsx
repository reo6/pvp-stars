import React from "react";
import Player from "../../game/Player";
import Game from "../../game/Game";

export default class MainGame extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        };

        this.player1 = new Player("")

        this.props.setStateSection({
            "title": "You are Attacking!",
            "description": "Choose an attack type!"
        })
    }

    render() {
        return (
            <>
                Choose your attack style here!
            </>
        )
    }
}