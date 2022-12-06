import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import useInventory from '../../hooks/useInventory';
import Inventory from '../Inventory/Inventory';
import './Home.css'


const Home = () => {
    const {inventories,setInventories} = useInventory();
    let showInventories = inventories.slice(0,6);

    const [searchResult,setSearchResult] = useState([]);
    const [searchErr,setSearchErr] = useState('');
    const { register, handleSubmit ,reset} = useForm();
    let filterResult;
    const onSubmit = data => {
        const filterItem = data.textOfInquiry.toLowerCase();
        filterResult = inventories.filter(inventory => inventory.name.toLowerCase().includes(filterItem) || 
                                                            inventory.category.toLowerCase().includes(filterItem) || 
                                                            inventory.brand.toLowerCase().includes(filterItem) || 
                                                            inventory.Model.toLowerCase().includes(filterItem));
        if(filterResult.length === 0){
            setSearchErr('No matched found!');
            return;
        }else{
            setSearchResult(filterResult);
            setSearchErr('');
            reset();
        }
    };

    return (
        <div>
            <div className="bannerSection h-[80vh] grid grid-cols-1 justify-center items-center">
                <form onSubmit={handleSubmit(onSubmit)} className='w-[50%] mx-auto'>
                    <input placeholder='search by name, model, brand, category' className='w-[75%] h-12 px-2 rounded-l outline-none' {...register("textOfInquiry", { required: true, maxLength: 20 })} />
                    <input type="submit" value='search' className='bg-red-600 w-[25%] h-12 text-white font-semibold rounded-r cursor-pointer' />
                </form>

            </div>
            <div className="inventory mx-5 my-10">
                {}
                {   (searchErr) 
                    ?
                    <p className='text-red-500 font-semibold text-xl border-b-2 border-red-500 border-dotted inline-block '>{searchErr}</p> 
                    :
                    (searchResult.length > 0) 
                    ?
                    searchResult.map(inventory=><Inventory key={inventory._id}
                                            inventory={inventory}>
                                           </Inventory>)
                    :
                    showInventories.map(inventory=><Inventory key={inventory._id}
                                            inventory={inventory}>
                                            </Inventory>)

                }
            </div>
        </div>
    );
};

export default Home;