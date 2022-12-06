import { faGhost } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const NotFound = () => {
    return (
        <div className='h-screen bg-black flex items-center justify-center'>
            <div>
                <FontAwesomeIcon icon={faGhost} className='text-6xl text-white'/>
                <p className='text-2xl font-bold text-white'>Page Not Found!</p>
            </div>
        </div>
    );
};

export default NotFound;