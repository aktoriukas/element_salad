import React, { Component } from 'react';
import Header from "./Elements/Header";
import Database from './Database';

import Home from './Elements/Home';
import Dropdown from './Elements/Dropdown/Dropdown';
import Buttons from './Elements/Buttons/Buttons';
import Icons from './Elements/Icons/Icons';

export default class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      active: {
        title: 'Home',
        name: 'home'
      }
    }
    this.changeView = this.changeView.bind(this)
  }
  changeView (element) {
    this.setState({
      active: element
    })
  }
  
  render() {
    let content;

    switch (this.state.active.name) {
      case'home':
        content = <Home active={this.state.active}/>
        break;
      case'buttons':
        content = <Buttons active={this.state.active}/>
        break;
      case'dropdown':
        content = <Dropdown active={this.state.active}/>
        break;
      case'icons':
        content = <Icons active={this.state.active}/>
        break;
    }

    return (

      <div>
        <Header
          database={Database}
          changeView={this.changeView}
        />
        <section className={`main-content ${this.state.active.name}`}>
          {content}
        </section>
      </div>
    )
  }
}