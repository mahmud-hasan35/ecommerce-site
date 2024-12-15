import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { registerValidation } from "../../validation/validationSchema";
import { registerUser } from "../../database/firebaseAuth";
import { toast } from "react-toastify";
import { createUserProfile } from "../../database/firebaseUtils";
import { useNavigate } from "react-router";

const Register = () => {
  const navigate = useNavigate();
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerValidation), 
  });

const onSubmit = async (data) => {

const formData = {
  name:data.name,
  email: data.email,
  password: data.password,
  role: "user"
}
const res = await registerUser(formData);
if (res.error) {
  toast.error(res.code)
} else {
  console.log(res);
  createUserProfile(res);
  reset();
  navigate("/login")
  
}



}

  return (
    <div className="bg-gray-100 flex items-center justify-center min-h-screen">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">Register</h2>
        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label htmlFor="name" className="block text-gray-600 font-medium">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your name"
              {...register('name')}
            />
            {errors.name && <span className="text-red-600">{errors.name?.message}</span>}
          </div>

          <div>
            <label htmlFor="email" className="block text-gray-600 font-medium">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
              {...register('email')}
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

          <div>
            <label htmlFor="confirm-password" className="block text-gray-600 font-medium">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Confirm your password"
              {...register('confirmPassword')}
            />
            {errors.confirmPassword && <span className="text-red-600">{errors.confirmPassword?.message}</span>}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Register
          </button>
        </form>

        <p className="mt-4 text-center text-gray-600 text-sm">
          Already have an account? 
          <button 
            className="text-blue-500 hover:underline"
          >
            Login
          </button>
        </p>
      </div>
    </div>
  );
};

export default Register;
