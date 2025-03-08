import React from "react";
import { Link } from "react-router-dom"; 

const blogs = [
  {
    title: "Breaking Barriers: The Hurdles to Women’s Empowerment in Pakistan",
    excerpt: "Women in Pakistan still face significant barriers that hinder their personal and professional growth...",
    link: "/blog1", 
  },
  {
    title: "The Role of Social Enterprises in Overcoming Financial Hurdles to Children's Education in Pakistan",
    excerpt: "Social enterprises have emerged as a powerful force in bridging financial gaps in education...",
    link: "/blog2", 
  },
];

const Blogs = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-6">
      <div className="max-w-6xl mx-auto bg-white p-10 rounded-lg shadow-md">
        <h1 className="text-4xl font-bold text-red-600 mb-8 text-center">Our Blogs</h1>

        <div className="space-y-8">
          {blogs.map((blog, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">{blog.title}</h2>
              <p className="text-lg text-gray-700">{blog.excerpt}</p>
              <Link to={blog.link} className="inline-block mt-4 text-red-600 hover:text-red-800 font-medium">
                Read More →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
