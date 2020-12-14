import React, { Component } from 'react'

export default class Home extends Component {
    render() {
        return (
            <section>
                <h1 className='title'>{this.props.active.title}</h1>
            </section>
        )
    }
}
