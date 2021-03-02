import React from 'react'

import Grid from './Grid'

import Zoom from '../Elements/buttons/Zoom'
import Slider from '../Elements/buttons/Slider'
import OffSide from '../Elements/buttons/OffSide'
import Flip from '../Elements/buttons/Flip'
import Pulse from '../Elements/buttons/Pulse'
import Expand from '../Elements/buttons/Expand'

export default function Buttons() {

    return (
        <Grid>
            <Zoom />

            <Pulse />

            <Slider />

            <OffSide />

            <Expand />

            <Flip />
        </Grid>
    )
}
