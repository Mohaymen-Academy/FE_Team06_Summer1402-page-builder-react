import React from 'react'
import { Fonts } from '../../utility/Constants'
export default function TextView({ states }) {
    const x = 'h1'
    console.log(states.isbold)
    return (
        <div
            className={`pointer-events-none break-words w-[100%] `}
            style={{
                gap: states.gap,
                lineHeight: states.lineHeight,
                color: states.textColor,
                fontFamily: Fonts[states.fontfamliy],
                fontSize: `${states.fontsize * states.tagtype}px`,
                padding: `${states.padding}px`,
                margin: `${states.gap}px`,
                textAlign: states.textAlign,
                fontWeight: states.isbold ? 'bold' : '',
            }}>
            {
                states.link ?
                    <a
                        className={`${states.isItalic ? 'underline' : ''}`}
                        // style={{
                        //     textAlign: states.textAlign,
                        //     fontWeight: states.isbold ? 'bold' : '',
                        // }}
                        href={states.link}>
                        {/* {
                            React.createElement(states.tagtype, {}, states.text)
                        } */}
                        {/* <p> */}
                        {states.text}
                        {/* </p> */}

                    </a>
                    :
                    <p
                        className={`${states.isItalic ? 'underline' : ''}`}>

                        {
                            states.text
                            // React.createElement(states.tagtype, {}, )
                        }

                    </p>

            }
        </div>
    )
}
