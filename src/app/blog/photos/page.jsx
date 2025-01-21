import { getPosts } from "@/postsApi/page";
import Link from "next/link";
import React from "react";

const page = async () => {
  const getPhotosData = await getPosts();
  //   console.log(getPhotosData);
  return (
    <div>
      <h1 className="text-center text-xl mt-6 font-bold">see all photos</h1>
      <div className="grid grid-cols-3 gap-4 p-4">
        {getPhotosData?.slice(0, 20)?.map(({ id, title, body }) => (
          <div key={id} className="border p-4">
            <h1 className=" uppercase font-medium">Title: {title}</h1>
            <p className="text-sm mt-2">
              <span className="font-light">description:</span> {body}
            </p>
            <button className="bg-blue-500 text-white p-2 rounded-md mt-2 hover:bg-blue-600">
              <Link href={`/blog/photos/${id}`}>details</Link>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
