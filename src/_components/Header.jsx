import React, { useEffect, useState } from "react";
import logo from "./../assets/images/logo.svg";
import { Link } from "react-router-dom";
import { SearchIcon, ShoppingCartIcon, User2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "@/features/user/userSlice";

const Header = () => {
  const [profile, setProfile] = useState();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);


  return (
    <div className="header_container px-4">
      <div className="container mx-auto">
        <div className="header py-5 lg:py-4 flex items-center justify-between">
          <div className="left">
            <Link to={"/"}>
              <img className="w-[160px] md:w-52" src={logo} alt="Logo" />
            </Link>
          </div>
          <div className="right flex items-center gap-4">
            <div className="box flex items-center border rounded-md gap-2 px-2">
              <SearchIcon />
              <Input
                type="search"
                className="border-none shadow-none"
                placeholder="Search..."
              />
            </div>
            <Link to={"/cart"}>
              <ShoppingCartIcon />
            </Link>
            {user ? (
              // <p>{user?.name}</p>
              <Link to={'/profile'}><img src={user?.avatar} className="w-10 rounded-full cursor-pointer" alt="avatar" /></Link>
            ) : (
              <Link to={"/profile"}>
                <User2 />
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
