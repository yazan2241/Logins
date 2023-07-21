import React , { useState } from 'react'

const style = {
    rInput: `mt-1 border-b-2 border-[#999999] w-full placeholder-gray-400 text-sm px-6 block lInput`,
    inputLabel: `mt-4 text-sm text-gray-400`,
    error: `text-red-400 text-xs wrap p-3 error`,
}

const FormInput3 = (props) => {
    const [focused, setFocused] = useState(false);
    const { errorMessage, id, onChange, label , image , ...inputprops } = props;

    const handleFocus = (e) => {
        setFocused(true);
    };
  return (
    <div>
        <div className={style.inputLabel}>{label}</div>
        <input
            style={{ 'backgroundImage': 'url(' + image + ')', 'backgroundPositionY' : 'center' , 'backgroundRepeat' : 'no-repeat' , 'paddingLeft' : '30px' }}
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

export default FormInput3