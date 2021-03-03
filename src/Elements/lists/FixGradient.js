import styled from 'styled-components';


const ListItem = styled.li`

    padding: 1rem;
    width: auto;
    font-family: ${props => props.theme.fontFamily2 || 'sans-serif'};
    font-size: ${props => props.theme.fontSize || '1.4rem'};
    color: ${props => props.theme.txtColor || '#ffffff'};
    counter-increment: list;
    display: flex;
    align-items: center;
    border-bottom: 1px solid ${props => props.theme.txtColor || '#ffffff'};

    &:before{
        content: counter(list);
        font-weight: bold;
        font-size: 150%;
        text-align: right;
        min-width: 2rem;
        padding-right: .5rem;
        font-variant-numeric: tabular-nums;
        align-self: flex-start;
        background-image: linear-gradient(to bottom, Crimson, Chartreuse); // <--- CHANGE THIS
        background-attachment: fixed;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
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
