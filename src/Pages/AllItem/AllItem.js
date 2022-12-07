import React from 'react';
import { useParams } from 'react-router-dom';
import useInventory from '../../hooks/useInventory';
import Inventory from '../Inventory/Inventory';
import Footer from '../Shared/Footer/Footer';

const AllItem = () => {
    const {item} = useParams();

    const {inventories,setInventories} = useInventory();
    const queryItems = inventories.filter(inventory => inventory.name.toLowerCase().includes(item) || 
                                                        inventory.category.toLowerCase().includes(item) || 
                                                        inventory.brand.toLowerCase().includes(item) || 
                                                        inventory.Model.toLowerCase().includes(item));

    console.log(queryItems);
    return (
        <div>
            <div className='min-h-screen'>
                <p className='my-5 font-semibold border-b border-gray-700 inline-block'>all {item}</p>
                <div className='m-5'>
                {
                    queryItems.map(inventory=><Inventory key={inventory._id}
                        inventory={inventory}>
                    </Inventory>)
                }
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default AllItem;