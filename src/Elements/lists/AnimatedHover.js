import styled from 'styled-components';
import React from 'react';

let x = 0;

const getArrayL = (array) => {
    console.log(x)
    x++
    return array.length
}

const ListItem = styled.li.attrs(props => ({
    fontFamily: props.fontFamily,
    fontSize: props.fontSize,
    txtColor: props.txtColor,
    mainColor: props.mainColor,
    secondColor: props.secondColor,
    img: props.img,
    list: props.list
    }))`

    font-family: ${props => props.fontFamily || props.theme.fontFamily2 || 'sans-serif'};
    font-size: ${props => props.fontSize || props.theme.fontSize || '1.4rem'};
    color: ${props => props.txtColor || props.theme.txtColor || '#ffffff'};
    padding: 2rem 2rem 2rem 5rem;
    counter-increment: list;
    transition: all .5s ease-in-out;
    list-style: none;
    padding: 2rem 0 2rem 5rem; 

    &:before{
        content: '';
        position: absolute;
        background: red;
        width: 4rem;
        height: 4rem;
        top: ${ props => `${100 / getArrayL(props.list)}%`};
        left: 0;
        text-align: center;
        border-radius: 50%;
        transition: all 2s ease;
    }
    /* &:after{
        content: '';
        position: absolute;
    } */
    &:hover{
        &:before{
        }
        &:after{
        }
    }
`
const OrderedList = styled.ol`

    padding: 0;
    position: relative;
    counter-reset: list;

    @media (max-width: 1400px) {
        grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: 900px) {
        grid-template-columns: 1fr;
    }
`


export default function AnimatedHover({ list, img, fontFamily, fontSize, txtColor, mainColor, secondColor }) {

    return (

        <OrderedList>

            {list.map(item => (
                <ListItem
                    fontFamily={fontFamily}
                    fontSize={fontSize}
                    txtColor={txtColor}
                    mainColor={mainColor}
                    secondColor={secondColor}
                    img={img}
                    list={list}
                    key={item}>
                    {item}

                </ListItem>))}

        </OrderedList>
    )
}
