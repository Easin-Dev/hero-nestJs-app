import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div>
      <h1 className="font-bold text-2xl text-center mt-4">New blogs</h1>

      <div className="mx-56">
        {blogs.map((blog) => (
          <div className="border p-4 my-4" key={blog.id}>
            <h1>{blog.title}</h1>
            <p>{blog.detail}</p>
            <Link
              href={`/blog/newBlog/${blog.id}`}
              className="w-24 border rounded-md bg-slate-400 hover:bg-slate-500 text-white p-1 mt-2"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

const blogs = [
  {
    id: "1234567",
    title: "Introduction to JavaScript",
    detail:
      "JavaScript is a versatile programming language used for web development, enabling dynamic and interactive web pages.",
  },
  {
    id: "2345678",
    title: "Basics of Tailwind CSS",
    detail:
      "Tailwind CSS is a utility-first CSS framework for rapidly building custom user interfaces.",
  },
  {
    id: "3456789",
    title: "React.js Overview",
    detail:
      "React.js is a JavaScript library for building user interfaces, particularly single-page applications.",
  },
  {
    id: "4567890",
    title: "Node.js Essentials",
    detail:
      "Node.js is a JavaScript runtime built on Chrome's V8 engine, enabling server-side development with JavaScript.",
  },
  {
    id: "5678901",
    title: "Understanding REST APIs",
    detail:
      "REST APIs provide a standardized way for systems to communicate, leveraging HTTP methods like GET, POST, PUT, and DELETE.",
  },
];

export default page;
