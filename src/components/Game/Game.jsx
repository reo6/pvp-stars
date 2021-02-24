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
        playerSection: (<></>),
        enemySection: (<></>),
    }

    render() {
        return (
            <>
            <div className="container-fluid text-center">    
                <div className="row content">
                    <div className="col-sm-2 sidenav">
                        {/* Player Section */}
                        {this.state.playerSection}
                    </div>

                    <div className="col-sm-8 text-left"> 
                        {/* Center */}

                        <div className="state-section">
                            <h1 className="stick-font display-4">{this.state.stateSection.title}</h1>
                            <p>{this.state.stateSection.description}</p>
                            <hr />
                        </div>
                        <this.state.mainSection
                            setEnemySection={(v) => this.setState({enemySection: v})}
                            setPlayerSection={(v) => this.setState({playerSection: v})}
                            setMainSection={(v) => this.setState({mainSection: v})}
                        />

                    </div>

                    <div className="col-sm-2 sidenav">
                        {/* Enemy Section */}
                        {this.state.enemySection}
                    </div>
                </div>
            </div>

            </>
        )
    }
}