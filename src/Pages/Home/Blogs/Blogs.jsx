import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";

const Blogs = () => {
  const { data: blogs = [], refetch } = useQuery(["blogs"], async () => {
    const res = await fetch("https://ultra-sport-server.vercel.app/blogs");
    const responseData = await res.json();
    return responseData.slice(0, 4);
  });

  const [selectedBlog, setSelectedBlog] = useState(null);

  const openModal = (blog) => {
    setSelectedBlog(blog);
  };

  const closeModal = () => {
    setSelectedBlog(null);
  };

  return (
    <div className="m-4">
      <h1 className="text-center text-lg font-bold">
        <span className="text-red-500">Read our</span> daily Blogs
      </h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 mx-2">
        {blogs.map((blog) => (
          <div className="card bg-base-100 w-full shadow-xl m-4" key={blog._id}>
            <figure className="px-4 pt-6">
              <img
                src={blog.img}
                alt="Blog"
                className="rounded-xl h-48 w-full"
              />
            </figure>
            <div className="card-body items-center text-center">
              <p className="font-bold text-lg">{blog.heading}</p>
              <div className="card-actions justify-start">
                <p>{blog.description.slice(0, 50)}...</p>
                <button
                  className="p-1 text-red-400"
                  onClick={() => openModal(blog)}
                >
                  Read now...
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedBlog && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="modal modal-open">
            <div className="modal-box relative">
              <button
                className="btn btn-sm btn-circle absolute right-2 top-2"
                onClick={closeModal}
              >
                ✕
              </button>
              <h2 className="text-2xl font-bold mb-4">
                {selectedBlog.heading}
              </h2>
              <img
                src={selectedBlog.img}
                alt={selectedBlog.heading}
                className="rounded-xl h-48 w-full mb-4"
              />
              <p>{selectedBlog.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Blogs;
