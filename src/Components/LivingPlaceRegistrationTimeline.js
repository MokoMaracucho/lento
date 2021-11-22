import React from 'react'

import { Button } from '@material-ui/core'

import '../Styles/Components/LivingPlaceRegistrationTimeline.scss'

const LivingPlaceRegistrationTimeline = () => {

    return (
        <>
            <div>
                <div className='formSteps__div'>
                    <div className='formStep__div'>
                        <div className='circle__formStep__div white_COLOR'>1</div>
                        <div className='title__formStep__div grey_COLOR'>First step</div>
                    </div>
                    <div className='formStep__div'>
                        <div className='circle__formStep__div white_COLOR'>2</div>
                        <div className='title__formStep__div grey_COLOR'>Complex info</div>
                    </div>
                    <div className='formStep__div'>
                        <div className='circle__formStep__div white_COLOR'>3</div>
                        <div className='title__formStep__div grey_COLOR'>Residence info</div>
                    </div>
                    <div className='formStep__div'>
                        <div className='circle__formStep__div white_COLOR'>4</div>
                        <div className='title__formStep__div grey_COLOR'>Floorplan info</div>
                    </div>
                    <div className='formStep__div'>
                        <div className='circle__formStep__div white_COLOR'>5</div>
                        <div className='title__formStep__div grey_COLOR'>Rooms</div>
                    </div>
                    <div className='formStep__div'>
                        <div className='circle__formStep__div white_COLOR'>6</div>
                        <div className='title__formStep__div grey_COLOR'>Living places</div>
                    </div>
                    <div className='formStep__div'>
                        <div className='circle__formStep__div white_COLOR'>7</div>
                        <div className='title__formStep__div grey_COLOR'>Pictures</div>
                    </div>
                    <div className='formStep__div'>
                        <div className='circle__formStep__div white_COLOR'>8</div>
                        <div className='title__formStep__div grey_COLOR'>Documents</div>
                    </div>
                    <div className='formStep__div'>
                        <div className='circle__formStep__div white_COLOR'>9</div>
                        <div className='title__formStep__div grey_COLOR'>Done</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LivingPlaceRegistrationTimeline
