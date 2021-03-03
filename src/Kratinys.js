import Flex from './layout/Flex'

import Buttons from './layout/Buttons'
import Lists from './layout/Lists'
import StatsPicker from './Elements/StatsPicker'

import styled, { ThemeProvider } from 'styled-components';

import React, { useReducer } from 'react';

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
        background-color: #8787ab;

    `

export default function Kratinys() {

    const theme = {
        main: '#535353',
        second: '#A0A0A0',
        active: '#ffffff57',
        txtColor: '#ffffff',
        fontSize: '1.4rem',
        fontFamily: 'monospace',
        fontFamily2: 'sans-serif',
        backgroundColor: '#8787ab'
    }

    const ACTIONS = {
        MAIN_COLOR: 'change_main_color',
        SECOND_COLOR: 'change_second_color',
        ACTIVE_COLOR: 'change_active_color',
        TXT_COLOR: 'change_txt_color',
        TXT_SIZE: 'change_txt_size'
    }

    const [state, dispatch] = useReducer(reducer, theme)

    function reducer(state, action) {
        switch (action.type) {

            case ACTIONS.MAIN_COLOR:
                state.main = action.payload.color
                return { ...state }

            case ACTIONS.SECOND_COLOR:
                state.second = action.payload.color
                return { ...state }

            case ACTIONS.ACTIVE_COLOR:
                state.active = action.payload.color
                return { ...state }

            case ACTIONS.TXT_COLOR:
                state.txtColor = action.payload.color
                return { ...state }

            case ACTIONS.TXT_SIZE:
                state.fontSize = `${action.payload.size}px`
                return { ...state }

            default:
                return state
        }
    }


    return (
        <ThemeProvider theme={state}>
            <Flex>
                <H1>Kratinys</H1>

                <StatsPicker ACTIONS={ACTIONS} dispatch={dispatch} />

                <H2>Button</H2>
                <Buttons />

                <H2>List</H2>
                <Lists />

                <H2>Footer</H2>

            </Flex>
        </ThemeProvider>
    )
}
