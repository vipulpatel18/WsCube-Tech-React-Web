import React from "react";

export default function LearnFormExpert() {
  return (
    <div>
      <div className="w-full bg-white h-[550px]">
        <div className="lg:container grid md:grid-cols-2">
          <div className="md:mt-10 md:ms-10 md:ps-10 md:pt-10">
            <img className="w-3/4 ms-10 md:mt-8" src="assets/laptop.jpg" alt="" />
          </div>
          <div className="mt-6 md:mt-10 md:pt-10 ms-5 md:me-6">
            <h1 className="uppercase md:pt-[70px] md:mt-10 font-bold text-green-600">
              Learn from experts
            </h1>
            <p className="pt-3">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt
              velit non aliquam. Non quia rem animi dolores iste impedit
              consequatur vel iusto temporibus in. Dolorum reprehenderit
              temporibus tempore maxime reiciendis!
            </p>
            <div className="mt-9">
              <button className="bg-black text-white hover:bg-black-600 active:bg-black-700 focus:outline-none focus:ring rounded focus:ring-black-300 py-2 px-8 m-auto">
                {" "}
                Save changes{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
