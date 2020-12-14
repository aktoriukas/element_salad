// import React from 'react';

class Database  {

    constructor(props) {
    
        this.state = {
        }
    }
    get elements () {
        return [
            {id: 0, title: 'Home', name: 'home'},
            {id: 1, title: 'Buttons', name: 'buttons'},
            {id: 2, title: 'Icons', name: 'icons'},
            {id: 3, title: 'Dropdown', name: 'dropdown'}
        ]
    }
}

export default new Database ();