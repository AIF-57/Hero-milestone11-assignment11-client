import { faMicrochip } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <div className='sticky top-0 bg-white border-b'>
                <header className='grid grid-cols-3 py-2 items-center mx-5'>
                    <div className="logoArea text-left">
                        <Link to={'/'}>
                            <div className="logo">
                                <FontAwesomeIcon icon={faMicrochip} className='text-4xl text-slate-600 mx-1'></FontAwesomeIcon>
                                <span className='font-bold text-3xl text-red-600 relative bottom-[-5px]'>H</span>
                                <span className='font-semibold text-red-500 border-b-2 border-red-400'>ardware</span>
                            </div>
                        </Link>
                    </div>
                    <nav className='col-span-2 text-[12px] font-semibold text-right'>
                            <Link to={'/blogs'}>Blogs</Link>
                            <Link to={'/manage-inventories'} className='mx-5'>Inventories</Link>
                            <Link to={'/my-item'}>My items</Link>
                            <Link to={'/login'}><button className='mx-4 border w-20 h-8 bg-blue-800 text-white rounded'>Login</button></Link>                    
                            <Link to={'/register'}><button className='mx-4 border w-20 h-8 bg-black text-white rounded'>Register</button></Link>
                    </nav>
                </header>
            </div>
        </div>
    );
};

export default Navbar;