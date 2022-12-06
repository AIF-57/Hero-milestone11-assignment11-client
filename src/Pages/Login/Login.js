import React from 'react';
import loginImg from '../../utilities/form2.jpg'
import { useForm } from "react-hook-form";
import { useAuthState, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import googleLogo from '../../utilities/Google-logo.png'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';


const Login = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
    const [signInWithGoogle, user2, loading2, error2] = useSignInWithGoogle(auth);
    const [user3] = useAuthState(auth);

    const navigate = useNavigate();
    const location = useLocation()
    const from = location.state?.from?.pathname || "/";
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        signInWithEmailAndPassword(data.email,data.password);
    };

    if(user3){
        navigate(from,{replace:true})
    }
    return (
        <div className='h-[80vh] grid grid-cols-2 items-center mx-5'>
            <img src={loginImg} alt="" />
            <div className="loginForm grid grid-cols-1 justify-center items-center">
                <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col items-center'>
                     <p className='text-2xl my-5 font-bold text-slate-900'>USER LOGIN</p>
                    <input placeholder='Email' className='border-2 border-gray-400 w-[60%] h-10 px-2 rounded' {...register("email", { required: true})} />
                    <input placeholder='Password' className='border-2 border-gray-400 w-[60%] h-10 px-2 rounded my-4' {...register("password")} />
                    {   
                        (error && <p className='text-red-500 text-[12px] font-bold'>{error.message}</p>)  
                        ||
                        (error2 && <p className='text-red-500 text-[12px] font-bold'>{error2.message}</p>)
                    }
                    <input type="submit" value='LOGIN' className='w-[60%] h-10 px-2 rounded bg-blue-700 text-white font-bold cursor-pointer' />
                    <span className='my-4 text-sm font-bold'>or</span>
                    <div className="socialLogin w-3/6 rounded-full h-10 bg-white px-2 cursor-pointer border border-gray-300">
                        <button onClick={()=>signInWithGoogle()} className='flex items-center w-full h-full'>
                            <img src={googleLogo} alt="" width="26"/>
                            <p className='text-sm mx-auto font-semibold'>Continue with Google</p>
                        </button>
                    </div>
                    <Link to={'/register'} className='mt-5'><span className='text-sm font-semibold hover:tracking-wide ease-in duration-100 hover:border-b border-black'>crate account</span> <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon></Link>
                </form>
            </div>
        </div>
    );
};

export default Login;