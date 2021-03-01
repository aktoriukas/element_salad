import React from 'react'

export default function Description({ txt }) {

    let string = txt.componentStyle.rules[0]
    console.log(txt)

    return (
        <code>

            {`${txt.target} {${string}}`}

        </code>
    )
}
