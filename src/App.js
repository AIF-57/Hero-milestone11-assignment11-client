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
import AllItem from './Pages/AllItem/AllItem';

function App() {
  return (
    <div className="App max-w-[1280px] mx-auto">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}/>
        <Route path='/blogs' element={<Blogs></Blogs>}/>
        <Route path='/manage-inventories' element={<RequireAuth><ManageInventories></ManageInventories></RequireAuth>}/>
        <Route path='/add-new-item' element={<RequireAuth><AddNewItem></AddNewItem></RequireAuth>}/>
        <Route path='/inventory/:id' element={<RequireAuth><UpdateItem></UpdateItem></RequireAuth>}/>
        <Route path='/all/:item' element={<AllItem></AllItem>}/>
        <Route path='/my-item' element={<RequireAuth><MyItems></MyItems></RequireAuth>}/>
        <Route path='/login' element={<Login></Login>}/>
        <Route path='/register' element={<Register></Register>}/>
        <Route path='*' element={<NotFound></NotFound>}/>
      </Routes>
    </div>
  );
}

export default App;
