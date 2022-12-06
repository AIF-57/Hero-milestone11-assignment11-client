import logo from './logo.svg';
import './App.css';
import Navbar from './Pages/Shared/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import Blogs from './Pages/Blogs/Blogs';
import Home from './Pages/Home/Home';
import UpdateItem from './Pages/UpdateItem/UpdateItem';
import ManageInventories from './Pages/MangeInventories/ManageInventories';
import AddNewItem from './Pages/AddInventory/AddInventory';
import MyItems from './Pages/MyItems/MyItems';
import RequireAuth from './Pages/Shared/RequireAuth/RequireAuth';
import NotFound from './Pages/NotFound/NotFound';

function App() {
  return (
    <div className="App max-w-[1280px] mx-auto">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}/>
        <Route path='/blogs' element={<Blogs></Blogs>}/>
        <Route path='/manage-inventories' element={<ManageInventories></ManageInventories>}/>
        <Route path='/add-new-item' element={<AddNewItem></AddNewItem>}/>
        <Route path='/inventory/:id' element={<RequireAuth><UpdateItem></UpdateItem></RequireAuth>}/>
        <Route path='my-item' element={<MyItems></MyItems>}/>
        <Route path='/login' element={<Login></Login>}/>
        <Route path='/register' element={<Register></Register>}/>
        <Route path='*' element={<NotFound></NotFound>}/>
      </Routes>
    </div>
  );
}

export default App;
