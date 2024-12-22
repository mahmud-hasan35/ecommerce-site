import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { loginValidation } from "../../validation/validationSchema";
import { toast } from "react-toastify";
import { auth, loginUser,  } from "../../database/firebaseAuth";
import { useDispatch } from "react-redux";
import { createUserProfile, getProfile } from "../../database/firebaseUtils";
import { Link, useNavigate } from "react-router";
import { setLoginUserDataToRedux } from "../../features/auth/authSlice";
import { GoogleAuthProvider,signInWithPopup } from "firebase/auth";

const Login = () => {

  const dispatch =  useDispatch();
  const navigate = useNavigate();
  const provider = new GoogleAuthProvider();



  const {register, handleSubmit, reset, formState: {errors}} =  useForm( {
    resolver: yupResolver(loginValidation)
  }
  );

  const onSubmit = async (data) => {
    const res = await loginUser(data);
    
    if(res.error) {
      toast.error(res.code)
    }else {

      let userProfile = await getProfile(res.id)
      console.log(userProfile);
      
      const loginUserInfo = {
        id: res.id,
        email: res.email,
        name: userProfile.name,
        role: userProfile.role,
      }
      dispatch(setLoginUserDataToRedux(loginUserInfo))
      reset();
      navigate("/dashboard")
      
    }
    
  };
  // google login//

  const googleLogin = async () => {
    try  {
    const res = await signInWithPopup(auth, provider);
    const user = res.user;
    const newUser = {
      id:user.uid,
      name: user.displayName,
      role: "user",
      email: user.email
    };
    const userProfile = await getProfile(user.uid)
   

    if (!userProfile || userProfile.email != user.email) {
      createUserProfile(newUser)
      dispatch(setLoginUserDataToRedux({
        ...newUser,
        role:"user"
      }))
      
    } else {
      
      dispatch(setLoginUserDataToRedux({
        ...newUser,
        role: userProfile.role
      }))
    }
    
 
    toast.success("you are succses")
    navigate("/dashboard")
      
    } catch (error) {
      console.log(error);
      
    }
    
  }

  return (
    <div className="bg-gray-100 flex items-center justify-center min-h-screen">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">Login</h2>
        <form  className="space-y-4" onSubmit={(handleSubmit(onSubmit))}>
          <div>
            <label htmlFor="email" className="block text-gray-600 font-medium">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
            {...register ('email')}
            />
             {errors.email && <span className="text-red-600">{errors.email?.message}</span>}
          </div>

          <div>
            <label htmlFor="password" className="block text-gray-600 font-medium">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
              {...register('password')}
            />
             {errors.password && <span className="text-red-600">{errors.password?.message}</span>}
          </div>

          <div className="flex items-center justify-between">
            <label className="flex items-center">
              <input type="checkbox" className="h-4 w-4 text-blue-600 border-gray-300 rounded" />
              <span className="ml-2 text-sm text-gray-600">Remember me</span>
            </label>
            <a href="#" className="text-sm text-blue-500 hover:underline">Forgot Password?</a>
          </div>
          <button
    type="submit"
    className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
  >
    Login
  </button>

  <div className="flex items-center my-4">
    <div className="flex-grow border-t border-gray-300"></div>
    <span className="mx-4 text-gray-500 text-sm font-medium">OR</span>
    <div className="flex-grow border-t border-gray-300"></div>
  </div>

  <button onClick={() => googleLogin()}
    type="button"
    className="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition duration-300 flex items-center justify-center"
  >
    <svg className="h-5 w-5 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" fill="none">
      <path fill="#EA4335" d="M24 9.5c3.14 0 5.58 1.12 7.41 2.95l5.52-5.52C33.47 3.59 28.9 2 24 2 14.92 2 7.47 7.89 4.75 15.64l6.57 5.09C12.5 14.04 17.74 9.5 24 9.5z" />
      <path fill="#34A853" d="M24 46c6.49 0 11.91-2.16 15.89-5.87l-6.56-5.45c-2.25 1.52-5.15 2.32-9.33 2.32-7.26 0-13.44-4.92-15.64-11.67l-6.58 5.07C7.47 40.3 14.92 46 24 46z" />
      <path fill="#FBBC05" d="M46 24c0-1.45-.13-2.83-.37-4.17H24v8.29h12.8c-.56 2.94-2.28 5.43-4.82 7.14l6.56 5.45C43.18 37.08 46 30.96 46 24z" />
      <path fill="#4285F4" d="M8.32 18.18l-6.57-5.09C3.09 9.77 4.75 8.68 6.86 7.24l6.83 5.35c1.62 3.3 5.46 5.68 9.9 5.68 1.94 0 3.82-.53 5.47-1.52v.02c.01-.01.02-.02.02-.03l-6.57 5.07C17.09 21.88 11.65 20 8.32 18.18z" />
    </svg>
    Login with Google
  </button>
        </form>

        <p className="mt-4 text-center text-gray-600 text-sm">
         { `Don't have an account? `}
          <Link to={"/register"}
            
            className="text-blue-500 hover:underline"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;