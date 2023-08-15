import { navbarItems, socials } from "@/config/Navbar";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import "./Navbar.styles.css";

const Navbar = () => {
  return (
    <div id="navbar" className="fixed w-full">
      <div className="w-fit h-32 pt-4 mx-auto hidden md:block">
        <div className="w-full flex justify-between">
          <Image src="/images/nitlogo.png" width={50} height={50} />
          <ul className="flex gap-4">
            {socials.map((social, index) => (
              <li key={index}>
                <Link href={social.link}>
                  <Image src={social.imgSrc} width={20} height={20} />
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex w-fit mx-auto">
          {navbarItems.map((item, index) => {
            return (
              <div
                key={index}
                className="dropdown hover:bg-[#d9d9d9]/50 p-2 rounded-md duration-75 ease-out"
              >
                <Link aria-label="Navbar Categories" href={item.link}>
                  {item.value}
                </Link>

                <div className="dropdown-content invisible h-0 w-fit duration-75 ease-out ">
                  <div className="flex flex-col  gap-2  font-semi-bold  ">
                    {item.dropItem?.map((dropItem, index) => (
                      <div
                        key={index}
                        className={`  ${
                          index != item.dropItem.length - 1
                            ? "border-b pb-2"
                            : ""
                        }`}
                      >
                        <Link
                          href={dropItem.link}
                          className="hover:bg-[#D9D9D9]/20 p-1 rounded-md"
                        >
                          {dropItem.value}
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="w-full h-20 p-4 mx-auto md:hidden ">
        <div className="flex justify-between w-full">
          <div className="dropdown-hidden">
            <div className="grid place-items-center h-full">
              <Image src="/images/menuicon.png" height={30} width={30} />
            </div>
            <div className=" mx-auto dropdown-content-visible invisible h-0 flex-col absolute mt-4 bg-[#2E2E2E] rounded-3xl py-4 w-1/2 max-w-sm shadow-2xl drop-shadow-2xl ">
              {navbarItems.map((item, index) => {
                return (
                  <div
                    key={index}
                    className={`w-full ${
                      index != navbarItems.length - 1 ? "border-b" : ""
                    } `}
                  >
                    <div className="dropdown hover:bg-[#D9D9D9]/50 p-1 m-1 rounded-md duration-75 ease-out ">
                      <Link
                        aria-label="Navbar Categories"
                        className="flex justify-between gap-6 items-center  "
                        href={item.link}
                      >
                        <span className="w-full">{item.value} </span>

                        {item.dropItem?.length > 0 && (
                          <span className=" mr-4 font-bold text-2xl">
                            {" >"}
                          </span>
                        )}
                      </Link>

                      <div className="dropdown-content absolute bg-[#2e2e2e] p-4 translate-x-[100%] rounded-lg shadow-2xl -translate-y-[40%] invisible h-0 w-[40vw] duration-75 ease-out  ">
                        <div className="flex flex-col  gap-2  font-semi-bold  ">
                          {item.dropItem?.map((dropItem, index) => (
                            <div
                              key={index}
                              className={`  ${
                                index != item.dropItem.length - 1
                                  ? "border-b pb-2"
                                  : ""
                              }`}
                            >
                              <Link
                                href={dropItem.link}
                                className="hover:bg-[#D9D9D9]/50 p-1 rounded-md"
                              >
                                {dropItem.value}
                              </Link>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="flex w-fit items-center mr-4">
            <ul className="flex gap-4 items-center">
              {socials.map((social, index) => (
                <li key={index}>
                  <Link href={social.link}>
                    <Image src={social.imgSrc} width={20} height={20} />
                  </Link>
                </li>
              ))}
              <Image src="/images/nitlogo.png" width={50} height={50} />
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
