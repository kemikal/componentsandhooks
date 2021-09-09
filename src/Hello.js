import React, { Component } from 'react';
import World from './World';

class Hello extends Component {

    render() {
        return (
            <div>
                <h2>Hello</h2>
                <World myCallback={this.props.myCallback}/>
            </div>
        );
    }
}

export default Hello;