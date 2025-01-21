import { Condiment } from "next/font/google";
import React from "react";

const getData = async (id) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = await res.json();
  return data;
};

const page = async ({ params }) => {
  const { title, body } = await getData(params.id);
  return (
    <div>
      <h1 className="text-xl uppercase font-medium">title:{title}</h1>
      <p>description:{body}</p>
    </div>
  );
};

export default page;
