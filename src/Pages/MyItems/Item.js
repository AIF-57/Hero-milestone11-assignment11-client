import React from 'react';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Item = ({myItem,deleteItem}) => {

    return (
        <div className='border p-2 rounded'>
            <img src={myItem.image} alt="MyItem" className='border rounded-xl p-2' />
            <div className="additionalInfo my-5 text-left">
                <p className='text-slate-800 font-bold'>{myItem.name}</p>
                <p className='text-[12px] font-semibold'><span>Category:</span> {myItem.category}</p>
            </div>
            <button onClick={()=>deleteItem(myItem._id)} className='bg-red-300 w-full h-10 text-red-600 text-lg rounded-full'><FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon></button>
            </div>
    );
};

export default Item;