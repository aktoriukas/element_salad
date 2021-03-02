import React from 'react'
import Flex from './layout/Flex'
import Buttons from './layout/Buttons'
import styled from 'styled-components'

import { ThemeProvider } from 'styled-components';



export default function Kratinys() {

    const theme = {
        main: '#535353',
        second: '#A0A0A0',
        active: '#ffffff57',
        txtColor: '#ffffff',
        fontSize: '1.4rem',
        fontFamily: 'monospace'
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

    return (
        <ThemeProvider theme={theme}>
            <Flex>
                <H1>Kratinys</H1>
                <Buttons />
            </Flex>
        </ThemeProvider>
    )
}
