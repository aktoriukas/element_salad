import styled from 'styled-components';
import React from 'react';

const ListItem = styled.li.attrs(props => ({
    fontFamily: props.fontFamily,
    fontSize: props.fontSize,
    txtColor: props.txtColor,
    mainColor: props.mainColor,
    secondColor: props.secondColor,
    img: props.img
}))`

    font-family: ${props => props.fontFamily || props.theme.fontFamily2 || 'sans-serif'};
    font-size: ${props => props.fontSize || props.theme.fontSize || '1.4rem'};
    color: ${props => props.txtColor || props.theme.txtColor || '#ffffff'};
    position: relative;
    padding: 2rem 2rem 2rem 5rem;
    counter-increment: list;
    transition: all .5s ease-in-out;
    background: #7b7ba3c9;
    backdrop-filter: blur(10px);
    border-radius: 1rem;

    &:before{
        content: counter(list);
        position: absolute;
        top: 0;
        left: .5rem;
        font-size: 450%;
        transition: all .5s ease-in-out;
        background-image: url(${props => props.img || 'http://www.justinmaller.com/img/projects/wallpaper/WP_Echoes-2560x1440_00065.jpg'}); // <--- CHANGE THIS
        background-attachment: fixed;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-size: cover;
        background-repeat: none;
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
    list-style: none;
    padding: 0;
    counter-reset: list;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    background-image: url(${props => props.img || 'http://www.justinmaller.com/img/projects/wallpaper/WP_Echoes-2560x1440_00065.jpg'}); // <--- CHANGE THIS
    background-attachment: fixed;
    background-size: cover;
    background-repeat: none;
    padding: 2rem;

    @media (max-width: 1400px) {
        grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: 900px) {
        grid-template-columns: 1fr;
    }
`


export default function CardsClear({ list, img, fontFamily, fontSize, txtColor, mainColor, secondColor }) {

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
                    key={item}>
                    {item}

                </ListItem>))}

        </OrderedList>
    )
}
