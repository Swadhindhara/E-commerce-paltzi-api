import React, { useEffect } from "react";
import logo from "../assets/images/logo.svg";
import { Input } from "@/components/ui/input";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import g1 from "../assets/graphics/g1.png";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "sonner";
import { login } from "@/features/auth/authSlice";

const Login = () => {
  const dispatch = useDispatch();
  const {isLoading} = useSelector((state) => state.auth)
  const handleLogin = () => {
    if (localStorage.getItem("token")) {
      toast("You are already logged in!!");
    } else {
      dispatch(
        login({
          email: "john@mail.com",
          password: "changeme",
        })
      );
      if(!isLoading){
        toast.success("Logged in successfully!");
      }
    }
  };
  return (
    <>
      <div className="login_container lg:px-0 px-4">
        <div className=" mx-auto">
          <div className="login lg:h-[90dvh] flex items-start lg:items-center flex-col lg:flex-row gap-5 lg:gap-0">
            <div className="left w-full lg:w-2/3 flex items-center justify-center">
              <div className="form px-4 lg:px-6 py-16 shadow-lg rounded-lg w-full lg:w-1/2 flex flex-col items-start">
                <img src={logo} alt="" className="w-44" />
                <p className="mt-6">Welcome back!!!</p>

                <div className="box flex flex-col gap-2 mt-6 w-full">
                  <label htmlFor="username">Email</label>
                  <Input type="email" placeholder="Enter your username" />
                </div>
                <div className="box flex flex-col gap-2 mt-6 w-full">
                  <div className="content flex items-center justify-between">
                    <label htmlFor="password">Password</label>
                    <Link
                      to={"/forget-password"}
                      className="text-zinc-400 text-sm"
                    >
                      Forget Password?
                    </Link>
                  </div>
                  <Input type="text" placeholder="Enter your password" />
                </div>
                <Button
                  className="flex items-center gap-2 cursor-pointer bg-blue-400 self-center mt-6"
                  onClick={handleLogin}
                >
                  Sign In <ArrowRight />
                </Button>
                <p className="text-zinc-400 self-center mt-6">
                  I don&apos;t have an account ?{" "}
                  <Link className="text-zinc-500" to={"/register"}>
                    Sign Up
                  </Link>
                </p>
              </div>
            </div>
            <div className="right w-full lg:w-1/3 h-full lg:bg-blue-200 relative flex items-center justify-center">
              <img
                src={g1}
                alt=""
                className="lg:absolute lg:bottom-0 lg:left-[-140px] w-full block"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
