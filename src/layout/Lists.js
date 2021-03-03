import Grid from './Grid'

import SqrNr from '../Elements/lists/SqrNr'
import Cards from '../Elements/lists/Cards'

export default function Lists() {

    const list =
        [
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            'Aenean tincidunt elit at ipsum cursus, vitae interdum nulla suscipit.',
            'Curabitur in orci vel risus facilisis accumsan.',
            'Morbi eleifend tortor lacinia sapien sagittis, quis pellentesque felis egestas.',
            'Aenean viverra dui quis leo lacinia fringilla.',
            'Sed varius lectus ac condimentum egestas.'
        ]

    return (
        <>
            <Grid size={2}>
                <SqrNr list={list} />
            </Grid>

            <Grid size={1}>
                <Cards list={list} />
            </Grid>
        </>
    )
}
