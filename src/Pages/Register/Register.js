import React, { useState } from 'react';
import registerImg from '../../utilities/form.jpg'
import { useForm } from "react-hook-form";
import { useAuthState, useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Link, useLocation, useNavigate } from 'react-router-dom';


const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth,{sendEmailVerification:true});
    const [err,setErr] = useState('');


    const navigate = useNavigate();
    const location = useLocation()
    const from = location.state?.from?.pathname || "/";
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        if (data.password !== data.confirmPassword) {
            setErr('Please make sure your passwords are same for the both field!');
            return;
        }else{
            createUserWithEmailAndPassword(data.email,data.confirmPassword);
            setErr('');
            reset();
        }
    };

    if(user){
        console.log(user);
        navigate(from,{replace:true});
        alert('Please verify your email & reload the site');
    };
    return (
        <div className='lg:h-[80vh] grid  lg:grid-cols-2 items-center mx-5 py-10 lg:py-0'>
            <div className="loginForm grid grid-cols-1 justify-center items-center">
                <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col items-center'>
                    <p className='text-2xl my-5 font-bold text-slate-900'>REGISTER USER</p>
                    <input placeholder='Email' className='border-2 border-gray-400 w-[80%] lg:w-[60%] h-10 px-2 rounded' {...register("email", { required: true})} />
                    <input placeholder='Password' className='border-2 border-gray-400 w-[80%] lg:w-[60%] h-10 px-2 rounded my-4' {...register("password")} />
                    <input placeholder='Confirm Password' className='border-2 border-gray-400 w-[80%] lg:w-[60%] h-10 px-2 rounded mb-4' {...register("confirmPassword")} />
                    {(error && <p className='text-red-500 text-[12px] font-bold'>{error.message}</p>)
                    ||
                    (err && <p className='text-red-500 text-[12px] font-bold'>{err}</p>)
                    }
                    <input type="submit" value='REGISTER' className='w-[80%] lg:w-[60%] h-10 px-2 rounded bg-gray-900 text-white font-bold cursor-pointer' />
                    <Link to={'/login'} className='mt-5'><FontAwesomeIcon icon={faArrowLeft}></FontAwesomeIcon> <span className='text-sm font-semibold hover:tracking-wide hover:border-b border-black ease-in duration-100'>have an account</span></Link>
                </form>
            </div>
            <img src={registerImg} alt="" />
        </div>
    );
};

export default Register;