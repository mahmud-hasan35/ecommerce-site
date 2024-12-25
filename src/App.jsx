import {  Route, Routes } from "react-router";
import DashboardLayout from "./layout/DashboardLayout";
import Error from "./Error";
import HomeDashboard from "./pages/Dasboard/Home/Index";
import CreateProduct from "./pages/Dasboard/product/Create";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Private from "./pages/auth/Private";
import IndexCategory from "./pages/Dasboard/category/index";
import CreateCategory from "./pages/Dasboard/category/Create";
import IndexProduct from "./pages/Dasboard/product/index";
import HomeLayout from "./layout/HomeLayout";
import HomeIndex from "./pages/frontEnd/home/Index";
import SingleProductIndex from "./pages/frontEnd/product/Index";
import CartDetails from "./pages/frontEnd/cartDetails/CartDetails";


export default function App() {
    return (
        <Routes>
            <Route path="/" element={<HomeLayout/>}>
            <Route index element ={<HomeIndex/>}/>
            <Route path="single-product/:id" element= {<SingleProductIndex/>}/>
            <Route path="cart-details" element={<CartDetails/>}/>
            </Route>
            <Route path="login" element = {<Login/>}/>
            <Route path="register" element = {<Register/>}/>
            <Route element = {<Private/>}>
            <Route path="dashboard" element = {<DashboardLayout/>}>
            <Route index element= {<HomeDashboard/>}/>  

            {/* category */}
            <Route path="index-category" element={<IndexCategory/>}/>

            <Route path="create-Category" element = {<CreateCategory/>}/>
            <Route path= "edit-category/:id" element= {<CreateCategory/>}/>

            {/* product */}
            <Route path="index-product" element = {<IndexProduct/>}/>
            <Route path="create-Product" element = {<CreateProduct/>}/>
            <Route path="edit-Product/:id" element = {<CreateProduct/>}/>
            
                      {/* error */}

            <Route path="*" element = {<Error/>}/>

            </Route>
            </Route>


          
        </Routes>
    );
}