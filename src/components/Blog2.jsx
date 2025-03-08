import React, { useState, useEffect } from "react";

const Blog2 = () => {
  const [content, setContent] = useState("");

  useEffect(() => {
    fetch("/blogs/blog2.txt")
      .then((response) => response.text())
      .then((text) => setContent(text));
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-6">
      <div className="max-w-4xl mx-auto bg-white p-10 rounded-lg shadow-md">
        <h1 className="text-4xl font-bold text-red-600 mb-6 text-center">
          The Role of Social Enterprises in Overcoming Financial Hurdles to Children's Education in Pakistan
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed whitespace-pre-line">{content}</p>
      </div>
    </div>
  );
};

export default Blog2;