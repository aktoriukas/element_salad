import React from 'react'
import Flex from './layout/Flex'
import Buttons from './layout/Buttons'

import { ThemeProvider } from 'styled-components';

export default function Kratinys() {

    const theme = {
        main: '#535353',
        second: '#A0A0A0'
    }

    return (
        <ThemeProvider theme={theme}>
            <Flex>
                <Buttons />
            </Flex>
        </ThemeProvider>
    )
}
