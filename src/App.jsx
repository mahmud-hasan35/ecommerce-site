import {  Route, Routes } from "react-router";
import DashboardLayout from "./layout/DashboardLayout";
import HomeDashboard from "./pages/HomeDashboard";
import Error from "./Error";
import CreateCategory from "./pages/CreateCategory";
import CreateProduct from "./pages/CreateProduct";


export default function App() {
    return (
        <Routes>
            <Route path="/" element = {<DashboardLayout/>}>
            <Route index element= {<HomeDashboard/>}/>  
            <Route path="/Create-Category" element = {<CreateCategory/>}/>
            <Route path="/Create-Product" element = {<CreateProduct/>}/>
                      {/* error */}
            <Route path="*" element = {<Error/>}/>

            </Route>
        </Routes>
    );
}
