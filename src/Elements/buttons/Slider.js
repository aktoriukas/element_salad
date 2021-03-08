import styled from 'styled-components';
import React from 'react';

const Container = styled.div.attrs(props => ({
    mainColor: props.mainColor,
    txtColor: props.txtColor,
    secondColor: props.secondColor
}))`

    width: auto;
    height: auto;
    margin: auto;
    background: ${props => props.mainColor || props.theme.mainColor || '#535353'};
    position: relative;
    box-shadow: 0 0 5px #000000;
    overflow: hidden;
    color: ${props => props.txtColor || props.theme.txtColor || '#ffffff'};;
    border-radius: 10px;
    &:after{
        content: '';
        position: absolute;
        width:100%;
        height: 100%;
        left: -100%;
        top: 0;
        background-color: ${props => props.secondColor || props.theme.secondColor || '#A0A0A0'};
        z-index: 1;
        opacity: 0;
        transition: left .5s ease, opacity .7s ease;
    }
    &:hover:after{
        opacity: 1;
        left: 0;
    }
`
const Button = styled.button.attrs(props => ({
    fontSize: props.fontSize,
    fontFamily: props.fontFamily,
    activeColor: props.activeColor
}))`

    position: relative;
    color: inherit;
    width: 100%;
    height: 100%;
    padding: .75rem 1rem;
    cursor: pointer;
    background: transparent;
    z-index: 2;
    border:none;
    font-size: ${props => props.fontSize || props.theme.fontSize || '1.4rem'};
    font-family: ${props => props.fontFamily || props.theme.fontFamily || 'monospace'};
    &:focus{ 
        outline: none;
    }
    &:active{
        background-color: ${props => props.activeColor || props.theme.activeColor || '#ffffff57'};
    }
`
export default function Slider({ txt, activeColor, fontFamily, fontSize, secondColor, mainColor, txtColor }) {

    return (
        <Container
            txtColor={txtColor}
            secondColor={secondColor}
            mainColor={mainColor}>

            <Button
                fontSize={fontSize}
                fontFamily={fontFamily}
                activeColor={activeColor}>
                {txt}
            </Button>
        </Container>
    )
}