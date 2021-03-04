import styled from 'styled-components';
import React from 'react';

const Container = styled.div.attrs(props => ({
    mainColor: props.mainColor
}))`

    width: fit-content;
    height: fit-content;
    margin: auto;
    background: transparent;
    position: relative;
    color: #ffff;
    overflow: hidden;
    letter-spacing: 1px;
    &:after,
    &:before{
        content: '';
        position: absolute;
        transform: translateX(-50%);
        left: 50%;
        width:0;
        height: 2px;
        transform: translateX(-50%);
        background-color: ${props => props.mainColor || props.theme.mainColor || '#535353'};
        z-index: 1;
        transition: all .5s ease-in-out;
    }
    &:after{
        top: 0;
    }
    &:before{
        bottom: 0;
    }
    &:hover{
        letter-spacing: 10px;
        &::after,
        &:before{
            width: 100%;
        }
    }
`
const Button = styled.button.attrs(props => ({
    txtColor: props.txtColor,
    fontSize: props.fontSize,
    fontFamily: props.fontFamily
}))`

    position: relative;
    color: ${props => props.txtColor || props.theme.txtColor || '#ffffff'};;
    width: 100%;
    height: 100%;
    padding: .75rem 1rem;
    cursor: pointer;
    background: transparent;
    z-index: 2;
    border:none;
    font-size: ${props => props.fontSize || props.theme.fontSize || '1.4rem'};
    font-family: ${props => props.fontFamily || props.theme.fontFamily2 || 'sans-serif'};
    letter-spacing: inherit;
    transition: all .75s ease-in-out;
    &:focus{ 
        outline: none;
    }
    &:active{
        letter-spacing: 7px;
    }
`


export default function Expand({ txt, fontFamily, fontSize, txtColor, mainColor }) {

    return (
        <Container mainColor={mainColor}>
            <Button
                fontFamily={fontFamily}
                fontSize={fontSize}
                txtColor={txtColor}>
                {txt}
            </Button>
        </Container>
    )
}
