import styled from 'styled-components';

export default styled.div`

    width: fit-content;
    height: fit-content;
    margin: auto;
    background: ${props => props.theme.main};
    position: relative;
    box-shadow: 0 0 5px #000000;
    overflow: hidden;
    &:after{
        content: '';
        position: absolute;
        width:100%;
        height: 100%;
        left: -100%;
        top: 0;
        background-color: ${props => props.theme.second};
        z-index: 1;
        opacity: 0;
        transition: left .5s ease, opacity .7s ease;
    }
    &:hover:after{
        opacity: 1;
        left: 0;
    }

`