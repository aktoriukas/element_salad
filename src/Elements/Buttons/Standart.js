import React, { Component } from 'react'

export default class Standart extends Component {
    render() {
        const style = {
            background: 'black',
            padding: '15px',
            paddingTop: '8px',
            paddingBottom: '10px',
            color: 'red'
        }
        let code= [];
        for( let param in style) {
            code.push(<p key={param}>{param} : {style[param]}</p>)
        }
        return (
            <div className='element'>
                <div className='display'>
                    <button style={style}>Press me</button>
                </div>
                <div className='code'>
                    {code}
                </div>
            </div>
        )
    }
}
