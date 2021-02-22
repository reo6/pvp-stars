import React from "react";
import "./Game.css";
import {
    Container,
} from "react-bootstrap";
import SkillPoints from "./SkillPoints";

export default class Game extends React.Component {
    state = {
        stateSection: {
            "title": "Skill Point Distribution",
            "description": "Take power for getting ready to match!"
        },
        mainSection: SkillPoints,
    }

    render() {
        return (
            <>
            <div className="container-fluid text-center">    
                <div className="row content">
                    <div className="col-sm-2 sidenav">
                        {/* Player Section */}
                        
                    </div>

                    <div className="col-sm-8 text-left state-section"> 
                        {/* Center */}
                        <h1 className="stick-font display-4">{this.state.stateSection.title}</h1>
                        <p>{this.state.stateSection.description}</p>
                        <hr />
                        <this.state.mainSection/>
                    </div>

                    <div className="col-sm-2 sidenav">
                        {/* Enemy Section */}

                    </div>
                </div>
            </div>

            </>
        )
    }
}