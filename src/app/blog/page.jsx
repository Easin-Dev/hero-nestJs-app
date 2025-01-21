import Link from "next/link";
import React from "react";

const page = () => {
  const blogs = [
    {
      id: 1234567,
      title: "Introduction to JavaScript",
      detail:
        "JavaScript is a versatile programming language used for web development, enabling dynamic and interactive web pages.",
    },
    {
      id: 2345678,
      title: "Basics of Tailwind CSS",
      detail:
        "Tailwind CSS is a utility-first CSS framework for rapidly building custom user interfaces.",
    },
    {
      id: 3456789,
      title: "React.js Overview",
      detail:
        "React.js is a JavaScript library for building user interfaces, particularly single-page applications.",
    },
    {
      id: 4567890,
      title: "Node.js Essentials",
      detail:
        "Node.js is a JavaScript runtime built on Chrome's V8 engine, enabling server-side development with JavaScript.",
    },
    {
      id: 5678901,
      title: "Understanding REST APIs",
      detail:
        "REST APIs provide a standardized way for systems to communicate, leveraging HTTP methods like GET, POST, PUT, and DELETE.",
    },
  ];

  return (
    <div>
      <h1 className="text-center text-2xl font-bold mt-5">Hallo developers </h1>
      <div className="text-center">
        <Link
          href="/blog/newBlog"
          className="border w-24 rounded-md bg-slate-400 text-center text-white p-1 mt-2 hover:bg-slate-500"
        >
          New blogs
        </Link>
      </div>

      <div className="mx-56">
        {blogs.map((blog) => (
          <div className="border p-4 my-4" key={blog.id}>
            <h1>{blog.title}</h1>
            <p>{blog.detail}</p>
            <Link
              href={`/blog/${blog.id}`}
              className="w-24 border rounded-md bg-slate-400 hover:bg-slate-500 text-white p-1 mt-2"
            >
              see details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
