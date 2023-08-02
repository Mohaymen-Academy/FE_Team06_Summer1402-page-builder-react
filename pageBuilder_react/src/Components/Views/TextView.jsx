import React from 'react'
import { Fonts } from '../../utility/Constants'
export default function TextView({ states }) {
    console.log(states.isbold)
    return (
        <div
            className='pointer-events-none break-words w-[100%]'
            style={{
                gap: states.gap,
                lineHeight: states.lineHeight,
                color: states.textColor,
                fontFamily: Fonts[states.fontfamliy]
            }}>
            {
                states.link ?
                    <a
                        className={`${states.isItalic ? 'underline' : ''}`}
                        style={{
                            textAlign: states.textAlign,
                            fontWeight: states.isbold ? 'bold' : '',
                            // fontdec:states.isbold?'bold':'none',
                        }}
                        href={states.link}>

                        <p>
                            {states.text}
                        </p>

                    </a>
                    :
                    <p>
                        {states.text}
                    </p>

            }
        </div>
    )
}
