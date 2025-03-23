import React from "react";

const NotFound = () => {
  return (
    <>
      <div className="main ">
        <div className="container mx-auto h-screen flex items-center justify-center w-screen">
          <div className="content flex items-center gap-2 w-fit">
            <h2 className="md:text-3xl text-2xl font-semibold">404</h2>
            <div className=" w-[2px] h-[40px] bg-zinc-400"></div>
            <p>Page Not Found</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
