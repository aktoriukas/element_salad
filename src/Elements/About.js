import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
    max-width: 1200px;
    text-align: center;
    font-size: 1.4rem;
    color: ${props => props.theme.txtColor || '#ffffff'};
    font-family: ${props => props.theme.fontFamily || 'monospace'};
    margin: 5rem auto;
    display: flex;
    flex-direction: column;
    gap: 3rem;
`

const Pargh = styled.p``

const Link = styled.a`
    padding: 1rem;
    color: ${props => props.theme.txtColor || '#ffffff'};
    background: ${props => props.mainColor || props.theme.mainColor || '#535353'};
`

const Code = styled.code`
    padding: 1rem;
    background: ${props => props.mainColor || props.theme.mainColor || '#535353'};
`


export default function About() {
    return (
        <Container>
            <Pargh>
                To use these elements: <br></br>
            </Pargh>
            <Code>
                $ npm i aktoriukas-react-components
            </Code>
            <Pargh>
                For more info visit :
            </Pargh>
            <Link href='https://github.com/aktoriukas/element_salad' target='_black'>
                https://github.com/aktoriukas/element_salad
            </Link>
        </Container>
    )
}
