import React, { useState } from 'react';



export function Input({error, label, placeholder, type, ...rest }){

    const [touched, setTouched] = useState(false);

    return (
        <div className="form-group">
            <label htmlFor={rest.name}>{label}</label>
            <input Type={type} className="form-fields" {...rest} onBlur={() => setTouched(true)} placeholder={placeholder} />
            <span className="text-error">{touched && error}</span>
        </div>

    );
}


export function TextArea ({error, label, placeholder, ...rest }){


    const [touched, setTouched] = useState(false);

    return (
        <div className="form-group">
            <label htmlFor={rest.name}>{label}</label>
            <textarea className="form-fields" {...rest} onBlur={() => setTouched(true)} placeholder={placeholder} ></textarea>
            <span className="text-error">{touched && error}</span>
        </div>

    );
}
