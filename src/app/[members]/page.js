"use client";

import React, { useEffect, useState } from "react";
import { designMembers, sponsorshipMembers } from "@/config/members";

import { notFound } from "next/navigation";

const page = (props) => {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    if (props.params.members == "sponsorship-team") {
      setMembers(sponsorshipMembers);
    } else if (props.params.members == "design-team") {
      setMembers(designMembers);
    } else {
      notFound();
    }
  }, [members, props.params.members]);

  return (
    <>
      <div className="p-12 container mx-auto flex justify-center flex-col ">
        <h1 className="text-3xl md:text-4xl lg:text-5x">
          {props.params.members == "sponsorship-team"
            ? "PR & SPONSORSHIP"
            : "DESIGN TEAM"}
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl pb-1 ">Members</p>
        <div className="mr-2 w-full rounded-sm bg-white h-1"></div>
      </div>
      <div className="p-8 shadow-md flex items-center justify-center">
        <Image
          src={props.params.members == "sponsorship-team"
          ? "/images/sponsorship/Dibyarchana.jpg"
          : "/images/design/Uday Nayak.jpg" } alt="head of team"
          className="w-20 h-20 md:w-20 md:h-20 lg:w-24 lg:h-24 xl:w-28 xl:h-28 object-cover mr-4 object-top"
        />
        <div
          className="w-[200px] text-xs md:text-sm lg:text-base xl:text-lg leading-none"
          
        >
          <p>{props.params.members == "sponsorship-team"
            ? "Dibyarchana Nayak"
            : "Uday Kumar Nayak"}</p>
          <p>{props.params.members == "sponsorship-team"
            ? "PR & Sponsorship Head"
            : "Management Head"}</p>
          <p>{props.params.members == "sponsorship-team"
            ? "3rd year, Ceramic Engg."
            : "3rd year, Electrical & communication Engg."}</p>
        </div>
      </div>
      <div className="container mx-auto p-8">
        <div className="flex items-center justify-center">
           <div id="first" className="justify-center grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-4 last:col-span-[1.5]">
              {members.map((member) => (
                <div className="p-4 flex items-center justify-center">
                <Image src={member.pic} className=" pl-4 w-20 h-20 md:w-20 md:h-20 lg:w-24 lg:h-24 xl:w-28 xl:h-28 object-cover mr-4 object-top" alt="team members"/>
                <div  className="w-[200px] text-xs md:text-sm lg:text-base xl:text-lg leading-none" >
                <p>{member.name}</p>
                <p>{member.post}</p>
                <p>{member.year}</p>
                </div> 
            </div>
                          ))}
        </div>
      </div>

      </div>
    </>
  );
};

export default page;
