import React from 'react';
import { Link } from 'react-router-dom';
import useInventory from '../../hooks/useInventory';
import Inventory from '../Inventory/Inventory';
import './ManageInventories.css'

const ManageInventories = () => {
    const {inventories} = useInventory();

    return (
        <div>
            <div className="addNewItem h-52 flex items-center justify-center">
                <Link to={'/add-new-item'} className='w-40 h-14 border-2 border-dashed p-2 rounded'>
                    <button className='text-lg font-semibold bg-white w-full h-full rounded'>Add item
                    </button>
                </Link>
            </div>
            <div className="allInventory mx-5 my-10 ">
            {
                inventories.map(inventory=><Inventory key={inventory._id}
                                        inventory={inventory}>
                                        </Inventory>)
            }
            </div>
        </div>
    );
};

export default ManageInventories;