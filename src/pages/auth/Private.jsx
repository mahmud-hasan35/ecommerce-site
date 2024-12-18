import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router";

export default function Private() {
    const authUser = useSelector(state => state.auth);
    console.log(authUser);
    
    
    if (!authUser.isLogin) {
        return <Navigate to={"login"}/>
    };
    if (authUser.isLogin && authUser.user.role != "admin"){
        return <div className="text-4xl text-red-600 text-center ">you are not admin , you are user</div> 
    };
    if (authUser.isLogin && authUser.user.role == "admin"){
        return <Outlet/>;
    };
  
}
