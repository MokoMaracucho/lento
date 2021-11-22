import React, { Component } from 'react'

import { Button } from '@material-ui/core'
import { InputLabel, Checkbox, Select } from '@material-ui/core'
import { FormControlLabel, FormLabel, MenuItem, RadioGroup } from '@mui/material'

import '../Styles/Validations/LivingPlaceRegistrationStep1.scss'

class LivingPlaceRegistrationStep1 extends Component {

    continue = e => {
        e.preventDefault()
        this.props.nextStep()
    }

    existingComplexes__array = [
        {
            value: 'complex1',
            label: 'Complex 1'
        },
        {
            value: 'complex2',
            label: 'Complex 2'
        },
        {
            value: 'complex3',
            label: 'Complex 3'
        },
        {
            value: 'complex4',
            label: 'Complex 4'
        }
    ]
    
    residenceTypes__array = [
        {
            value: 'apartment',
            label: 'Apartment'
        },
        {
            value: 'house',
            label: 'House'
        },
        {
            value: 'mobil_home',
            label: 'Mobil home'
        },
        {
            value: 'studio',
            label: 'Studio'
        }
    ]
    
    livingPlaceTypes__array = [
        {
            value: 'bed',
            label: 'Bed'
        },
        {
            value: 'room',
            label: 'Room'
        },
        {
            value: 'residence',
            label: 'Residence'
        }
    ]
    
    render() {

        const { values, handleChange } = this.props

        console.log(values)

        return (
            <>
                <div className='form__div'>
                    <h5>Somes questions</h5>


                    {/* PART OF A COMPLEX */}
                    <FormLabel component='legend'>Is the residence part of a complex?</FormLabel>
                    <RadioGroup
                        aria-label='partOfAComplex__label'
                        name='radio-buttons-group'
                        onChange={handleChange('part_of_a_complex')}
                        defaultValue={values.part_of_a_complex}
                    >
                        <FormControlLabel value='yes' control={ <Checkbox /> } label='Yes' />
                        <FormControlLabel value='no' control={ <Checkbox /> } label='No' />
                    </RadioGroup>


                    {/* EXISTING COMPLEX ? */}
                    <FormLabel component='legend'>Is this an existing complex or does it already exist in the platform?</FormLabel>
                    <RadioGroup
                        aria-label='existingComplex__label'
                        name='radio-buttons-group'
                        onChange={handleChange('existing_complex')}
                        defaultValue={values.existing_complex}
                    >
                        <FormControlLabel value='yes' control={ <Checkbox /> } label='Yes' />
                        <FormControlLabel value='no' control={ <Checkbox /> } label='No' />
                    </RadioGroup>


                    {/* CHOOSE COMPLEX */}
                    <InputLabel id='existingComplex__label'>Existing complexes</InputLabel>
                    <Select
                        labelId='existingComplex__label'
                        id='existingComplex__id'
                        label='existingComplex'
                        onChange={handleChange('existing_complex_name')}
                        defaultValue={values.existing_complex_name}
                    >
                        {this.existingComplexes__array.map((item, index) => (
                            <MenuItem key={index} value={item.value}>{item.label}</MenuItem>
                        ))}
                    </Select>


                    {/* RESIDENCE TYPE */}
                    <InputLabel id='residenceType__label'>Residence type</InputLabel>
                    <Select
                        labelId='residenceType__label'
                        id='residenceType__id'
                        label='residenceType'
                        onChange={handleChange('residence_type')}
                        defaultValue={values.residence_type}
                    >
                        {this.residenceTypes__array.map((item, index) => (
                            <MenuItem key={index} value={item.value}>{item.label}</MenuItem>
                        ))}
                    </Select>


                    {/* LIVING PLACE TYPE */}
                    <InputLabel id='livingPlaceType__label'>Living place type</InputLabel>
                    <Select
                        labelId='livingPlaceType__label'
                        id='livingPlaceType__id'
                        label='livingPlaceType'
                        onChange={handleChange('living_place_type')}
                        defaultValue={values.living_place_type}
                    >
                        {this.livingPlaceTypes__array.map((item, index) => (
                            <MenuItem key={index} value={item.value}>{item.label}</MenuItem>
                        ))}
                    </Select>


                    <Button
                        variant='contained'
                        onClick={this.continue}
                        style={{
                            backgroundColor: '#5398D4',
                            borderRadius: 50,
                            fontFamily: 'DMSansMedium',
                            boxShadow: 'unset'
                        }}
                    >
                        Next
                    </Button>
                </div>
            </>
        )
    }
}

export default LivingPlaceRegistrationStep1

/* TODO: Request to database */