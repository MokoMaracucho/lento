import React, { Component } from 'react'

import { Header, LivingPlaceRegistrationTimeline } from '../Components/Registration/index'
import {
    LivingPlaceRegistrationStep1,
    LivingPlaceRegistrationStep2,
    LivingPlaceRegistrationStep3
} from '../Validations/Registration/index'

import '../Styles/Pages/LivingPlaceRegistration.scss'

class LivingPlaceRegistration extends Component  {

    complex_facility_types = []
    
    living_places_registration_informations = {
        step: 1,
        /* some_questions: { */
            part_of_a_complex: '',
            existing_complex: '',
            existing_complex_name: '',
            residence_type: '',
            living_place_type: ''
        /* }, */
        /* complex_informations: {
            complex_name: '',
            street: '',
            complex_number: '',
            complex_number_extension: '',
            city: '',
            postal_code: '',
            country: '',
            phone_number: '',
            phone_number_landcode: '',
            email_adress: '',
            opening_hour: {
                open: '',
                close: ''
            },
            complex_facility_types: []
        },
        residence_informations: {
            residence_number: '',
            residence_number_extension: '',
            floor: '',
            rental_permit: '',
            always_visible_in_platform: '',
            number_of_rooms: '',
            residence_facility_types: []
        },
        rooms_informations: [] */
    }
    
    room_informations = {
        room_type: '',
        extension_number: '',
        floor: '',
        dimension: '',
        facility_types: [],
        co_living: '',
        number_of_living_places: ''
    }
    
    living_places_informations = {
        maximum_stay_duration: '',
        rental_price_term: '',
        description: '',
        changeover_time: '',
        B2B_deposit: '',
        B2B_rental_price: '',
        B2C_deposit: '',
        B2C_rental_price: '',
        SNF_certificate: '',
        AKF_certificate: '',
        status_at_point_of_registering: '',
        services_cost: '',
        facily_types: []
    }
    
    /* const [state, setState] = useState(living_places_registration_informations) */

    nextStep = () => {
        const { step } = this.living_places_registration_informations
        this.setState({
            step: step + 1
        })
    }

    previewStep = () => {
        const { step } = this.living_places_registration_informations
        this.setState({
            step: step - 1
        })
    }

    handleChange = input => e => {
        this.setState({
            [input]: e.target.living_places_registration_informations
        })
    }

    render() {

        const { step } = this.living_places_registration_informations

        const {
            /* some_questions: { */
                part_of_a_complex,
                existing_complex,
                existing_complex_name,
                residence_type,
                living_place_type
            /* }, */
            /* complex_informations: {
                complex_name,
                street,
                complex_number,
                complex_number_extension,
                city,
                postal_code,
                country,
                phone_number,
                phone_number_landcode,
                email_adress,
                opening_hour: {
                    open,
                    close
                },
                complex_facility_types: []
            },
            residence_informations: {
                residence_number,
                residence_number_extension,
                floor,
                rental_permit,
                always_visible_in_platform,
                number_of_rooms,
                residence_facility_types: []
            },
            rooms_informations: [] */
        } = this.living_places_registration_informations

        const values = {
            /* some_questions: { */
                part_of_a_complex,
                existing_complex,
                existing_complex_name,
                residence_type,
                living_place_type
            /* }, */
            /* complex_informations: {
                complex_name,
                street,
                complex_number,
                complex_number_extension,
                city,
                postal_code,
                country,
                phone_number,
                phone_number_landcode,
                email_adress,
                opening_hour: {
                    open,
                    close
                },
                complex_facility_types: []
            },
            residence_informations: {
                residence_number,
                residence_number_extension,
                floor,
                rental_permit,
                always_visible_in_platform,
                number_of_rooms,
                residence_facility_types: []
            },
            rooms_informations: [] */
        }

        switch(step) {
            case 1:
                return (
                    <>
                        <Header />
                        <LivingPlaceRegistrationTimeline />
                        <LivingPlaceRegistrationStep1
                            nextStep={ this.nextStep }
                            handleChange={ this.handleChange }
                            values={values}
                        />
                    </>
                )
            case 2:
                return (
                    <>
                        <Header />
                        <LivingPlaceRegistrationTimeline />
                        <LivingPlaceRegistrationStep2
                            nextStep={ this.nextStep }
                            previewStep={ this.previewStep }
                            handleChange={ this.handleChange }
                            /* values={values} */
                        />
                    </>
                )
            case 3:
                return (
                    <>
                        <Header />
                        <LivingPlaceRegistrationTimeline />
                        <LivingPlaceRegistrationStep3
                            nextStep={ this.nextStep }
                            previewStep={ this.previewStep }
                            handleChange={ this.handleChange }
                            /* values={values} */
                        />
                    </>
                )
            default:
                return null
        }
    }
}

export default LivingPlaceRegistration
