import styled from 'styled-components';

const ListItem = styled.li`

    font-family: ${props => props.theme.fontFamily2 || 'sans-serif'};
    font-size: ${props => props.theme.fontSize || '1.4rem'};
    color: ${props => props.theme.txtColor || '#ffffff'};
    padding: 2rem .5rem .5rem 1rem;
    position: relative;
    z-index: 0;

    &:before{
        content: counter(list);
        counter-increment: list;
        color: transparent;
        font-size: 500%;
        line-height: 0.3;
        float: right;
        text-shadow: 0 0 2px ${props => props.theme.main || '#535353'};
    }
    &:after{
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        top: 3%;
        right: 0%;
        background-color: ${props => props.theme.second || '#A0A0A0'};
        z-index: -1;
        box-shadow: -10px 10px 0 ${props => props.theme.main || '#535353'};
    }
`
const OrderedList = styled.ol`
    list-style: none;
    padding: 0;
    counter-reset: list;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 2rem;
    @media (max-width: 1200px) {
        grid-template-columns: repeat(3, 1fr);
    }
    @media (max-width: 800px) {
        grid-template-columns:1fr 1fr;
    }
    @media (max-width: 700px) {
        grid-template-columns:1fr;
    }
`

export default function Cards({ list }) {

    return (

        <OrderedList>
            {list.map(item => (<ListItem key={item}>{item}</ListItem>))}
        </OrderedList>
    )
}