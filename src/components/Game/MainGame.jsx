import React from "react";

export default class MainGame extends React.Component {
    constructor(props) {
        super(props);

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