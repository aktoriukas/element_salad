import styled from 'styled-components';

export default styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${props => props.theme.backgroundColor};
    width: 100%;
    overflow: hidden;
`;