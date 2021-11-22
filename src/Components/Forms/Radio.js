import React from 'react'

import '../Styles/Forms/Radio.scss'

const RadioInput = (props) => {
    return (
        <>
            <div>
                <input type='radio' id={props.id} name={props.name} value={props.name} />
                <label for={props.name}>{props.label}</label>
            </div>
        </>
    )
}

export default RadioInput