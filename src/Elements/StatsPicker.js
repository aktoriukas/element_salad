import React from 'react'
import ReactColorPicker from '@super-effective/react-color-picker';
import Grid from '../layout/Grid'

import styled from 'styled-components';


const H3 = styled.h3`

    font-family: monospace;
    font-size: 2rem;
    text-align: left;
    color: #ffffff;
    padding-left: .5rem;
`

const Container = styled.div`

    width: 8rem;
    position: relative;
    &:after{
        content: 'px';
        color: ${props => props.theme.backgroundColor};
        position: absolute;
        height: 100%;
        width: fit-content;
        right: .5rem;
        font-family: monospace;
        font-size: 1.4rem;
        line-height: 1.6;
        top: 0;
    }
`

const Input = styled.input`

    border-radius: .5rem;
    padding: .5rem .75rem;
    position: relative;
    border: 1px solid #ffffff;
    width: 8rem;

    &:focus{
        outline: none;
    }
`

export default function StatsPicker(props) {

    const { ACTIONS, dispatch } = props

    return (
        <Grid size={4}>
            <div>
                <H3>main color</H3>
                <ReactColorPicker
                    onChange={(color) =>
                        dispatch({ type: ACTIONS.MAIN_COLOR, payload: { color: color } })
                    }
                />
            </div>
            <div>
                <H3>second color</H3>
                <ReactColorPicker
                    onChange={(color) =>
                        dispatch({ type: ACTIONS.SECOND_COLOR, payload: { color: color } })
                    }
                />
            </div>
            <div>
                <H3>active color</H3>
                <ReactColorPicker
                    onChange={(color) =>
                        dispatch({ type: ACTIONS.ACTIVE_COLOR, payload: { color: color } })
                    }
                />
            </div>
            <div>
                <H3>font color</H3>
                <ReactColorPicker
                    onChange={(color) =>
                        dispatch({ type: ACTIONS.TXT_COLOR, payload: { color: color } })
                    }
                />
            </div>
            <div>
                <H3>font size</H3>
                <Container>
                    <Input onChange={
                        (e) => dispatch({ type: ACTIONS.TXT_SIZE, payload: { size: e.target.value } })
                    } type='number' />
                </Container>
            </div>
        </Grid>
    )
}
