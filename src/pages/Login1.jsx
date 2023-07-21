import React, { useState } from 'react'

import Saly from '../assets/Saly.png'
import { BsFacebook, BsApple } from 'react-icons/bs'
import { FcGoogle } from 'react-icons/fc'
import FormInput from './components/FormInput'

const style = {
    wrapper: `h-screen`,
    content: `flex lg:flex-row h-full flex-col`,
    contentLeft: `flex sm:w-4/6 w-full lg:h-full lg:items-end items-center h-auto mt-8 lg:mt-1 sm:justify-center justify-start px-16 pt-16 lg:justify-center`,

    signInText: `font-bold text-3xl`,
    signInSimple: `font-bold text-2xl mt-3`,
    textLeft: `mt-8`,
    registerText: `text-md `,

    mainLeft: `flex`,
    registerButton: `text-blue-700 hover:text-blue-800 hover:underline`,
    innerMainLeft: `flex`,
    innerMainRight: `flex`,
    innerMainImg: `w-[180px] h-[350px] hidden lg:block`,
    logo: `font-bold absolute top-6 left-6`,


    contentRight: 'flex flex-col w-full lg:h-full items-center justify-center h-auto mt-8 lg:mt-1',
    rcontent: `w-4/6`,
    rSignInText: `font-bold text-2xl hidden lg:block`,
    rInput: `mt-3 bg-[#F0EFFF] w-full rounded placeholder-blue-600 text-sm px-6 py-3 block`,
    rforgot: `text-xs flex justify-end w-full mt-3 text-[#B0B0B0] hover:text-blue-600 hover:underline`,
    rlogin: `bg-[#4D47C3] text-white flex items-center justify-center w-full rounded mt-6 py-3 shadow-xl`,
    rcontinue: `text-[#B5B5B5] flex items-center justify-center text-md mt-5`,
    loginButtons: `flex items-center justify-center mt-3`,
    loginButton: `px-2 text-6xl`,
}

const Login1 = () => {

    const [values, setValues] = useState({
        email : "",
        password : "",
    });

    const inputs = [
        {
            id : 1,
            name : "email",
            type : "email",
            placeholder : "Enter email or username",
            errorMessage : "should be a valid email address!",
            required : true,
        },
        {
            id : 2,
            name : "password",
            type : "password",
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
                    <div>
                        <div className={style.signInText}>Sign in to</div>
                        <div className={style.signInSimple}>Sign in is simply</div>
                        <div className={style.innerMainLeft}>
                            <div className={style.textLeft}>
                                <div className={style.registerText}>if you don't have an account register</div>
                                <div className={style.registerText}>You can <span className={style.registerButton}>Register here!</span></div>
                            </div>
                            <div className={style.innerMainRight}>
                                <img className={style.innerMainImg} src={Saly} alt='Saly girl' />
                            </div>
                        </div>
                    </div>
                </div>
                <div className={style.contentRight}>
                    <div className={style.rcontent}>

                        <div className={style.rSignInText}>Sign in</div>
                        <form onSubmit={handleSubmit}>
                           
                           {inputs.map((input)=>(
                                <FormInput key={input.id} value = {values[input.name]} onChange = {onChange} {...input} />
                           ))}

                            <div className={style.rforgot}>Forgot password?</div>
                            <button className={style.rlogin}>Login</button>
                        </form>
                        <div className={style.rcontinue}>or continue with</div>

                        <div className={style.loginButtons}>
                            <BsFacebook className={style.loginButton} />
                            <BsApple className={style.loginButton} />
                            <FcGoogle className={style.loginButton} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login1