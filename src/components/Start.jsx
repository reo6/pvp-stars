import React from "react";
import {
    Form,
    Button,
    Container,
} from "react-bootstrap";
import "../App.css";
import Game from "./Game/Game";
import {
    ActiveCompContext,
} from "../index.js";


export default class Start extends React.Component {
    state = {
        nickname: "",
        invalid: false,
    }
    
    render() {
        return (
            <div className="App">
                <main className="App-main">
                    <h1 className="stick-font display-3">Welcome to PvP Stars!</h1>
                    <p className="display-5">Just type your nickname to start playing!</p>
                    <small>Warning: Don't reload page while playing.</small>

                    <Container>
                        <Form>
                            <Form.Group>
                                <Form.Control type="text"
                                    placeholder="Nickname"
                                    className="centered"
                                    value={this.state.nickname}
                                    onChange={(e) => this.nicknameChanged(e.target.value)}
                                    isInvalid={this.state.invalid}
                                />
                                <Button variant="dark" type="button" onClick={this.submitForm}>
                                    Let's Gooo!
                                </Button>
                            </Form.Group>
                        </Form>


                    </Container>
                </main>
            </div>
        );
    }

    nicknameChanged(v) {
        this.setState({
            nickname: v
        })
    }

    submitForm() {
        if(this.state.nickname === "") {
            this.setState({
                invalid: true,
            })
        } else {
            this.context.setActiveComp(
                <Game nickname={this.state.nickname}/>
            );
        }
    }

}

Start.contextType = ActiveCompContext;