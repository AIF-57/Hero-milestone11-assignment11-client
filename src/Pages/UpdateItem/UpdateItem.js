import { faTruck, faArrowsRotate, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { useNavigate, useNavigation, useParams } from 'react-router-dom';

const UpdateItem = () => {
    const {id} = useParams();


    const [detail,setDetail] = useState({});
    const url = `http://localhost:5000/item/${id}`;
    fetch(url)
    .then(res=>res.json())
    .then(data=>{
        setDetail(data);
    });

    const remainingQuantities = Number(detail.quantity);


    // reStockItem
    const reStockItem = event =>{
        event.preventDefault();
        const value = Number(event.target.quantity.value);
        const typeofValue = isNaN(value);
        if (!typeofValue && value > 0) {
            const newQuantities = {quantity: remainingQuantities + value}
            const url = `http://localhost:5000/update/${id}`
            fetch(url,{
                method: 'PUT',
                headers: {
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(newQuantities)
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data);
                event.target.reset();
            });
        }else{
            alert('Invalid Input');
            event.target.reset();
        }
    };
    // deliveredQuantities
    const deliveredQuantities = () =>{
        const delivered = 1;
        if (remainingQuantities > 0) {
            const newQuantities = {quantity: remainingQuantities - delivered};
            const url = `http://localhost:5000/update/${id}`
            fetch(url,{
                method: 'PUT',
                headers: {
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(newQuantities)
            })
            .then(res=>res.json())
            .then(data=>console.log(data));    
        }else{
            alert('Out of stock')
        }
    };
    // deleteItem
    const navigate = useNavigate()
    const deleteItem = () =>{
        const confirm = window.confirm('Do you want to delete this item ?');
        if(confirm){
            const url = `http://localhost:5000/delete/${id}`
            fetch(url,{
                method:'DELETE'
            })
            .then(res=>res.json())
            .then(data=>{
                if(data.deletedCount > 0){
                    navigate('/manage-inventories')
                }
            })
        };
    }

    return (
        <div className='my-10 h-screen'>
            <div className="updateDetail grid grid-cols-5 items-center mx-5 gap-x-5">
                <div className="itemImg col-span-2">
                    <img src={detail.image} alt="Item_Image" width='400'/>
                </div>
                <div className="additionalInfo col-span-3 text-left text-sm font-semibold">
                    <p className='font-semibold text-xl text-blue-700'>{detail.name}</p>
                    <div className="model my-5">
                        <p>Model: <span className='text-[16px] font-normal'>{detail.Model}</span></p>
                        <p>Price: <span className='text-[16px] font-normal'>{detail.Price}</span></p>
                    </div>
                    <div className="manageQuantities grid grid-cols-3 gap-5 items-center">
                        <div className='col-span-2'>
                            <div className="delivered grid grid-cols-3 items-center">
                                <p>Quantity:</p>
                                <span className='text-[16px] font-normal'> {detail.quantity} </span>
                                <button onClick={deliveredQuantities} className='rounded h-8 px-4 bg-orange-500 text-white flex items-center justify-center'>
                                    <span>Delivered</span>
                                    <FontAwesomeIcon icon={faTruck}></FontAwesomeIcon>
                                </button>
                            </div>
                            <div className="reStockItem  mt-5">
                                <form onSubmit={reStockItem} className='grid grid-cols-3'>
                                    <input type="text" name='quantity' placeholder='restock item' className='outline-none border border-slate-400 rounded-full px-5 h-8 mr-2 col-span-2' />
                                    <button className='rounded h-8 px-4 bg-green-500 text-white flex items-center justify-center'>
                                        <span>Add &nbsp;</span>
                                        <FontAwesomeIcon icon={faArrowsRotate}></FontAwesomeIcon>
                                    </button>
                                </form>
                            </div>
                        </div>
                        <button onClick={()=>deleteItem(id)} className='ml-auto mr-5 bg-red-300 w-10 h-10 text-red-600 text-lg rounded-full'><FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateItem;