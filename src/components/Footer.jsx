import React from "react";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaTwitterSquare,
  FaGithubSquare,
} from "react-icons/fa";

export default function Footer() {
  const data = [
    {
      title: "Solutions",
      li_1: "Analytics",
      li_2: "Marketing",
      li_3: "Commerce",
      li_4: "Insights",
    },
    {
      title: "Support",
      li_1: "Pricing",
      li_2: "Documentation",
      li_3: "Guides",
      li_4: "API Status",
    },
    {
      title: "Company",
      li_1: "About",
      li_2: "Blog",
      li_3: "Jobs",
      li_4: "Press",
      li_5: "Careers",
    },
  ];
  return (
    <div>
      <div className="w-full bg-mycolor md:p-10 pb-0">
        <div className="lg:container p-9 grid md:grid-cols-3">
          <div className=" p-5">
            <h1 className="text-2xl font-bold">WsCube Tech</h1>
            <p className="text-white mt-3 mb-5">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore,
              nulla quam quisquam delectus magni deserunt.
            </p>
            <div className="flex gap-5 text-2xl text-white">
              <FaFacebookSquare className="cursor-pointer" />
              <FaInstagramSquare className="cursor-pointer" />
              <FaTwitterSquare className="cursor-pointer" />
              <FaGithubSquare className="cursor-pointer" />
            </div>
          </div>
          <div className="col-span-2 md:p-5">
            <div className="">
              <Links data={data} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Links({data}) {
  return (
    <div className="grid grid-cols-3">
      {data.map((d, i) => {
        return (
          <ul key={i}>
            <h1 className="text-xl mb-1 font-bold">{d.title}</h1>
            <li className="text-white font-medium mb-1 ps-3 cursor-pointer">{d.li_1}</li>
            <li className="text-white font-medium mb-1 ps-3 cursor-pointer">{d.li_2}</li>
            <li className="text-white font-medium mb-1 ps-3 cursor-pointer">{d.li_3}</li>
            <li className="text-white font-medium mb-1 ps-3 cursor-pointer">{d.li_4}</li>
            {d.li_5 ? <li className="text-white font-medium mb-1 ps-3 cursor-pointer">{d.li_5}</li> : " "}
          </ul>
        );
      })}
    </div>
  );
}
