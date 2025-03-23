import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";
import { Link } from "react-router-dom";
import g2 from '../assets/graphics/g2.png'

const Register = () => {
  return (
    <>
      <div className="register_container px-4">
        <div className="container mx-auto">
          <div className="register  relative flex items-center justify-start lg:flex-row flex-col h-fit lg:h-[90dvh] gap-10 lg:gap-0">
            <div className="left w-full lg:w-1/3 flex items-start flex-col gap-6">
              <h2 className="font-bold text-3xl">Sign Up</h2>
              <div className="box flex items-center gap-4">
                <div className="line w-16 h-1 bg-black"></div>
                <p className="text-blue-400">Sign up with</p>
              </div>
              <h3 className="self-center">or</h3>
              <div className="form w-full">
                <div className="box w-full flex items-start gap-3">
                  <div className="input_div w-full flex items-start flex-col gap-2">
                    <label htmlFor="username">Name</label>
                    <Input type="text" placeholder="eg: swadhin" />
                  </div>
                  <div className="input_div w-full flex items-start flex-col gap-2">
                    <label htmlFor="email">Email</label>
                    <Input type="email" placeholder="eg:swdhin@gmail.com" />
                  </div>
                </div>
                <div className="box flex items-start flex-col gap-2 mt-6">
                  <label htmlFor="password">Password</label>
                  <Input type="text" placeholder="Enter your password" />
                </div>
                <div className="flex items-center space-x-2 mt-6">
                  <Checkbox id="terms" />
                  <Label htmlFor="terms">I&apos;ve read and agree with terms of service and our privacy policy</Label>
                </div>
                <Button className='cursor-pointer mt-6'>Sign Up</Button>
                <p className="mt-6 text-blue-300">Already have an account ? <Link className="text-zinc-500" to={'/login'}>Sign In</Link></p>
              </div>
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
