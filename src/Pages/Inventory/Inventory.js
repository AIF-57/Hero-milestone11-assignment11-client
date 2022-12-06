import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

const Inventory = ({inventory}) => {
    return (
            <div className="itemDetail border rounded-md grid grid-cols-9 my-2 items-center">
                <img src={inventory.image} alt="Item" width='100'/>
                <p className='col-span-3'>{inventory.name}</p>
                <div className="category">
                    <p className='text-sm font-semibold'>Category</p>
                    <p>{inventory.category}</p>
                </div>
                <div className="brand">
                    <p className='text-sm font-semibold'>Brand</p>
                    <p>{inventory.brand}</p>
                </div>
                <div className="price">
                    <p className='text-sm font-semibold'>Price</p>
                    <p>{inventory.Price}</p>
                </div>
                <div className="quantity">
                    <p className='text-sm font-semibold'>Quantity</p>
                    <p>{inventory.quantity}</p>
                </div>
                <Link to={`/inventory/${inventory._id}`}><FontAwesomeIcon icon={faPenToSquare} className='text-2xl text-orange-500'></FontAwesomeIcon></Link>
            </div>
    );
};

export default Inventory;