import React from 'react'

import { Button } from '@material-ui/core'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import '../Styles/Nav.scss'
import { ButtonBase } from '@mui/material';

const Nav = () => {
    return (
        <>
            <nav>
                <ul>
                    <Button
                        variant='outlined'
                        color='black'
                        style={{
                            borderRadius: 50,
                            fontFamily: 'DMSansMedium'
                        }}
                        endIcon={
                            <KeyboardArrowDownIcon
                                fontSize="small"
                            />
                        }
                    >
                        EN
                    </Button>
                    <ButtonBase>About us</ButtonBase>
                    <ButtonBase>Sign up</ButtonBase>
                    <ButtonBase>Log in</ButtonBase>
                    <Button
                        variant='contained'
                        style={{
                            backgroundColor: '#5398D4',
                            borderRadius: 50,
                            fontFamily: 'DMSansMedium',
                            boxShadow: 'unset'
                        }}
                    >
                        Services
                    </Button>
                </ul>
            </nav>
        </>
    )
}

export default Nav
