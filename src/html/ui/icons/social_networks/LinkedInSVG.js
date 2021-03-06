import React from 'react'

import './css/LinkedInSVG.scss'

const LinkedInSVG = (props) => {
    return (
        <>
            <div className='cursor-pointer'>
                <svg width={props.width} height={props.height} /* width="14" height="14" */ viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.9965 14V13.9994H14V8.86493C14 6.35312 13.4592 4.41821 10.5228 4.41821C9.1111 4.41821 8.16378 5.19287 7.77703 5.92729H7.7362V4.65271H4.95197V13.9994H7.85111V9.37126C7.85111 8.15269 8.08211 6.97436 9.59118 6.97436C11.0781 6.97436 11.1003 8.36502 11.1003 9.44943V14H13.9965Z" fill={props.color} />
                    <path d="M0.231018 4.65332H3.13366V14H0.231018V4.65332Z" fill={props.color} />
                    <path d="M1.68115 0C0.753078 0 0 0.753078 0 1.68115C0 2.60923 0.753078 3.37806 1.68115 3.37806C2.60923 3.37806 3.36231 2.60923 3.36231 1.68115C3.36173 0.753078 2.60865 0 1.68115 0V0Z" fill={props.color} />
                </svg>
            </div>
        </>
    )
}

export default LinkedInSVG