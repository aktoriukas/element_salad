import styled from 'styled-components';

const ListItem = styled.li`

    padding: 1rem 1rem 1rem 3rem;
    position: relative;
    margin-bottom: 2rem;
    background-color: ${props => props.theme.second || '#A0A0A0'};
    width: auto;
    font-family: 'sans-serif';
    font-size: ${props => props.theme.fontSize || '1.4rem'};
    color: ${props => props.theme.txtColor || '#ffffff'};
    &:before{
        content: counter(list);
        counter-increment: list;
        line-height: 2.2;
        text-align: center;
        position: absolute;
        height: 3rem;
        width: 3rem;
        background-color: ${props => props.theme.main || '#535353'};
        left: -10px;
        top: -10px;
        border-radius: 10px 20px 0 20px;
    }
`
const OrderedList = styled.ol`
    list-style: none;
    padding: 0;
    counter-reset: list;
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
