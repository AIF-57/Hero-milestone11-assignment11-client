import React from 'react';

const date = new Date();
const year = date.getFullYear();
const Footer = () => {
    return (
        <div className='bg-[#3c404d] px-4 py-4'>
            <footer className='text-[#999999] text-[10px] flex justify-between'>
                <p>&#169; {year} Hardware Ltd | All rights reserved</p>
                <p>Powered By: Hardware Soft</p>
            </footer>
        </div>
    );
};

export default Footer;