import styled from 'styled-components';

const Container = styled.div`

    width: auto;
    height: auto;
    margin: auto;
    background: none;
    position: relative;
    box-shadow: 0 0 2px #000000;
    color: ${props => props.theme.txtColor || '#ffffff'};;
    transition: all .7s ease;
    z-index: 2;
    &:after{
        content: '';
        position: absolute;
        width:100%;
        height: 100%;
        left: 10%;
        top: 10%;
        background-color: ${props => props.theme.second || '#A0A0A0'};
        z-index: -1;
        transition: 
            left .5s ease, 
            opacity .7s ease, 
            top .5s ease;
    }
    &:hover{
        box-shadow: 0 0 4px #000000;
        &:after{
        opacity: .4;
        left: 0;
        top:0;
        }
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
    font-family: ${props => props.theme.fontFamily || 'monospace'};
    font-size: ${props => props.theme.fontSize || '1.4rem'};
    &:focus{ 
        outline: none;
    }
    &:active{
        bottom: -1px;
    }
`


export default function OffSide(props) {

    return (
        <Container>
            <Button>{props.txt}</Button>
        </Container>
    )
}