import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import useInventory from '../../hooks/useInventory';
import Footer from '../Shared/Footer/Footer';
import Item from './Item';


const MyItems = () => {
    const [user] = useAuthState(auth);
    const userEmail = user?.email;
    const {inventories,setInventories} = useInventory();

    const myItems = inventories.filter(inventory => inventory?.email === userEmail);


    //todo: delete Item
    const navigate = useNavigate()
    const deleteItem = id =>{
        const confirm = window.confirm('Do you want to delete this item ?');
        if(confirm){
            const url = `https://harware.onrender.com/delete/${id}`
            fetch(url,{
                method:'DELETE'
            })
            .then(res=>res.json())
            .then(data=>{
                if(data.deletedCount > 0){
                    const restMyItems = myItems.filter(item => id !== item._id);
                    setInventories(restMyItems);
                    if (restMyItems.length < 1) {
                            navigate('/manage-inventories')
                    }
                }
            })
        };
    }
    
    return (
        <div>
            <div className="itemsDetail min-h-screen">
                <p className='font-semibold my-8'>My Items: <span className='text-gray-500 font-extrabold text-lg'>{myItems.length }</span></p>
                <div className="itemContainer grid grid-cols-1 lg:grid-cols-3 p-5 gap-x-5">
                    {
                        myItems.map(myItem => <Item
                            key={myItem._id}
                            myItem={myItem}
                            deleteItem={deleteItem}></Item>)
                    }
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MyItems;