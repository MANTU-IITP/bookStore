import React from 'react'
import { Link } from "react-router-dom";
import {useForm} from "react-hook-form"

function Login() {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
  const onSubmit = values => console.log(values);
    return (
        <div>


            <dialog id="my_modal_3" class="fixed inset-0 z-50 bg-white overflow-y-auto">

                <div class="relative bg-white rounded-lg max-w-md mx-auto my-8 p-6">
                <form onSubmit={handleSubmit(onSubmit)} method="dialog">
  <Link to="/" className="absolute right-2 top-2 p-1 rounded-full hover:bg-gray-100">
    ✕
  </Link>

  <h3 className="font-bold text-lg">Login</h3>

  {/* Email Field */}
  <div className="mt-4 space-y-2">
    <span>Email</span>
    <br />
    <input
      type="email"
      placeholder="Enter your email"
      className="w-80 px-3 py-1 border rounded-md outline-none"
      {...register('email', { required: true })}
    />
    <br />
    {errors.email && <p className="text-red-500">Please enter email</p>}
  </div>

  {/* Password Field */}
  <div className="mt-4 space-y-2">
    <span>Password</span>
    <br />
    <input
      type="password"
      placeholder="Enter your password"
      className="w-80 px-3 py-1 border rounded-md outline-none"
      {...register('password', { required: true })}
    />
    <br />
    {errors.password && <p className="text-red-500">Please enter password</p>}
  </div>

  {/* Button */}
  <div className="flex justify-around mt-6">
    <button type="submit" className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">
      Login
    </button>
    <p>
      Not registered?{" "}
      <Link to="/signup" className="underline text-blue-500">SignUp</Link>
    </p>
  </div>
</form>



                </div>
            </dialog>
        </div>
    )
}

export default Login