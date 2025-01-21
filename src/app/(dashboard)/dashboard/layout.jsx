import Link from "next/link";
import React from "react";

const layout = ({ children }) => {
  return (
    <div>
      <nav className="bg-gray-200 px-10 py-4 justify-between flex items-center">
        <h1 className="text-2xl">
          <span className="font-bold">dashboard</span> layout
        </h1>
        <div className="flex space-x-4">
          <Link href="/">home</Link>
          <Link href="/menu">menu</Link>
          <Link href="/features">features</Link>
          <Link href="/newBlogsAdd">new blogs add</Link>
        </div>
      </nav>
      <div className="h-screen">{children}</div>
      <div>
        <h1 className="text-center text-lg">This is footer</h1>
      </div>
    </div>
  );
};

export default layout;
