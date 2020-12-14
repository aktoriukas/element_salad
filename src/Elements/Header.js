import React, { Component } from 'react';
import Database from '../Database';
import Button from './Button';

export default class Header extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            dropDown: false
        }
        this.openDropdown = this.openDropdown.bind(this)
        this.closeDropdown = this.closeDropdown.bind(this)
        this.changeView = this.changeView.bind(this)
    }
    openDropdown() {
        this.setState({
            dropDown: true
        })
    }
    closeDropdown() {
        this.setState({
            dropDown: false
        })
    }
    changeView(element) {
        this.props.changeView(element)
        this.closeDropdown()
    }
    render() {

        let dropdown = this.state.dropDown === false ? 'menu closed' : 'menu open';

        return (
            <header id='header'>
                <div className='name'>Kratinys</div>
                <div 
                    className='dropdown'
                >
                    <label>
                        <button onClick={this.openDropdown}>
                        ---V----
                        </button>
                    </label>
                    <ul 
                        className={dropdown}
                    >
                    {Database.elements.map((element) => (
                        <Button
                            key={element.id}
                            element={element}
                            changeView={this.changeView}
                        />
                    ))}
                        <li>
                            <button onClick={this.closeDropdown}>
                            ----X----
                            </button>
                        </li>
                    </ul>
                </div>
            </header>
        )
    }
}
