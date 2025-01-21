import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div>
      <h1>my about</h1>
      <Link href="/about/ceodetails">CEO Details</Link>
    </div>
  );
};

export default page;
