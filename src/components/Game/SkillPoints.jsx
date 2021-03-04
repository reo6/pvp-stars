import React from "react";
import {
    Col,
    Row,
    Button,
    Alert,
} from "react-bootstrap";
import MainGame from "./MainGame";

const SKILL_POINTS = {
    "Strength": 0,
    "Magic": 0,
    "Agility": 0,
    "Defence": 0,
    "Accuracy": 0,
    "Attack": 0,
    "Health": 0,
};

const SPS_NUMBER = 10;

function SkillPoint(props) {    
    return (
        <Col className="">
            <Row>
                {props.sp_name}:
                <Button variant="dark" className="number-button" onClick={props.decrease}>-</Button>
                <strong>{props.sp_value}</strong>
                <Button variant="dark" className="number-button" onClick={props.increase}>+</Button>
            </Row>
        </Col>
    )
}

export default class SkillPoints extends React.Component {
    state = {
        "sps": SKILL_POINTS,
        "spsNumber": SPS_NUMBER,
        "showAlert": false,
    }

    constructor() {
        super();
        this.change_sps = this.change_sps.bind(this);
        this.done = this.done.bind(this);
    }

    render() {
        let sps = this.state.sps;
        let setstate = this.setState;
        let change_sps = this.change_sps;

        return (
            <Col>
                <Alert
                    show={this.state.showAlert}
                    variant="dark"
                    dismissible
                    onClose={() => this.setState({showAlert: false})}
                >
                    Oops, you should to spend all of your
                    skill points!
                </Alert>

                {Object.keys(sps).map(function (k){return (
                    <SkillPoint key={k} sp_value={sps[k]} sp_name={k} increase={() => change_sps(k, true)} decrease={() => change_sps(k, false)}/>
                )})}

                Remaining Skill Point: {this.state.spsNumber} <br/>
                
                <Button variant='dark' onClick={this.done}>Done</Button>
            </Col>
        )
    }

    change_sps(key, n) {
        let copy = this.state.sps;
        let copy_n = this.state.spsNumber;


        if(n) {
            if(!((copy_n-1) < 0)) {
                copy[key] = this.state.sps[key] + 1;
                copy_n -= 1;
                console.log("added 1")
            }
        } else {
            if(!((this.state.sps[key]-1) < 0)) {
                copy[key] = this.state.sps[key] - 1;
                console.log("removed 1")
                copy_n += 1;
            }
        }

        if(copy[key] < 0) {
            return;
        }

        this.setState({
            "sps": copy,
            "spsNumber": copy_n,
        });
        console.log(this.state);
    }

    done() {
        if(this.state.spsNumber !== 0) {
            this.setState({
                showAlert: true,
            })
        } else {
            this.props.setMainSection((
                <MainGame sps={this.state.sps}/>
            ));
        }
    }
}