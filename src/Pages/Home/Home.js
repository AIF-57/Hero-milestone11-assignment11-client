import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import useInventory from '../../hooks/useInventory';
import Inventory from '../Inventory/Inventory';
import Footer from '../Shared/Footer/Footer';
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


    // analyticalData
    let totalItem = 0;
    let totalCategory = [];
    for (const item of inventories) {
        totalItem += Number(item.quantity);

        
        const items = item.category.toLowerCase();
        console.log(items)
        if(totalCategory.indexOf(items) === -1){
            totalCategory.push(items);
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
            <div className="quickAnalysis grid grid-cols-4 bg-gray-100 p-5 h-52 items-center">
                <div className="totalStocks">
                    <p className='text-gray-700 text-2xl font-semibold'>Total Stocks</p>
                    <p className='text-red-600 font-extrabold text-xl'>{totalItem}</p>
                </div>
                <div className="categories">
                    <p className='text-gray-700 text-2xl font-semibold'>Total Categories</p>
                    <p className='text-red-600 font-extrabold text-xl'>{totalCategory.length}</p>
                </div>
                <div className="category col-span-2 overflow-scroll w-[70%] h-full mx-auto p-2">
                    {
                        totalCategory.map(category => <div className='border border-gray-500 my-2 p-2 rounded w-[80%] mx-auto'>
                                <p className='font-semibold text-gray-900'>{category}</p>
                            </div>)
                    }
                </div>
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
            <Footer></Footer>
        </div>
    );
};

export default Home;