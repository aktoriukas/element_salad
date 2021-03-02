import styled from 'styled-components';

const Container = styled.div`

    width: auto;
    height: auto;
    margin: auto;
    background: ${props => props.theme.main || '#535353'};
    position: relative;
    box-shadow: 0 0 5px #000000;
    overflow: hidden;
    color: ${props => props.theme.txtColor || '#ffffff'};;
    border-radius: 10px;
    &:after{
        content: '';
        position: absolute;
        width:100%;
        height: 100%;
        left: -100%;
        top: 0;
        background-color: ${props => props.theme.second || '#A0A0A0'};
        z-index: 1;
        opacity: 0;
        transition: left .5s ease, opacity .7s ease;
    }
    &:hover:after{
        opacity: 1;
        left: 0;
    }
`
const Button = styled.button`

    position: relative;
    color: inherit;
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
        background-color: ${props => props.theme.active || '#ffffff57'};
    }
`

export default function Slider(props) {

    return (
        <Container>
            <Button>{props.txt}</Button>
        </Container>
    )
}