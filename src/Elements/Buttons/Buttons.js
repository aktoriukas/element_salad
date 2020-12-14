import React, { Component } from 'react';
import Standart from './Standart';

export default class Buttons extends Component {
    render() {
        return (
            <section>
                <h1 className='title'>{this.props.active.title}</h1>
                <ul className='elements-grid'>
                    <Standart />
                </ul>    
            </section>
        )
    }
}
