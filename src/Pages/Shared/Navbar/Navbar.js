import { faBars, faMicrochip, faSignOutAlt, faUserAlt, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { useAuthState, useSignOut } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';

const Navbar = () => {
    const [user] = useAuthState(auth);
    const [signOut] = useSignOut(auth);
    // mobile menu
    const [open,setOpen] = useState(false);


    let userName;
    if(user){
        if(user.displayName){
            userName = user.displayName;
        }else{
            const userInfo = user?.email;
            const userEmailArr = userInfo.split("@");
            userName = userEmailArr[0];
        }
    };

    return (
        <div>
            <div className='sticky top-0 bg-white border-b'>
                <header className='grid grid-cols-3 py-2 items-center mx-5'>
                    <div className="logoArea text-left col-span-2 lg:col-span-1">
                        <Link to={'/'}>
                            <div className="logo">
                                <FontAwesomeIcon icon={faMicrochip} className='text-4xl text-slate-600 mx-1'></FontAwesomeIcon>
                                <span className='font-bold text-3xl text-red-600 relative bottom-[-5px]'>H</span>
                                <span className='font-semibold text-red-500 border-b-2 border-red-400'>ardware</span>
                            </div>
                        </Link>
                    </div>
                    <button onClick={()=>{setOpen(!open)}} className="navBtn lg:hidden relative text-right text-gray-900 mr-2">
                        {!open ? <FontAwesomeIcon icon={faBars} className='text-2xl'></FontAwesomeIcon> : <FontAwesomeIcon icon={faXmark} className='text-2xl'></FontAwesomeIcon>}
                    </button>
                    <nav className={`col-span-2 text-[12px] font-semibold text-right lg:static absolute duration-300 ease-in-out delay-75 ${open ? 'top-[100%] right-0 w-full bg-gray-50 flex flex-col p-2 justify-evenly items-center' : 'top-[-100px] left-[-400px]'}`}>
                        <Link to={'/blogs'}>Blogs</Link>
                        {
                            (!user) ? 
                            <>
                                <Link to={'/login'}><button className='mx-4 border w-20 h-8 bg-blue-400 text-white rounded'>Login</button></Link>                    
                                <Link to={'/register'}><button className='mx-4 border w-20 h-8 bg-black text-white rounded'>Register</button></Link>
                            </>
                            :(!user.emailVerified)
                            ?
                            <button onClick={()=>signOut()} className='text-lg mx-5'><FontAwesomeIcon icon={faSignOutAlt}></FontAwesomeIcon></button>
                            :
                            <>
                                <Link to={'/manage-inventories'} className='mx-5 my-1'>Inventories</Link>
                                <Link to={'/my-item'}>My items</Link>
                                <span className='mx-4 my-1'>
                                    <FontAwesomeIcon icon={faUserAlt} className='text-lg mx-1'></FontAwesomeIcon>
                                    {userName}
                                </span>
                                <button onClick={()=>signOut()} className='text-lg'><FontAwesomeIcon icon={faSignOutAlt}></FontAwesomeIcon></button>
                            </>
                        }   
                    </nav>
                </header>
            </div>
        </div>
    );
};

export default Navbar;