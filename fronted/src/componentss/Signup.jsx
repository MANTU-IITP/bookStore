import React from 'react'
import { Link } from 'react-router-dom'
import Login from './Login'
import { useForm } from "react-hook-form";


function Signup() {
     const {
            register,
            handleSubmit,
            formState: { errors },
          } = useForm();
      const onSubmit = values => console.log(values);
    return (
        <>
            <div className='flex h-screen items-center justify-center'> 
                <div  class='fixed inset-0 z-50 bg-white overflow-y-auto'>

                    <div  class="relative bg-white rounded-lg max-w-md mx-auto my-8 p-6">
                        <form onSubmit={handleSubmit(onSubmit)} method="dialog">
                            <Link to="/" class="absolute right-2 top-2 p-1 rounded-full hover:bg-gray-100">
                                ✕
                            </Link>
                       
                        <h3 class="font-bold text-lg">Signup</h3>
                        {/* name */}
                        <div className="mt-4 space-y-2">
                            <span>Name</span>
                            <br />
                            <input
                                type="text"
                                placeholder="Enter your fullname"
                                className="w-80 px-3 py-1 border rounded-md outline-none"
                                {...register('name', { required: true })}

                            />
                            <br />
                            {errors.name && <p className="text-red-500">Please enter email</p>}
                        

                        </div>
                        {/* email */}
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
                        {/* password */}
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
                            {errors.password && <p className="text-red-500">Please field this is required</p>}

                        </div>

                        {/* Button */}
                        <div className="flex justify-around mt-6">
                            <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">
                                Signup
                            </button>
                            <p>
                                Have account?{" "}
                                <button className='underline text-blue-500'
                                 onClick={() =>
                                    document.getElementById("my_modal_3").showModal()
                                  }>Login</button>{""}<Login/>


                            </p>
                        </div>
                        </form>


                    </div>
                </div>


            </div>
        </>
    )
}

export default Signup