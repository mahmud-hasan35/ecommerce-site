import {  Route, Routes } from "react-router";
import DashboardLayout from "./layout/DashboardLayout";
import Error from "./Error";
import HomeDashboard from "./pages/Dasboard/Home/Index";
import CreateProduct from "./pages/Dasboard/product";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Private from "./pages/auth/Private";
import IndexCategory from "./pages/Dasboard/category/index";
import CreateCategory from "./pages/Dasboard/category/Create";


export default function App() {
    return (
        <Routes>

            <Route path="login" element = {<Login/>}/>
            <Route path="register" element = {<Register/>}/>
            <Route  element = {<Private/>}>
            <Route path="/" element = {<DashboardLayout/>}>
            <Route index element= {<HomeDashboard/>}/>  

            {/* category */}
            <Route path="index-category" element={<IndexCategory/>}/>

            <Route path="create-Category" element = {<CreateCategory/>}/>
            <Route path= "edit-category/:id" element= {<CreateCategory/>}/>

            {/* product */}

            <Route path="/create-Product" element = {<CreateProduct/>}/>
            <Route path="/edit-Product/:id" element = {<CreateProduct/>}/>
            
                      {/* error */}

            <Route path="*" element = {<Error/>}/>

            </Route>
            </Route>


          
        </Routes>
    );
}
