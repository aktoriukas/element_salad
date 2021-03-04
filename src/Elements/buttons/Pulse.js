import styled from 'styled-components';
import React from 'react';

const Container = styled.div.attrs(props => ({
    secondColor: props.secondColor
}))`

    width: fit-content;
    height: fit-content;
    margin: auto;
    position: relative;
    color: #ffff;
    &:after{
        content: '';
        position: absolute;
        width:100%;
        height: 100%;
        left: 0;
        top: 0;
        background-color: ${props => props.secondColor || props.theme.secondColor || '#A0A0A0'};
        z-index: 0;
        transform: scale(0);
    }
    &:hover:after{animation: pulse 1s ease-in-out infinite;}
    
    @keyframes pulse {
        0% { 
            transform: scale(0); 
            opacity: 0;
        }
        25%{
            opacity: .5;
            transform: scale(1); 
        }
        50%{
            opacity: 1;
        }
        100%{
            transform: scale(2); 
            opacity: 0;
        }
}
`
const Button = styled.button.attrs(props => ({
    txtColor: props.txtColor,
    mainColor: props.mainColor,
    fontSize: props.fontSize,
    fontFamily: props.fontFamily
}))`

    position: relative;
    color: ${props => props.txtColor || props.theme.txtColor || '#ffffff'};
    background: ${props => props.mainColor || props.theme.mainColor || '#535353'};
    width: 100%;
    height: 100%;
    border-radius: 10px;
    padding: .75rem 1rem;
    cursor: pointer;
    z-index: 20;
    box-shadow: 0 0 5px #000000;
    border:none;
    font-size: ${props => props.fontSize || props.theme.fontSize || '1.4rem'};
    font-family: ${props => props.fontFamily || props.theme.fontFamily || 'monospace'};
    &:focus{ outline: none;}
    &:active{bottom: -1px;}
`


export default function Pulse({ txt, fontFamily, fontSize, txtColor, mainColor, secondColor }) {

    return (
        <Container
            secondColor={secondColor}>

            <Button
                fontFamily={fontFamily}
                fontSize={fontSize}
                txtColor={txtColor}
                mainColor={mainColor}>
                {txt}
            </Button>

        </Container>
    )
}