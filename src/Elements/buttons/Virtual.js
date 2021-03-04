import styled from 'styled-components';
import React from 'react';


const Button = styled.button.attrs(props => ({
  mainColor: props.mainColor,
  fontSize: props.fontSize,
  fontFamily: props.fontFamily,
  activeColor: props.activeColor,
  txtColor: props.txtColor,
  mainColor: props.mainColor,
}))`

  color: ${props => props.txtColor || props.theme.txtColor || '#ffffff'};;
  cursor: pointer;
  display: inline-block;
  letter-spacing: 0.075em;
  padding: .8em 1em;
  margin: auto 2em;
  position: relative;
  align-self: center;
  text-transform: uppercase;
  border: 3px ${props => props.mainColor || props.theme.mainColor || '#535353'} solid;
  border-image: linear-gradient(45deg, ${props => props.mainColor || props.theme.mainColor || '#535353'} 0%,  ${props => props.secondColor || props.theme.secondColor || '#A0A0A0'} 100%);
  border-image-slice: 1 1 0 0;
  z-index: 1;
  box-shadow: -0.5em .5em transparentize(${props => props.activeColor || props.theme.activeColor || '#ffffff57'},1);
  transform-origin: left bottom;
  transition: all .5s ease;
  background: transparent;
  font-size: ${props => props.fontSize || props.theme.fontSize || '1.4rem'};
  font-family: ${props => props.fontFamily || props.theme.fontFamily || 'monospace'};

  &:before,
  &:after {
    border: 3px ${props => props.mainColor || props.theme.mainColor || '#535353'} solid;
    content: '';
    display: block;
    position: absolute;
    z-index: -1;
  }
  
  &:before {
    border-image: linear-gradient(45deg, ${props => props.mainColor || props.theme.mainColor || '#535353'} 0%, adjust-hue(${props => props.mainColor || props.theme.mainColor || '#535353'},10%) 100%);
    border-image-slice: 1 1 0 1;
    left: -0.59em; top: .15em;
    width: .31em;
    height: 100%;
    transform: skewY(-45deg);
  }
  &:after {
    border-image: linear-gradient(45deg, ${props => props.mainColor || props.theme.mainColor || '#535353'} 0%,  ${props => props.secondColor || props.theme.secondColor || '#A0A0A0'} 100%);
    border-image-slice: 1 1 1 0;
    bottom: -0.6em; right: 0.16em;
    width: 100%;
    height: .31em;
    transform: skewX(-45deg);
  }
  &:focus{
    outline: none;
  }
  
  &:hover {
    background: transparent;
    background-size: 90%;
    transform: translate(0.5em,-0.5em);
    box-shadow: -1em 1em .15em transparentize(${props => props.activeColor || props.theme.activeColor || '#ffffff57'},.9);
    
    
    &:before {
      height: calc(100% - .13em);
      border-image-slice: 1;
    }
    
    &:after {
      width: calc(100% - .13em);
      border-image-slice: 1;
    }
  }
  @mixin transition-all {
  -webkit-transition: all 200ms ease-in-out;
  -moz-transition: all 200ms ease-in-out;
  -o-transition: all 200ms ease-in-out;
	transition: all 200ms ease-in-out;
}
`

export default function Virtual({ activeColor, txtColor, txt, mainColor, secondColor, fontSize, fontFamily }) {

  return (

    <Button
      txtColor={txtColor}
      activeColor={activeColor}
      mainColor={mainColor}
      secondColor={secondColor}
      fontSize={fontSize}
      fontFamily={fontFamily}>
      {txt}

    </Button>
  )
} 