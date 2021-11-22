import React from 'react'

import { TextField } from '@mui/material'

import '../Styles/Validations/LivingPlaceRegistrationStep3.scss'

const LivingPlaceRegistrationStep3 = () => {
    return (
        <>
            <div className='form__div'>
                <h5>Residence informations</h5>
                <p className='p-large blue_COLOR'>Complex A</p>
                <p className='p-medium'>Adress</p>

                <TextField label='House number' inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} />
            </div>
        </>
    )
}

export default LivingPlaceRegistrationStep3
