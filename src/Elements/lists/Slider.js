import styled from 'styled-components';

const ListItem = styled.li`

    font-family: ${props => props.theme.fontFamily2 || 'sans-serif'};
    font-size: ${props => props.theme.fontSize || '1.4rem'};
    color: ${props => props.theme.txtColor || '#ffffff'};
    position: relative;
    padding: 1.25rem;
    z-index: 0;
    margin-bottom: .5rem;
    counter-increment: list;
    position: relative;
    transition: all .5s ease-in-out;
    padding-left: 1.5rem;
    text-shadow: 0 0 1px ${props => props.theme.txtColor || '#ffffff'};

    &:before{
        content: counter(list);
        position: absolute;
        top:50%;
        left: 1rem;
        transform: translateY(-50%);
        color: transparent;
        font-size: 250%;
        text-shadow: 0 0 5px ${props => props.theme.main || '#535353'};
        transition: all .5s ease-in-out;
        opacity: .3;
    }
    &:after{
        content: '';
        position: absolute;
        width: 100%;
        height:100%;
        background-color: ${props => props.theme.second || '#A0A0A0'};
        z-index: -1;
        left:0;
        top: 0;
        transition: all .5s ease-in-out;
        opacity: 0;
    }
    &:hover{
        padding-left: 3.5rem;
        &:before{
            text-shadow: 0 0 1px ${props => props.theme.main || '#535353'};
            opacity: 1;
        }
        &:after{
            opacity: 1;
        }
    }
`
const OrderedList = styled.ol`
    list-style: none;
    padding: 0;
    counter-reset: list;
`


export default function Cards({ list }) {

    return (

        <OrderedList>
            {list.map(item => (<ListItem key={item}>{item}</ListItem>))}
        </OrderedList>
    )
}