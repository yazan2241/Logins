import React, { useState } from 'react'
import FormInput3 from './components/FormInput3';
import { BsApple, BsFacebook } from 'react-icons/bs';
import { FaFacebook } from 'react-icons/fa';

import { FcGoogle } from 'react-icons/fc';
import phone from '../assets/phone.png'
import loginImg from '../assets/login3.png'
import mail from '../assets/mail.png'
import lock from '../assets/lock.png'

const style = {
    wrapper: `h-screen`,
    content: `flex lg:flex-row h-full flex-col`,
    contentLeft: `flex basis-1/2 h-full sm:p-32 pt-32 px-8`,
    fullWidth: `w-full`,
    logo: `font-bold absolute top-6 left-6`,
    signInText: `font-bold text-3xl`,
    signInSimple: `text-sm mt-3`,

    registerText: `text-md `,
    registerButton: `text-blue-700 font-bold hover:text-blue-800 hover:underline`,



    contentRight: ' bg-[#000842] hidden sm:flex flex-col justify-around basis-1/2 rounded-lg m-4',
    rcontent: ``,
    rlogin: `bg-[#0C21C1] rounded-3xl text-white flex items-center justify-center w-full mt-6 py-3 shadow-xl`,
    phoneImg: `w-4 h-4 mt-1`,
    phoneArea: `absolute top-8 right-6 text-white flex`,
    rfooter: `flex flex-col items-start ml-32`,
    rsignInText: `text-white font-bold text-xl`,
    rsignIn: `text-white text-sm`,

    forgotPassword: `mt-3 flex justify-between`,
    rforgot: `text-xs flex justify-end mt-3 text-[#B0B0B0] hover:text-blue-600 hover:underline`,
    rcontinue: `text-[#B5B5B5] flex items-center justify-center text-md mt-5`,
    loginButtons: `flex items-center justify-center mt-3`,
    loginButton: `px-2 text-6xl`,


    loginImg: `w-[400px] h-[400px]`,

}
const Login3 = () => {

    const [values, setValues] = useState({
        email: "",
        password: "",
    });

    const inputs = [
        {
            id: 1,
            name: "email",
            type: "email",
            label: "Email",
            image : mail,
            placeholder: "Enter email or username",
            errorMessage: "should be a valid email address!",
            required: true,
        },
        {
            id: 2,
            name: "password",
            type: "password",
            placeholder: "Password",
            label: "Password",
            image : lock,
            errorMessage: "should be more than 8 charectures and contains at least one charecture , one letter and one symbol",
            pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
            required: true,
        },
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };

    return (
        <div className={style.wrapper}>
            <div className={style.logo}>Your Logo</div>
            <div className={style.content}>
                <div className={style.contentLeft}>
                    <div className={style.fullWidth}>
                        <div className={style.signInText}>Sign in</div>
                        <div className={style.signInSimple}>if you don't have an account register</div>
                        <div className={style.signInSimple}>You can <span className={style.registerButton}>Register here !</span></div>

                        <form onSubmit={handleSubmit} className={style.fullWidth}>

                            {inputs.map((input) => (
                                <FormInput3 
                                    key={input.id}
                                    value={values[input.name]}
                                    onChange={onChange}
                                    {...input}
                                />
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

                        <div className={style.rcontinue}>or continue with</div>

                        <div className={style.loginButtons}>
                            <FaFacebook className={style.loginButton} />
                            <BsApple className={style.loginButton} />
                            <FcGoogle className={style.loginButton} />
                        </div>

                    </div>
                </div>
                <div className={style.phoneArea}>
                    <img src={phone} alt='phone' className={style.phoneImg} />
                    <div>+963991072487</div>
                </div>
                <div className={style.contentRight}>
                    <div className='flex justify-center w-full'>
                        <img src={loginImg} alt='login image' className={style.loginImg} />
                    </div>
                    <div className={style.rfooter}>
                        <div className={style.rsignInText}>Sign in to name</div>
                        <div className={style.rsignIn}>login is simple</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login3