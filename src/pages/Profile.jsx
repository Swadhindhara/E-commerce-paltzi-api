import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  LockIcon,
  LogOutIcon,
  LucideArrowRightSquare,
  LucideCamera,
  LucideSettings2,
  Settings,
  Settings2Icon,
  UserCog2,
} from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "@/features/auth/authSlice";
import { useNavigate } from "react-router-dom";
import { fetchUser } from "@/features/user/userSlice";

const Profile = () => {
  const navigate = useNavigate();
  const [profile, setProfile] = useState(null);
  const [step, setStep] = useState(1);
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.user);

  const handleLogout = () => {
    dispatch(logout())
    navigate('/')
  }
  useEffect(() => {
    dispatch(fetchUser())
  }, [dispatch])
  useEffect(()=>{
    if(user){
      setProfile(user)
    }
  }, [])

  return (
    <div className="main px-4">
      <Sheet>
        <div className="container mx-auto">
          <div className="profile w-full md:py-10 py-4 flex items-start md:items-center justify-center">
            <div className="card w-full md:w-3/4 border rounded-md flex flex-col items-start p-4 gap-7">
              <h3 className="font-bold text-xl md:text-3xl lg:text-3xl flex items-center justify-center gap-2">
                Account Setting
                <span className={`block lg:hidden mt-3`}>
                  <SheetTrigger>
                    <Settings2Icon />
                  </SheetTrigger>
                </span>
              </h3>
              <div className="boxes flex items-start w-full">
                <div className="hidden lg:block left w-1/3 ">
                  <div className="tabs flex flex-col gap-4 items-start w-full">
                    <div
                      onClick={() => setStep(1)}
                      className={`tab flex items-center gap-4 cursor-pointer rounded-md hover:bg-blue-50 w-3/4 px-2 py-2 transition-all duration-300 ease ${
                        step === 1 ? "bg-blue-50 text-blue-400" : ""
                      }`}
                    >
                      <div
                        className={`icon p-2 border rounded-sm ${
                          step === 1 ? "border-blue-200" : ""
                        } `}
                      >
                        <UserCog2 />
                      </div>
                      <p>Profile Setting</p>
                    </div>
                    <div
                      onClick={() => setStep(2)}
                      className={`tab flex items-center gap-4 cursor-pointer rounded-md hover:bg-blue-50 w-3/4 px-2 py-2 transition-all duration-300 ease ${
                        step === 2 ? "bg-blue-50 text-blue-400" : ""
                      }`}
                    >
                      <div
                        className={`icon p-2 border rounded-sm ${
                          step === 2 ? "border-blue-200" : ""
                        } `}
                      >
                        <LockIcon />
                      </div>
                      <p>Password</p>
                    </div>
                    <div onClick={handleLogout} className="tab flex items-center gap-4 cursor-pointer rounded-md hover:bg-blue-50 w-3/4 px-2 py-2 transition-all duration-300 ease"
                    >
                      <div className="icon p-2 border-red-600 border rounded-sm">
                        <LogOutIcon className="text-red-600" />
                      </div>
                      <p className="text-red-600">Logout</p>
                    </div>
                  </div>
                </div>
                { step === 1 && (
                  <div className="w-full">
                    <p className="text-lg font-semibold mb-3">Edit Profile</p>
                    <div className="box w-full">
                      <div className="right w-full lg:w-full flex gap-5 items-center lg:items-start flex-col-reverse lg:flex-row">
                        <div className="left w-full lg:w-2/3 flex flex-col items-start gap-4">
                          <div className="box flex flex-col gap-2 w-full">
                            <label htmlFor="name">Full Name</label>
                            <Input type="text" defaultValue={profile?.name} />
                          </div>
                          <div className="box flex flex-col gap-2 w-full">
                            <label htmlFor="email">Email</label>
                            <Input type="text" defaultValue={profile?.email} />
                          </div>
                          <Button className="self-center bg-blue-400 cursor-pointer hover:bg-blue-500 mt-5">
                            Save Changes
                          </Button>
                        </div>
                        <div className="right w-1/3 flex flex-col items-center gap-3">
                          <img
                            src={profile?.avatar}
                            className="md:w-32 md:h-32 w-28 h-28 rounded-md"
                            alt="avatar_icon"
                          />
                          <Button
                            variant="outline"
                            className="cursor-pointer border-blue-200 border"
                          >
                            <LucideCamera />
                            Change Avatar
                          </Button>
                          <small className="text-red-500 cursor-pointer">
                            Delete Avatar
                          </small>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {step === 2 && (
                  <div className="right w-2/3 flex gap-5 items-start">
                    <p>Change Password</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <SheetContent side="left">
          <SheetHeader>
            <SheetDescription>
              <div className="left">
                <div className="tabs flex flex-col gap-4 items-start w-full">
                  <div
                    onClick={() => setStep(1)}
                    className={`tab flex items-center gap-4 cursor-pointer rounded-md hover:bg-blue-50 w-3/4 px-2 py-2 transition-all duration-300 ease ${
                      step === 1 ? "bg-blue-50 text-blue-400" : ""
                    }`}
                  >
                    <div
                      className={`icon p-2 border rounded-sm ${
                        step === 1 ? "border-blue-200" : ""
                      }`}
                    >
                      <UserCog2 />
                    </div>
                    <p>Profile Setting</p>
                  </div>
                  <div
                    onClick={() => setStep(2)}
                    className={`tab flex items-center gap-4 cursor-pointer rounded-md hover:bg-blue-50 w-3/4 px-2 py-2 transition-all duration-300 ease ${
                      step === 2 ? "bg-blue-50 text-blue-400" : ""
                    }`}
                  >
                    <div
                      className={`icon p-2 border rounded-sm ${
                        step === 2 ? "border-blue-200" : ""
                      } `}
                    >
                      <LockIcon />
                    </div>
                    <p>Password</p>
                  </div>
                  <div
                  onClick={handleLogout}
                    className="tab flex items-center gap-4 cursor-pointer rounded-md hover:bg-blue-50 w-3/4 px-2 py-2 transition-all duration-300 ease"
                  >
                    <div className="icon p-2 border-red-600 border rounded-sm">
                      <LogOutIcon className="text-red-600" />
                    </div>
                    <p className="text-red-600">Logout</p>
                  </div>
                </div>
              </div>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default Profile;
