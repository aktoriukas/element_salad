import styled from 'styled-components';
import React from 'react';

const ListItem = styled.li.attrs(props => ({
    fontFamily: props.fontFamily,
    fontSize: props.fontSize,
    txtColor: props.txtColor,
    mainColor: props.mainColor,
    secondColor: props.secondColor,
}))`

    padding: 1rem 1rem 1rem 3rem;
    position: relative;
    margin-bottom: 2rem;
    background-color: ${props => props.secondColor || props.theme.secondColor || '#A0A0A0'};
    width: auto;
    font-family: ${props => props.fontFamily || props.theme.fontFamily2 || 'sans-serif'};
    font-size: ${props => props.fontSize || props.theme.fontSize || '1.4rem'};
    color: ${props => props.txtColor || props.theme.txtColor || '#ffffff'};
    text-shadow: 0 0 2px ${props => props.mainColor || props.theme.mainColor || '#535353'};
    box-shadow: 0 0 4px ${props => props.mainColor || props.theme.mainColor || '#535353'};
    border-radius: 1rem;

    &:before{
        content: counter(list);
        counter-increment: list;
        line-height: 2.2;
        text-align: center;
        position: absolute;
        height: 3rem;
        width: 3rem;
        background: linear-gradient(120deg, 
        ${props => props.mainColor || props.theme.mainColor || '#535353'} 0%,
        ${props => props.secondColor || props.theme.secondColor || '#A0A0A0'} 100%);
        left: -10px;
        top: -5px;
        border-radius: 10px 20px 2px 20px;
    }
`
const OrderedList = styled.ol`
    list-style: none;
    padding: 0;
    counter-reset: list;
    width: 100%;
`

export default function SqrNumber({ list, fontFamily, fontSize, txtColor, mainColor, secondColor }) {

    return (

        <OrderedList>

            {list.map(item => (

                <ListItem
                    fontFamily={fontFamily}
                    fontSize={fontSize}
                    txtColor={txtColor}
                    mainColor={mainColor}
                    secondColor={secondColor}
                    key={item}>
                    {item}

                </ListItem>
            ))}
        </OrderedList>
    )
}
