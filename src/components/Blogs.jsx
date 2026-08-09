import React from "react";
import { Link } from "react-router-dom";
import blogs from "../data/blogs";
import Reveal from "./Reveal";

const Blogs = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <Reveal>
          <h1 className="text-4xl md:text-5xl font-bold text-red-700 mb-3 text-center">
            Our Blogs
          </h1>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
            Stories and research on the issues shaping the communities we work with across Pakistan.
          </p>
        </Reveal>

        <div className="space-y-6">
          {blogs.map((blog, index) => (
            <Reveal key={blog.slug} delay={index * 0.05}>
              <Link
                to={`/blogs/${blog.slug}`}
                className="group flex flex-col sm:flex-row items-stretch bg-white rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300 overflow-hidden"
              >
                <div className="sm:w-64 w-full h-48 sm:h-auto flex-shrink-0 overflow-hidden">
                  <img
                    src={blog.cover}
                    alt={blog.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-col justify-center p-6 sm:p-8 text-center sm:text-left">
                  <span className="inline-block self-center sm:self-start text-xs font-semibold tracking-wide uppercase text-red-700 bg-red-50 px-3 py-1 rounded-full mb-3">
                    {blog.category}
                  </span>
                  <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 group-hover:text-red-700 transition-colors duration-300">
                    {blog.title}
                  </h2>
                  <p className="text-gray-600 mb-3">{blog.excerpt}</p>
                  <span className="text-red-700 font-semibold inline-flex items-center justify-center sm:justify-start gap-1">
                    Read More
                    <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
