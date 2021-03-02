import Flex from './layout/Flex'

import Buttons from './layout/Buttons'
import Lists from './layout/Lists'

import styled from 'styled-components'

import { ThemeProvider } from 'styled-components';


const theme = {
    main: '#535353',
    second: '#A0A0A0',
    active: '#ffffff57',
    txtColor: '#ffffff',
    fontSize: '1.4rem',
    fontFamily: 'monospace',
    backgroundColor: '#8787ab'
}
const H1 = styled.h1`
        width: 100%;
        padding-left: 5%;
        margin: 4rem auto;
        font-family: monospace;
        font-size: 3.5rem;
        text-align: left;
        color: #ffffff;
    `
const H2 = styled.h2`
        width: 100%;
        margin: 4rem auto;
        font-family: monospace;
        font-size: 3rem;
        text-align: left;
        color: #ffffff;
        border-bottom: 2px solid #ffffff;
        position: sticky;
        top: 0;
        padding:1rem 0 1rem 5%;
        z-index: 100;
        background-color: ${theme.backgroundColor};

    `

export default function Kratinys() {


    return (
        <ThemeProvider theme={theme}>
            <Flex>
                <H1>Kratinys</H1>

                <H2>Button</H2>
                <Buttons />

                <H2>List</H2>
                <Lists />

                <H2>Card</H2>

            </Flex>
        </ThemeProvider>
    )
}
