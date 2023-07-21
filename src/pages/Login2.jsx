import React , { useState } from 'react'

import login2Img from '../assets/login2.png'
import FormInput2 from './components/FormInput2';

const style = {
    wrapper: `bg-[#ffffff] h-screen`,
    logo: `font-bold absolute top-6 left-6`,
    content: `flex lg:flex-row h-full flex-col sm:p-6 p-2`,
    contentLeft: `flex basis-2/5 w-full lg:h-full items-center h-auto mt-4 lg:mt-1 sm:justify-center justify-start sm:px-16 px-4 pt-16 lg:justify-center`,
    lContent: `border-[1px] shadow-xl w-full rounded border-[#ABABAB] p-6`,
    welcome: `text-2xl`,
    signIn: `font-bold text-xl mt-5`,
    signInSimply: `mt-2 text-lg`,
    form: `mt-5`,
    
    forgotPassword: `mt-3 flex justify-between`,

    contentRight: 'flex flex-col w-full basis-3/5 lg:h-full items-center justify-center h-auto mt-8 lg:mt-1',
    rcontent: `w-full`,
    rightImg: `w-full h-full lg:block hidden `,
    rforgot: `text-xs flex justify-end mt-3 text-[#B0B0B0] hover:text-blue-600 hover:underline`,
    rlogin: `bg-[#000000] text-white flex items-center justify-center w-full rounded mt-6 py-3 shadow-xl`,

    register : `text-md text-[#B0B0B0] mt-12 text-center`,
    registerButton: `font-bold text-black hover:text-blue-800 hover:underline`,

}

const Login2 = () => {

    const [values, setValues] = useState({
        email : "",
        password : "",
    });

    const inputs = [
        {
            id : 1,
            name : "email",
            type : "text",
            label : "User name",
            placeholder : "Enter your username",
            errorMessage : "Please enter a valid username!",
            required : true,
        },
        {
            id : 2,
            name : "password",
            type : "password",
            label : "Password",
            placeholder : "Password",
            errorMessage : "should be more than 8 charectures and contains at least one charecture , one letter and one symbol",
            pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
            required : true,
        },
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const onChange = (e) => {
        setValues({...values , [e.target.name] : e.target.value});
    };

    return (
        <div className={style.wrapper}>
            <div className={style.logo}>Your Logo</div>
            <div className={style.content}>
                <div className={style.contentLeft}>
                    <div className={style.lContent}>
                        <div className={style.welcome}>Welcome !</div>
                        <div className={style.signIn}>Sign in to</div>
                        <div className={style.signInSimply}>Sign in is simply</div>

                        <form className={style.form} onSubmit={handleSubmit}>
                            {inputs.map((input)=>(
                                <FormInput2 key={input.id} value = {values[input.name]} onChange = {onChange} {...input} />
                           ))}
                            
                            <div className={style.forgotPassword}>
                                <div className='flex'>
                                    <input type='checkbox' value='Remember me' />
                                    <div className='pl-2 mt-1'>Remember me</div>
                                </div>
                                <div className={style.rforgot}>Forgot Password?</div>
                            </div>
                            <button className={style.rlogin}>Login</button>
                        </form>

                        <div className={style.register}>
                            Don't have an account? <span className={style.registerButton}>Register</span>
                        </div>
                    </div>
                </div>

                <div className={style.contentRight}>
                    <div className={style.rcontent}>
                        <img className={style.rightImg} src={login2Img} alt='small team' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login2