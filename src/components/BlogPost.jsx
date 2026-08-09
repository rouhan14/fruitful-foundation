import React from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import blogs from "../data/blogs";
import Reveal from "./Reveal";

const renderBlock = (block, i) => {
  if (block.type === "h3") {
    return (
      <h3 key={i} className="text-2xl font-bold text-gray-900 mt-8 mb-3 text-center sm:text-left">
        {block.text}
      </h3>
    );
  }
  if (block.type === "ul") {
    return (
      <ul key={i} className="list-disc list-inside space-y-2 mb-6 text-left max-w-3xl mx-auto text-gray-700">
        {block.items.map((item, j) => (
          <li key={j}>{item}</li>
        ))}
      </ul>
    );
  }
  return (
    <p key={i} className="text-lg text-gray-700 leading-relaxed mb-6 text-center sm:text-left">
      {block.text}
    </p>
  );
};

const BlogPost = () => {
  const { slug } = useParams();
  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) {
    return <Navigate to="/blogs" replace />;
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-3xl mx-auto">
        <Reveal>
          <Link to="/blogs" className="text-red-700 font-medium inline-flex items-center gap-1 mb-6 hover:underline">
            ← Back to Blogs
          </Link>
        </Reveal>

        <Reveal delay={0.05}>
          <div className="rounded-2xl overflow-hidden shadow-lg mb-8">
            <img src={blog.cover} alt={blog.title} className="w-full h-64 sm:h-80 object-cover" />
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <span className="inline-block text-xs font-semibold tracking-wide uppercase text-red-700 bg-red-50 px-3 py-1 rounded-full mb-4">
            {blog.category}
          </span>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center sm:text-left">
            {blog.title}
          </h1>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="bg-white rounded-2xl shadow-sm p-6 sm:p-10">
            {blog.blocks.map(renderBlock)}
          </div>
        </Reveal>
      </div>
    </div>
  );
};

export default BlogPost;
