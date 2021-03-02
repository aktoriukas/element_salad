import styled from 'styled-components'


export default styled.div`
    display: grid;
    grid-template-columns: repeat(${props => props.size || 4}, 1fr);
    padding: 2rem;
    gap:5rem;
    @media (max-width: 1200px) {
        grid-template-columns: repeat(${props => props.size.floor || 2}, 1fr);
    }
    @media (max-width: 800px) {
        grid-template-columns: 1fr;
    }
`