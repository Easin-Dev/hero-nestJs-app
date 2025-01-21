"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Navbar = () => {
  const pathName = usePathname();
  // console.log(pathName);

  const links = [
    {
      path: "/",
      name: "Home",
    },
    {
      path: "/about",
      name: "About",
    },
    {
      path: "/contact",
      name: "Contact",
    },
    {
      path: "/blog",
      name: "Blog",
    },
    {
      path: "/login",
      name: "Login",
    },
  ];

  if (pathName.includes("dashboard")) return null;

  return (
    <div>
      <div className="flex justify-between items-center p-4 bg-gray-200">
        <div className="text-2xl ">
          Hero <span className="text-red-400">Next App</span>
        </div>
        <div className="flex space-x-4">
          {links?.map((link) => (
            <Link
              className={pathName === link.path && "text-blue-500"}
              key={link.path}
              href={link.path}
            >
              {link.name}
            </Link>
          ))}
        </div>
        <div>
          <Link href={"/dashboard"}>dashboard</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
