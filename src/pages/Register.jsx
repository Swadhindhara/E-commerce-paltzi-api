import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import g2 from '../assets/graphics/g2.png'
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { createUser, login } from "@/features/auth/authSlice";
import { toast } from "sonner";
import axios from "axios";
import g4 from '../assets/graphics/g4.png'
import g5 from '../assets/graphics/g5.png'

const Register = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const {user, isLoading, isError} = useSelector((state) => state.auth);

  const handleUser = async (data) => {
    console.log(data);
    // try {
    //   const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/is-available`, { email: data.email })
    //   console.log(response.data);
    //   return response.data
    // } catch (error) {
    //   console.error(error.message);
    // }
    
    if(data.checked === 'on'){
      dispatch(createUser(
        {
          name: data.name,
          email: data.email,
          password: data.password,
          avatar: "https://picsum.photos/800"
        }
      ))
    }else{
      toast.warning('Please check the privacy policy and Terms and Conditions')
    }
  }
  useEffect(() => {
    if(!isError) {
      console.log(user, "form registration");
    }
  }, [user])
  return (
    <>
      <div className="register_container px-4">
        <div className="container mx-auto">
          <div className="register  relative flex items-center justify-start lg:flex-row flex-col h-fit lg:h-[90dvh] gap-10 lg:gap-0">
            <div className="left w-full lg:w-1/3 flex items-start flex-col gap-6">
              <h2 className="font-bold text-3xl">Sign Up</h2>
              <div className="box flex items-center gap-4">
                <div className="line w-16 h-1 bg-black"></div>
                <p className="text-blue-400" >Sign up with</p>
              </div>
              <div className="w-full flex gap-3 items-center md:flex-row flex-col">
                <div className="google w-full md:w-1/2 bg-white flex items-center justify-center border py-2 text-black rounded-lg shadow-xl cursor-pointer gap-2" ><img src={g4} alt="" className="w-5"/> Sign Up with Google</div>
                <div className="fb w-full  md:w-1/2 bg-blue-400 flex items-center justify-center py-2 text-white rounded-lg shadow-xl cursor-pointer gap-2"> <img src={g5} alt="" className="w-5"/> Sign Up with facebook</div>
              </div>
              <h3 className="self-center">or</h3>
              <form className="form w-full" onSubmit={handleSubmit(handleUser)}>
                <div className="box w-full flex items-start gap-3">
                  <div className="input_div w-full flex items-start flex-col gap-2">
                    <label htmlFor="username">Name</label>
                    <Input type="text" placeholder="eg: swadhin" 
                    {...register('name', {required: "Enter the valid name", pattern: {
                      value: /^[a-zA-Z\s]+$/,
                      message: "Please enter a valid name"
                    }})}
                    />
                    {errors.name && <small className="text-red-600">{errors.name.message}</small>}
                  </div>
                  <div className="input_div w-full flex items-start flex-col gap-2">
                    <label htmlFor="email">Email</label>
                    <Input type="text" placeholder="eg:swdhin@gmail.com" 
                    {...register('email', {required: 'Enter valid email address', pattern: {
                      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                      message: "Please enter a valid email address"
                    }})}
                    />
                    {errors.email && <small className="text-red-600">{errors.email.message}</small>}
                  </div>
                </div>
                <div className="box flex items-start flex-col gap-2 mt-6">
                  <label htmlFor="password">Password</label>
                  <Input type="text" placeholder="Enter your password" 
                  {...register("password", {required: "Please enter a valid password", minLength:{value: 8, message: "Password should be at least 8 characters"}})}
                  />
                  {errors.password && <small className="text-red-600">{errors.password.message}</small>}
                </div>
                <div className="flex items-center space-x-2 mt-6">
                  <Checkbox id="terms" {...register('checked', {required: true})}/>
                  <Label htmlFor="terms">I&apos;ve read and agree with terms of service and our privacy policy</Label>
                </div>
                <Button className='cursor-pointer mt-6'>Sign Up</Button>
                <p className="mt-6 text-blue-300">Already have an account ? <Link className="text-zinc-500" to={'/login'}>Sign In</Link></p>
              </form>
            </div>
            <div className="right flex items-center justify-center">
                <img src={g2} alt="" className="lg:hidden block w-[80%]"/>
            </div>
            <img src={g2} alt="" className="absolute right-0 bottom-0 w-[50%] lg:block hidden"/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
