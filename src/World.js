import React, { Component } from 'react';
import Form from './Form';

class World extends Component {

    onClick = () => {
        console.log("Klick från World!");
        this.props.myCallback("Hej från World!")
    }

    render() {
        return (
            <div>
                <h3>World</h3>
                <button onClick={this.onClick}>Kalla på callback</button>
                <Form title={"Gå och sov"}/>
            </div>
        );
    }
}

export default World;