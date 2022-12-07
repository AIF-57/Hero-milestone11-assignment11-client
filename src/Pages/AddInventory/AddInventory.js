import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import auth from '../../firebase.init';

const AddNewItem = () => {
    const [user] = useAuthState(auth);
    const userEmail = user?.email
    const { register, handleSubmit ,reset } = useForm();
    const onSubmit = data => {
        fetch('http://localhost:5000/item',{
            method:'POST',
            headers:{
                'Content-Type':'application/json',
            },
            body:JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(data=>{
            reset();
            alert('Product added successfully')
        });
    };

    return (
        <div className='py-5'>
            <p className='text-lg font-semibold'>Add Item</p>
            <div className="addProduct lg:w-2/3 mx-auto h-screen flex flex-col justify-center">
            <form onSubmit={handleSubmit(onSubmit)} className='mx-auto py-10 rounded border shadow-2xl w-4/5 flex flex-col items-center'>
                <input defaultValue={userEmail} className='hidden w-4/6 px-2 outline-none text-sm h-8 border-b-2 border-white rounded' {...register("email", { required: true})} />
                <input placeholder='product name' className='w-4/6 px-2 outline-none text-sm h-10 border-2 border-gray-600 rounded' {...register("name", { required: true})} />
                <input placeholder='model' className='w-4/6 px-2 outline-none text-sm h-10 border-2 border-gray-600 rounded my-5' {...register("Model", { required: true})} />
                <input placeholder='category' className='w-4/6 px-2 outline-none text-sm h-10 border-2 border-gray-600 rounded' {...register("category",{ required: true})} />
                <input placeholder='brand' className='w-4/6 px-2 outline-none text-sm h-10 border-2 border-gray-600 rounded my-5' {...register("brand", { required:true })} />
                <input placeholder='price' className='w-4/6 px-2 outline-none text-sm h-10 border-2 border-gray-600 rounded' {...register("Price", { required:true })} />
                <input placeholder='quantity' className='w-4/6 px-2 outline-none text-sm h-10 border-2 border-gray-600 rounded my-5' {...register("quantity", { required:true })} />
                <input placeholder='image url' className='w-4/6 px-2 outline-none text-sm h-10 border-2 border-gray-600 rounded' {...register("image", { required:true })} />
                <input type="submit" value='Add' className='w-4/6 text-sm h-8 bg-yellow-500 text-white font-semibold rounded cursor-pointer my-5'/>
            </form>
            </div>

        </div>
    );
};

export default AddNewItem;