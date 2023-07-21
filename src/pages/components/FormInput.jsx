import React, { useState } from 'react'
import './formInput.css';

const style = {
    rInput: `mt-3 bg-[#F0EFFF] w-full rounded placeholder-blue-400 text-sm px-6 py-3 block rInput`,
    error: `text-red-400 text-xs wrap p-3 error`,
}
const FormInput = (props) => {
    const [focused, setFocused] = useState(false);
    const { errorMessage, id, onChange, ...inputprops } = props;

    const handleFocus = (e) => {
        setFocused(true);
    };

    return (
        <div>
            <input className={style.rInput} onChange={onChange} onFocus={()=>inputprops.name==="password" && setFocused(true)} {...inputprops} onBlur={handleFocus} focused={focused.toString()} />
            <span className={style.error}>{errorMessage}</span>
        </div>
    )
}

export default FormInput