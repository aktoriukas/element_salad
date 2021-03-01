import styled from 'styled-components';

export default styled.button`
    position: relative;
    color: #ffff;
    width: 100%;
    height: 100%;
    padding: .75rem 1rem;
    cursor: pointer;
    background: transparent;
    z-index: 2;
    border:none;
    &:focus{ 
        outline: none;
    }
    &:active{
        background-color: white;
    }
`