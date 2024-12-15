import {  Route, Routes } from "react-router";
import DashboardLayout from "./layout/DashboardLayout";
import Error from "./Error";
import HomeDashboard from "./pages/Dasboard/Home/Index";
import CreateCategory from "./pages/Dasboard/category";
import CreateProduct from "./pages/Dasboard/product";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";


export default function App() {
    return (
        <Routes>

            <Route path="login" element = {<Login/>}/>
            <Route path="register" element = {<Register/>}/>


            <Route path="/" element = {<DashboardLayout/>}>
            <Route index element= {<HomeDashboard/>}/>  
            <Route path="/Create-Category" element = {<CreateCategory/>}/>
            <Route path= "edit-category/:id" element= {<CreateCategory/>}/>
            <Route path="/Create-Product" element = {<CreateProduct/>}/>
            <Route path="/Create-Product/:id" element = {<CreateProduct/>}/>
            <Route path="/edit-Product/:id" element = {<CreateProduct/>}/>
                      {/* error */}
            <Route path="*" element = {<Error/>}/>

            </Route>
        </Routes>
    );
}
