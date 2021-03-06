import React from 'react'

import Grid from './Grid'

import Zoom from '../Elements/buttons/Zoom'
import Slider from '../Elements/buttons/Slider'
import OffSide from '../Elements/buttons/OffSide'
import Flip from '../Elements/buttons/Flip'
import Pulse from '../Elements/buttons/Pulse'
import Expand from '../Elements/buttons/Expand'
import Hover from '../Elements/buttons/Hover'
import Virtual from '../Elements/buttons/Virtual'
import Glow from '../Elements/buttons/Glow'
import GlowInv from '../Elements/buttons/GlowInv'

export default function Buttons() {

    const txt = 'Hover me'

    return (
        <Grid size={4}>
            <Zoom txt={txt} />

            <Pulse txt={txt} />

            <Slider txt={txt} />

            <OffSide txt={txt} />

            <Expand txt={txt} />

            <Flip />

            <Hover txt={txt} />

            <Virtual txt={txt} />

            <Glow txt={txt} />

            <GlowInv txt={txt} />
        </Grid>
    )
}
