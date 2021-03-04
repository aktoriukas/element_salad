import styled from 'styled-components';
import React from 'react';


const Button = styled.button.attrs(props => ({
    mainColor: props.mainColor,
    fontSize: props.fontSize,
    fontFamily: props.fontFamily,
    txtColor: props.txtColor,
    mainColor: props.mainColor,
}))`
    font-family: ${props => props.fontFamily || props.theme.fontFamily || 'monospace'};
    font-size: ${props => props.fontSize || props.theme.fontSize || '1.4rem'};
    background: none;
    border: 0.175em solid ${props => props.mainColor || props.theme.mainColor || '#535353'};
    padding: 1.4em 3.3em;
    color: ${props => props.mainColor || props.theme.mainColor || '#535353'};
    text-transform: uppercase;
    letter-spacing: 0.25em;
    border-radius: 0.5em;
    cursor: pointer;
    border-color: ${props => props.mainColor || props.theme.mainColor || '#535353'};
    margin: auto;
    box-shadow:  0 0 0 0 ${props => props.mainColor || props.theme.mainColor || '#535353'}, inset 0 0 0 0 ${props => props.mainColor || props.theme.mainColor || '#535353'};
    transition: box-shadow 300ms ease-in-out, color 300ms ease-in-out;
  &:focus {
    outline: none;
  }
  &:hover {
    color: ${props => props.txtColor || props.theme.txtColor || '#ffffff'};;
    box-shadow: 0 0 40px 0 ${props => props.mainColor || props.theme.mainColor || '#535353'}, inset 0 0 200px 5px ${props => props.mainColor || props.theme.mainColor || '#535353'};
  }
`



export default function GlowInv({ txtColor, txt, mainColor, secondColor, fontSize, fontFamily }) {

    return (

        <Button
            txtColor={txtColor}
            mainColor={mainColor}
            secondColor={secondColor}
            fontSize={fontSize}
            fontFamily={fontFamily}>
            {txt}

        </Button>
    )
} 