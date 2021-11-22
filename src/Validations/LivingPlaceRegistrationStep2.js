import React from 'react'

import { Button } from '@material-ui/core'
import { TextField } from '@mui/material'
import { InputLabel, Radio, Select } from '@material-ui/core'
import { FormControlLabel, FormLabel, MenuItem, RadioGroup } from '@mui/material'
import Stack from '@mui/material/Stack'

const LivingPlaceRegistrationStep2 = () => {

    const country__array = [
        {
            value: 'BE',
            label: 'Belgium'
        },
        {
            value: 'BG',
            label: 'Bulgaria'
        },
        {
            value: 'CZ',
            label: 'Czech Republic'
        },
        {
            value: 'DK',
            label: 'Denmark'
        },
        {
            value: 'DE',
            label: 'Germany'
        },
        {
            value: 'EE',
            label: 'Estonia'
        },
        {
            value: 'IE',
            label: 'Ireland'
        },
        {
            value: 'EL',
            label: 'Greece'
        },
        {
            value: 'ES',
            label: 'SPAIN'
        },
        {
            value: 'FR',
            label: 'France'
        },
        {
            value: 'HR',
            label: 'Croatia'
        },
        {
            value: 'IT',
            label: 'Italy'
        },
        {
            value: 'CY',
            label: 'Cyprus'
        },
        {
            value: 'LV',
            label: 'Latvia'
        },
        {
            value: 'LT',
            label: 'Lithuania'
        },
        {
            value: 'LU',
            label: 'Luxembourg'
        },
        {
            value: 'HU',
            label: 'Hungary'
        },
        {
            value: 'MT',
            label: 'Malta'
        },
        {
            value: 'NL',
            label: 'The Nederlands'
        },
        {
            value: 'AT',
            label: 'Austria'
        },
        {
            value: 'PL',
            label: 'Poland'
        },
        {
            value: 'PT',
            label: 'Portugal'
        },
        {
            value: 'RO',
            label: 'Romania'
        },
        {
            value: 'Si',
            label: 'Slovania'
        },
        {
            value: 'SK',
            label: 'Slovakia'
        },
        {
            value: 'FI',
            label: 'Finland'
        },
        {
            value: 'SE',
            label: 'Sweden'
        },
        {
            value: 'UK',
            label: 'United Kingdom'
        },
        {
            value: 'ME',
            label: 'Montenegro'
        },
        {
            value: 'IS',
            label: 'Iceland'
        },
        {
            value: 'MK',
            label: 'Macedonia'
        },
        {
            value: 'AL',
            label: 'Albania'
        },
        {
            value: 'RS',
            label: 'Serbia'
        },
        {
            value: 'TR',
            label: 'Turkey'
        },
        {
            value: 'MD',
            label: 'Moldavia'
        },
        {
            value: 'AM',
            label: 'Armenia'
        },
        {
            value: 'BY',
            label: 'Belarus'
        },
        {
            value: 'AD',
            label: 'Andorra'
        },
        {
            value: 'MC',
            label: 'Monaco'
        },
        {
            value: 'SM',
            label: 'San Marino'
        },
        {
            value: 'VA',
            label: 'Vatican City'
        },
        {
            value: 'UA',
            label: 'Ukraine'
        },
        {
            value: 'XK',
            label: 'Kosovo'
        },
        {
            value: 'BA',
            label: 'Bosnia and Herzegovina'
        },
        {
            value: 'CH',
            label: 'Switzerland'
        },
        {
            value: 'LI',
            label: 'Liechtenstein'
        },
        {
            value: 'NO',
            label: 'Norway'
        }
    ]

    const phoneNumberLandcode__array = [
        {
            value: 'BE',
            label: 'Belgium, +32'
        },
        {
            value: 'BG',
            label: 'Bulgaria, +359'
        },
        {
            value: 'CZ',
            label: 'Czech Republic, +420'
        },
        {
            value: 'DK',
            label: 'Denmark, +45'
        },
        {
            value: 'DE',
            label: 'Germany, +49'
        },
        {
            value: 'EE',
            label: 'Estonia, +372'
        },
        {
            value: 'IE',
            label: 'Ireland, +353'
        },
        {
            value: 'EL',
            label: 'Greece, +30'
        },
        {
            value: 'ES',
            label: 'Spain, +34'
        },
        {
            value: 'FR',
            label: 'France, +33'
        },
        {
            value: 'HR',
            label: 'Croatia, +385'
        },
        {
            value: 'IT',
            label: 'Italy, +39'
        },
        {
            value: 'CY',
            label: 'Cyprus, +357'
        },
        {
            value: 'LV',
            label: 'Latvia, +371'
        },
        {
            value: 'LT',
            label: 'Lithuania, +370'
        },
        {
            value: 'LU',
            label: 'Luxembourg, +352'
        },
        {
            value: 'HU',
            label: 'Hungary, +36'
        },
        {
            value: 'MT',
            label: 'Malta, +356'
        },
        {
            value: 'NL',
            label: 'The Nederlands, +31'
        },
        {
            value: 'AT',
            label: 'Austria, +43'
        },
        {
            value: 'PL',
            label: 'Poland, +48'
        },
        {
            value: 'PT',
            label: 'Portugal, +351'
        },
        {
            value: 'RO',
            label: 'Romania, +40'
        },
        {
            value: 'Si',
            label: 'Slovania, +386'
        },
        {
            value: 'SK',
            label: 'Slovakia, +421'
        },
        {
            value: 'FI',
            label: 'Finland, +358'
        },
        {
            value: 'SE',
            label: 'Sweden, +46'
        },
        {
            value: 'UK',
            label: 'United Kingdom, +44'
        },
        {
            value: 'ME',
            label: 'Montenegro, +382'
        },
        {
            value: 'IS',
            label: 'Iceland, +354'
        },
        {
            value: 'MK',
            label: 'Macedonia, +389'
        },
        {
            value: 'AL',
            label: 'Albania, +355'
        },
        {
            value: 'RS',
            label: 'Serbia, +381'
        },
        {
            value: 'TR',
            label: 'Turkey, +90'
        },
        {
            value: 'MD',
            label: 'Moldavia, +373'
        },
        {
            value: 'AM',
            label: 'Armenia, +374'
        },
        {
            value: 'BY',
            label: 'Belarus, +375'
        },
        {
            value: 'AD',
            label: 'Andorra, +376'
        },
        {
            value: 'MC',
            label: 'Monaco, +377'
        },
        {
            value: 'SM',
            label: 'San Marino, +378'
        },
        {
            value: 'VA',
            label: 'Vatican City, +379'
        },
        {
            value: 'UA',
            label: 'Ukraine, +380'
        },
        {
            value: 'XK',
            label: 'Kosovo, +383'
        },
        {
            value: 'BA',
            label: 'Bosnia and Herzegovina, +387'
        },
        {
            value: 'CH',
            label: 'Switzerland, +41'
        },
        {
            value: 'LI',
            label: 'Liechtenstein, +423'
        },
        {
            value: 'NO',
            label: 'Norway, +47'
        }
    ]

    const facilityTypes__array = [
        {
            value: 'kitchen',
            label: 'Kitchen'
        },
        {
            value: 'bathroom',
            label: 'Bathroom'
        },
        {
            value: 'supermarket',
            label: 'Supermarket'
        },
        {
            value: 'fitness',
            label: 'Fitness'
        },
        {
            value: 'common_room',
            label: 'Common room'
        },
        {
            value: 'reception_office',
            label: 'Reception / Office'
        },
        {
            value: 'laundry',
            label: 'Laundry'
        },
        {
            value: 'relax',
            label: 'Relax'
        }
    ]

    const [value, setValue] = React.useState(new Date('2014-08-18T21:11:54'));
  
    const handleChange = (newValue) => {
        setValue(newValue);
    };
    
    return (
        <>
            <div className='form__div'>
                <h5>Complex informations</h5>

                <Stack
                    component='form'
                    noValidate spacing={1}
                    sx={{
                        display: 'flex',
                        flexDirection: 'column'
                    }}
                >
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'row'
                        }}
                    >
                        {/* COMPLEX NAME */}
                        <div>
                            <p className='p-medium'>Complex name</p>
                            <TextField
                                required
                                autoFocus
                                fullWidth
                                /* helperText={'helper'} */
                                id='outlined-basic'
                                variant='standard'
                                size={'string'}
                                style={{
                                    width: '300px',
                                    height: '40px',
                                    borderRadius: '10px',
                                    background: '#eee',
                                    paddingLeft: '15px',
                                    paddingTop: '5px'
                                }}
                                InputProps={{ 
                                    disableUnderline: true
                                }}
                            />

                            {/* HOUSE NUMBER */}
                            <p className='p-medium'>House number</p>
                            <TextField
                                required
                                fullWidth
                                /* helperText={'helper'} */
                                id='outlined-basic'
                                variant='standard'
                                size={'string'}
                                style={{
                                    width: '300px',
                                    height: '40px',
                                    borderRadius: '10px',
                                    background: '#eee',
                                    paddingLeft: '15px',
                                    paddingTop: '5px'
                                }}
                                InputProps={{
                                    inputMode: 'numeric',
                                    disableUnderline: true,
                                    pattern: '[0-9]*'
                                }}
                            />

                            <div
                                style={{
                                    display: 'flex',
                                    flexDirection: 'row'
                                }}
                                >
                                <div
                                    style={{
                                        display: 'flex',
                                        flexDirection: 'column'
                                    }}
                                >
                                    {/* CITY */}
                                    <p className='p-medium'>City</p>
                                    <TextField
                                        required
                                        fullWidth
                                        /* helperText={'helper'} */
                                        id='outlined-basic'
                                        variant='standard'
                                        size={'string'}
                                        style={{
                                            width: '200px',
                                            height: '40px',
                                            borderRadius: '10px',
                                            background: '#eee',
                                            paddingLeft: '15px',
                                            paddingTop: '5px'
                                        }}
                                        InputProps={{
                                            inputMode: 'numeric',
                                            disableUnderline: true,
                                            pattern: '[0-99999]*'
                                        }}
                                    />
                                </div>

                                <div
                                    style={{
                                        display: 'flex',
                                        flexDirection: 'column'
                                    }}
                                >
                                    {/* POSTAL CODE */}
                                    <p className='p-medium'>Postal code</p>
                                    <TextField
                                        required
                                        fullWidth
                                        /* helperText={'helper'} */
                                        id='outlined-basic'
                                        variant='standard'
                                        size={'string'}
                                        style={{
                                            width: '100px',
                                            height: '40px',
                                            borderRadius: '10px',
                                            background: '#eee',
                                            paddingLeft: '15px',
                                            paddingTop: '5px'
                                        }}
                                        InputProps={{
                                            disableUnderline: true
                                        }}
                                    />
                                </div>
                            </div>

                            {/* PHONE NUMBER */}
                            <p className='p-medium'>Phone number</p>
                            <TextField
                                required
                                fullWidth
                                /* helperText={'helper'} */
                                id='outlined-basic'
                                variant='standard'
                                size={'string'}
                                style={{
                                    width: '300px',
                                    height: '40px',
                                    borderRadius: '10px',
                                    background: '#eee',
                                    paddingLeft: '15px',
                                    paddingTop: '5px'
                                }}
                                InputProps={{
                                    disableUnderline: true
                                }}
                            />
                        
                            {/* EMAIL */}
                            <p className='p-medium'>Email</p>
                            <TextField
                                required
                                fullWidth
                                /* helperText={'helper'} */
                                id='outlined-basic'
                                variant='standard'
                                size={'string'}
                                style={{
                                    width: '300px',
                                    height: '40px',
                                    borderRadius: '10px',
                                    background: '#eee',
                                    paddingLeft: '15px',
                                    paddingTop: '5px'
                                }}
                                InputProps={{
                                    disableUnderline: true
                                }}
                            />
                        </div>

                        <div>
                            {/* STREET */}
                            <p className='p-medium'>Street</p>
                            <TextField
                                required
                                fullWidth
                                /* helperText={'helper'} */
                                id='outlined-basic'
                                variant='standard'
                                size={'string'}
                                style={{
                                    width: '300px',
                                    height: '40px',
                                    borderRadius: '10px',
                                    background: '#eee',
                                    paddingLeft: '15px',
                                    paddingTop: '5px'
                                }}
                                InputProps={{ 
                                    disableUnderline: true
                                }}
                            />

                            {/* HOUSE NUMBER EXTENSION */}
                            <p className='p-medium'>House number extension</p>
                            <TextField
                                required
                                fullWidth
                                /* helperText={'helper'} */
                                id='outlined-basic'
                                variant='standard'
                                size={'string'}
                                style={{
                                    width: '300px',
                                    height: '40px',
                                    borderRadius: '10px',
                                    background: '#eee',
                                    paddingLeft: '15px',
                                    paddingTop: '5px'
                                }}
                                InputProps={{
                                    disableUnderline: true
                                }}
                            />
                        
                            {/* COUNTRY */}
                            <p className='p-medium'>Country</p>
                            <Select
                                labelId='country__label'
                                id='country__id'
                                /* value={} */
                                /* onChange={handleChange} */
                                style={{
                                    width: '300px',
                                    height: '40px',
                                    borderRadius: '10px',
                                    background: '#eee',
                                    paddingLeft: '15px',
                                    paddingTop: '5px'
                                }}
                                InputProps={{
                                    disableUnderline: true
                                }}
                            >
                                {country__array.map((item) => (
                                    <MenuItem
                                        value={item.value}>
                                            {item.label}
                                    </MenuItem>
                                ))}
                            </Select>

                            {/* PHONE NUMBER LANDCODE */}
                            <p className='p-medium'>Phone number lancode</p>
                            <Select
                                labelId='phoneNumberLandcode__label'
                                id='phoneNumberLandcode__id'
                                /* value={} */
                                label='phoneNumberLandcode'
                                /* onChange={handleChange} */
                                style={{
                                    width: '300px',
                                    height: '40px',
                                    borderRadius: '10px',
                                    background: '#eee',
                                    paddingLeft: '15px',
                                    paddingTop: '5px'
                                }}
                            >
                                {phoneNumberLandcode__array.map((item) => (
                                    <MenuItem value={item.value}>{item.label}</MenuItem>
                                ))}
                            </Select>

                            <p className='p-medium'>Opening hours</p>
                            <div
                                style={{
                                    display: 'flex',
                                    flexDirection: 'row'
                                }}
                            >
                                {/* OPENING HOURS */}
                                <div
                                    style={{
                                        display: 'flex',
                                        flexDirection: 'column'
                                    }}
                                >
                                    <p className='p-small'>Open</p>
                                    <TextField
                                        id='time'
                                        type='time'
                                        defaultValue='07:30'
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        inputProps={{
                                            step: 300, // 5 min
                                        }}
                                        sx={{ width: 150 }}
                                        style={{
                                            width: '150px',
                                            height: '40px',
                                            borderRadius: '10px',
                                            background: '#eee',
                                            paddingLeft: '15px',
                                            paddingTop: '5px'
                                        }}
                                    />
                                </div>

                                <div
                                    style={{
                                        display: 'flex',
                                        flexDirection: 'column'
                                    }}
                                >
                                    <p className='p-small'>Close</p>
                                    <TextField
                                        id='time'
                                        type='time'
                                        defaultValue='07:30'
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        inputProps={{
                                            step: 300, // 5 min
                                        }}
                                        sx={{ width: 150 }}
                                        style={{
                                            width: '150px',
                                            height: '40px',
                                            borderRadius: '10px',
                                            background: '#eee',
                                            paddingLeft: '15px',
                                            paddingTop: '5px'
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* FACILITY TYPES */}
                    <p className='p-medium'>Facility types</p>
                    <RadioGroup
                        aria-label='facilityTypes__label'
                        name='radio-buttons-group'
                    >
                        <div
                            style={{
                                display: 'flex',
                                flexWrap: 'wrap',
                                alignContent: 'space-between',
                                width: '600px'
                            }}
                        >    
                            {facilityTypes__array.map((item) => (
                                <FormControlLabel value={item.value} control={ <Radio /> } label={item.label} />
                            ))}
                        </div>
                    </RadioGroup>

                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-between'
                        }}
                    >
                        <Button
                            variant='contained'
                            style={{
                                backgroundColor: '#5398D4',
                                borderRadius: 50,
                                fontFamily: 'DMSansMedium',
                                boxShadow: 'unset'
                            }}
                            >
                            Back
                        </Button>

                        <Button
                            variant='contained'
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
                </Stack>
            </div>
        </>
    )
}

export default LivingPlaceRegistrationStep2
