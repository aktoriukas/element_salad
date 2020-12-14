import React, { Component } from 'react'

export default class Button extends Component {
    render() {
        return (
            <li>
                <button
                    onClick={() => this.props.changeView(this.props.element)}
                >
                    {this.props.element.title}
                </button>
            </li>
        )
    }
}

