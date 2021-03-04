import styled from 'styled-components';
import React from 'react';

const Container = styled.div.attrs(props => ({
    txtColor: props.txtColor,
    mainColor: props.mainColor,
}))`

    width: auto;
    height: auto;
    margin: auto;
    position: relative;
    color: ${props => props.txtColor || props.theme.txtColor || '#ffffff'};;
    &:after{
        content: '';
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        bottom: -5px;
        background-color: ${props => props.mainColor || props.theme.mainColor || '#535353'};
        z-index: 1;
        border-radius: 50%;
        filter: blur(2px);
        animation: shadow 2s infinite ease-in-out;
    }
    @keyframes shadow{
        0%{
            width:5%;
            height: 4px;
        }
        50%{
            width: 90%;
            height: 2px;
        }
        100%{
            width:5%;
            height: 4px;
        }
    }
`
const Button = styled.button.attrs(props => ({
    mainColor: props.mainColor,
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
    background: ${props => props.mainColor || props.theme.mainColor || '#535353'};
    box-shadow: 0 0 5px #000000;
    border-radius: 10px;
    z-index: 2;
    border:none;
    font-size: ${props => props.fontSize || props.theme.fontSize || '1.4rem'};
    font-family: ${props => props.fontFamily || props.theme.fontFamily || 'monospace'};
    bottom: 0;
    animation: jump 2s infinite ease-in-out;
    &:focus{ 
        outline: none;
    }
    &:active{
        background-color: ${props => props.activeColor || props.theme.activeColor || '#ffffff57'};
    }
    @keyframes jump{
        0%{bottom: 0}
        50%{bottom: 10px}
        100%{bottom: 0}
    }
`


export default function Hover({ txt, activeColor, fontFamily, fontSize, mainColor, txtColor }) {

    return (
        <Container
            txtColor={txtColor}
            mainColor={mainColor}>

            <Button
                mainColor={mainColor}
                fontFamily={fontFamily}
                fontSize={fontSize}
                activeColor={activeColor}>
                {txt}
            </Button>

        </Container>
    )
}
