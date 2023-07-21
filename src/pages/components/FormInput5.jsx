import React , { useState } from 'react'

const style = {
    rInput: `mt-2 border-black border-[1px] w-full rounded placeholder-gray-400 text-sm px-6 py-3 block rInput`,
    inputLabel: `mt-6`,
    error: `text-red-400 text-xs wrap p-3 error`,
}

const FormInput5 = (props) => {
    const [focused, setFocused] = useState(false);
    const { errorMessage, id, onChange, label , ...inputprops } = props;

    const handleFocus = (e) => {
        setFocused(true);
    };
  return (
    <div>
        <div className={style.inputLabel}>{label}</div>
        <input
            className={style.rInput}
            onChange={onChange}
            onFocus={()=>inputprops.name==="password" && setFocused(true)}
            {...inputprops}
            onBlur={handleFocus}
            focused={focused.toString()}
        />
        <span className={style.error}>{errorMessage}</span>
    </div>
  )
}

export default FormInput5