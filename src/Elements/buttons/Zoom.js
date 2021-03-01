import styled from 'styled-components';

export default styled.div`

    width: fit-content;
    height: fit-content;
    margin: auto;
    background: ${props => props.theme.main};
    position: relative;
    box-shadow: 0 0 5px #000000;
    &:after{
        content: '';
        position: absolute;
        width:100%;
        height: 100%;
        left: 0;
        top: 0;
        background-color: ${props => props.theme.second};
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