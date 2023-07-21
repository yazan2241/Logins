import React, { useState } from 'react'
import FormInput5 from './components/FormInput5';
import loginImg from '../assets/login5Img.png'
import Card from './components/Card'
import image2 from '../assets/login3.png'
import { BsApple } from 'react-icons/bs';
import { FaFacebook } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';

const style = {
    wrapper: `h-screen relative`,
    content: `flex h-full flex-col`,
    contentLeft: `bg-[#0089ED] flex flex-row basis-1/2 w-full h-full `,
    lContent: `flex flex-row w-full h-full pl-16 pt-16 pr-16`,

    logo: `font-bold text-white absolute top-6 left-6`,
    signInText: `font-bold text-3xl text-white`,
    signInSimple: `text-lg mt-1 text-white`,
    signInPar: `text-xs mt-4 text-white wrap`,

    lImg: `w-full h-full`,





    registerText: `text-md `,
    registerButton: `text-[#C10C99] font-bold hover:text-blue-800 hover:underline`,



    contentRight: 'flex-col px-16 pt-8 basis-1/2 w-full h-full',
    rcontent: `flex mt-3`,

    rlogin: `bg-blue-600 rounded-xl text-white flex items-center justify-center w-full mt-6 py-3 shadow-xl`,

    forgotPassword: `mt-1 flex justify-end`,
    rforgot: `text-xs flex justify-end mt-1 text-blue-400 hover:text-blue-600 hover:underline`,
    rcontinue: `text-[#B5B5B5] flex items-center justify-center text-md mt-5`,
    loginButtons: `flex items-center justify-center mt-3`,
    loginButton: `px-2 text-6xl`,
    fullWidth: `w-full`,



    box: `rounded-3xl w-[450px] bg-white absolute top-0 right-10 p-8 m-16 shadow-xl`,
    tWellcome: `flex items-center justify-between w-full`,
    tWellcomeSpan: `text-lg text-blue-500 font-bold`,
    tRegister: `text-sm text-gray-400`,
    tRegisterButton: `text-blue-400 text-sm hover:underline hover:text-blue-800`,
    tSignIn: `text-4xl font-bold mt-3`,

    signInButtons: `flex items-center justify-between mt-5`,
    signInButton: `bg-[#E9F1FF] flex p-2 rounded items-center justify-center flex-1 h-10 text-blue-400 gap-4`,
    signInSocial: `bg-[#F6F6F6] flex p-2 rounded flex items-center justify-center h-10 w-10 ml-3`,

}

const Login5 = () => {

    const [logins, setLogins] = useState([
        {
            id: `1`,
            icon: loginImg,
            name: `John peter`,
            active: `Active 1 day ago`
        },
        {
            id: `2`,
            icon: image2,
            name: `Alina shmen`,
            active: `Active 4 day ago`
        },
    ]);


    const [values, setValues] = useState({
        email: "",
        password: "",
    });

    const inputs = [
        {
            id: 1,
            name: "email",
            type: "email",
            label: "enter you username or email",
            placeholder: "username or email address",
            errorMessage: "should be a valid email address!",
            required: true,
        },
        {
            id: 2,
            name: "password",
            type: "password",
            placeholder: "Password",
            label: "enter your Password",
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
                    <div className={style.lContent}>
                        <div className='w-80 mt-6'>
                            <div className={style.signInText}>Sign in to</div>
                            <div className={style.signInSimple}>Lorem Ipsum simply</div>
                            <div className={style.signInPar}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste tempora adipisci magnam, aspernatur, eius ipsum provident reiciendis perferendis aliquid unde laboriosam! Expedita fugit quibusdam quis, nulla est iure quam inventore. </div>
                        </div>
                        <div className='ml-8'>
                            <img src={loginImg} alt='login img' className='w-[250px] h-[250px]' />
                        </div>
                    </div>
                </div>
                <div className={style.contentRight}>
                    <div>Login As</div>
                    <div className={style.rcontent}>
                        {logins.map((login) => (
                            <Card
                                key={login.id}
                                {...login}

                            />
                        ))}
                    </div>
                </div>
            </div>
            <div className={style.box}>
                <div className={style.tWellcome}>
                    <div>Wellcome to <span className={style.tWellcomeSpan}>Login</span></div>
                    <div className={style.tRegister}>No Account?<br /><span className={style.tRegisterButton}>Sign Up</span></div>
                </div>
                <div className={style.tSignIn}>Sign In</div>
                <div className={style.signInButtons}>
                    <button className={style.signInButton}><FcGoogle /> Sign in with google</button>
                    <button className={style.signInSocial}><FaFacebook /></button>
                    <button className={style.signInSocial}><BsApple /></button>
                </div>




                <form onSubmit={handleSubmit} className={style.fullWidth}>

                    {inputs.map((input) => (
                        <FormInput5
                            key={input.id}
                            value={values[input.name]}
                            onChange={onChange}
                            {...input}
                        />
                    ))}

                    <div className={style.forgotPassword}>
                        <div className={style.rforgot}>Forgot Password?</div>
                    </div>
                    <button className={style.rlogin}>Sign In</button>
                </form>

            </div>
        </div>
    )
}

export default Login5