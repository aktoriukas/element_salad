import styled from 'styled-components';

const Container = styled.div`

    width: fit-content;
    height: fit-content;
    margin: auto;
    background: ${props => props.theme.main || '#535353'};
    position: relative;
    box-shadow: 0 0 5px #000000;
    color: #ffff;
    border-radius: 10px;
    overflow: hidden;
    &:after{
        content: '';
        position: absolute;
        width:100%;
        height: 100%;
        left: 0;
        top: 0;
        border-radius: 10px;
        background-color: ${props => props.theme.second || '#A0A0A0'};
        z-index: 1;
        opacity: 0;
        transform: scale(0);
        transition: transform .5s ease, opacity .7s ease;
    }
    &:hover:after{
        transform: scale(1); 
        opacity: 1;
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
    font-family: ${props => props.theme.fontFamily || 'monospace'};
    &:focus{ 
        outline: none;
    }
    &:active{
        bottom: -1px;
    }
`


export default function Zoom(props) {

    return (
        <Container>
            <Button>{props.txt}</Button>
        </Container>
    )
}
