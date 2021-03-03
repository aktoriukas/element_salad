import styled from 'styled-components';

const Container = styled.div`

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
        background-color: ${props => props.theme.main || '#535353'};
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
const Button = styled.button`

    position: relative;
    color: ${props => props.theme.txtColor || '#ffffff'};;
    width: 100%;
    height: 100%;
    padding: .75rem 1rem;
    cursor: pointer;
    background: transparent;
    z-index: 2;
    border:none;
    font-size: ${props => props.theme.fontSize || '1.4rem'};
    font-family: ${props => props.theme.fontFamily2 || 'sans-serif'};
    letter-spacing: inherit;
    transition: all .75s ease-in-out;
    &:focus{ 
        outline: none;
    }
    &:active{
        letter-spacing: 7px;
    }
`


export default function Expand(props) {

    return (
        <Container>
            <Button>{props.txt}</Button>
        </Container>
    )
}
