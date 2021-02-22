import React from "react";
import {
    Col,
    Row,
} from "react-bootstrap";

function SkillPoint(props) {
    const increase = function() {}
    const decrease = function() {}
    
    return (
        <Col>
            <Row>
                <button type="button" className='minus'>-</button>
                {props.sp_value}
                <button type="button" className='plus'>+</button>
            </Row>
        </Col>
    )
}

export default class SkillPoints extends React.Component {
    state = {
        
    }
    render() {
        return (
            <>
            Skill Points!
            </>
        )
    }
}