import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div>
      <h1 className="text-center font-bold mt-2 ">This is dashboard</h1>
      <button>
        <Link href="/">Go to Home</Link>
      </button>
    </div>
  );
};

export default page;
