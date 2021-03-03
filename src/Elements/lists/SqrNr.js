import styled from 'styled-components';

const ListItem = styled.li`

    padding: 1rem 1rem 1rem 3rem;
    position: relative;
    margin-bottom: 2rem;
    background-color: ${props => props.theme.second || '#A0A0A0'};
    width: auto;
    font-family: ${props => props.theme.fontFamily2 || 'sans-serif'};
    font-size: ${props => props.theme.fontSize || '1.4rem'};
    color: ${props => props.theme.txtColor || '#ffffff'};
    text-shadow: 0 0 2px ${props => props.theme.main || '#535353'};
    box-shadow: 0 0 4px ${props => props.theme.main || '#535353'};

    &:before{
        content: counter(list);
        counter-increment: list;
        line-height: 2.2;
        text-align: center;
        position: absolute;
        height: 3rem;
        width: 3rem;
        background: linear-gradient(120deg, 
        ${props => props.theme.main || '#535353'} 0%,
        ${props => props.theme.second || '#A0A0A0'} 100%);
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

export default function SqrNumber({ list }) {

    return (

        <OrderedList>
            {list.map(item => (
                <ListItem key={item}>{item}</ListItem>
            ))}
        </OrderedList>
    )
}
