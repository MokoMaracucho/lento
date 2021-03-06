import React from 'react'

import './css/Arrow002.scss'

const Arrow002 = (props) => {
    return (
        <>
            <div id='arrow002_DIV' style={{display: props.display ? 'block' : 'none'}}>
                <svg width="7" height="7" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0)">
                        <path d="M7 2.16256L6.17457 1.33716L3.5 4.01173L0.825426 1.33716L4.40758e-07 2.16256L3.5 5.66256L7 2.16256Z" fill="black"/>
                    </g>
                    <defs>
                        <clipPath id="clip0">
                            <rect width="7" height="7" fill="white" transform="translate(7) rotate(90)"/>
                        </clipPath>
                    </defs>
                </svg>
            </div>
        </>
    )
}

export default Arrow002