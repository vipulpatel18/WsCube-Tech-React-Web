import React from "react";

export default function NewsLatter() {
  return (
    <div>
      <div className="w-full h-[300px] bg-mycolor">
        <div className="xl:container h-full m-auto grid lg:grid-cols-2">
          <div className="text-white text-center content-center">
            <h1 className="text-3xl font-medium">Want to learn latest I.T skills?</h1>
            <h4>Sing up to our newslatter and stay up to date.</h4>
          </div>
          <div className="ms-6 md:ms-[150px] text-white text-center content-center">
            <div className="flex gap-5">
              <input
                type="email"
                name="email"
                className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block rounded-md sm:text-sm focus:ring-1 h-fit w-1/2 text-black"
                placeholder="Enter Email "
              />
              <div className="mt-1">
                <button className="bg-black text-white hover:bg-black-600 active:bg-black-700 focus:outline-none focus:ring rounded focus:ring-black-300 py-2 px-8 m-auto">
                  Notify Me
                </button>
              </div>
            </div>
              <h2 className="text-justify">We care about the protection of your data. Read our <br/> <b className="cursor-pointer">Privacy Policy</b> </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
