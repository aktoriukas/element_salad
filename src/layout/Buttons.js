import React from 'react'

import Grid from './Grid'
import Description from '../Elements/Description'

import Zoom from '../Elements/buttons/Zoom'
import Slider from '../Elements/buttons/Slider'

import Button from '../Elements/buttons/Button'

export default function Buttons() {

    return (
        <Grid>
            <Zoom>
                <Button>Press me</Button>
            </Zoom>
            {/* <Description txt={Zoom} /> */}

            <Slider>
                <Button>Press me</Button>
            </Slider>
            {/* <Description txt={Slider} /> */}
        </Grid>
    )
}
