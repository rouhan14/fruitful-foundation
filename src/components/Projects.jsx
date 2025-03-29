import React from "react";

const projects = [
  {
    title: "Fruitful Education: Sponsor-A-Child Program",
    description:
      "Education should never be a privilege—it should be a right. Through our Sponsor-A-Child Program, we provide financial aid that covers tuition fees, school supplies, uniforms, and other essential educational expenses. This initiative connects compassionate sponsors with students in need, fostering a cycle of opportunity and empowerment.",
    image: "images/IMG_5240.JPG",
  },
  {
    title: "Fruitful Business Start-Up Support",
    description:
      "The Fruitful Business Start-Up Support project is designed to help individuals launch their own businesses and support their households. We offer comprehensive training in business planning, marketing, and financial management. Additionally, we provide access to microloans and networking opportunities to ensure that aspiring entrepreneurs have the tools they need to succeed.",
    image: "images/IMG_5241.JPG",
  },
  {
    title: "Fruitful Women Empowerment Program",
    description:
      "Our Fruitful Women Empowerment Program aims to provide women with the skills and resources they need to earn a sustainable living. Through vocational training, financial literacy workshops, and mentorship, we empower women to become self-reliant and confident in their abilities. Our goal is to create a supportive community where women can thrive and contribute to their households and society.",
    image: "images/IMG_5242.JPG",
  },
  {
    title: "Fruitful Pay-It-Forward Scholarship Model",
    description:
      "We believe in creating a self-sustaining cycle of generosity. Through our Pay-It-Forward Scholarship Model, students who have benefited from our support pledge to fund the education of future students once they become financially stable. This initiative fosters a sense of responsibility and community, ensuring that every generation lifts the next.",
    image: "images/IMG_5243.JPG",
  },
  {
    title: "Fruitful Emergency Assistance Program",
    description:
      "Our Fruitful Emergency Assistance Program is dedicated to providing immediate support to families facing urgent household matters. Whether it’s a sudden medical expense, housing crisis, or other emergency, we offer financial aid and resources to help families navigate these challenging situations. Our aim is to provide a safety net for those in need, ensuring stability and peace of mind.",
    image: "images/IMG_5244.JPG",
  },
  {
    title: "Fruitful School Essentials Bank",
    description:
      "For many families, hidden costs such as books, stationery, and transport become obstacles to education. Our School Essentials Bank provides free learning materials, ensuring that students have the resources they need to focus on their studies without financial strain.",
    image: "images/IMG_5245.JPG",
  },
  {
    title: "Fruitful Debt Relief Initiative",
    description:
      "The Fruitful Debt Relief Initiative focuses on helping individuals and families pay off their loans and achieve financial stability. We offer personalized financial counseling, debt management plans, and access to resources that can help reduce the burden of debt. Our objective is to empower people to regain control of their finances and build a secure future.",
    image: "images/IMG_5246.JPG",
  },
];

const Projects = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-6">
      <div className="max-w-6xl mx-auto bg-white p-10 rounded-lg shadow-md">
        <h1 className="text-4xl font-bold text-red-600 mb-10 text-center">
          Our Projects
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed text-center max-w-3xl mx-auto mb-10">
          At <strong>Fruitful Foundation</strong>, our flagship projects are at the heart of our mission to make quality education
          accessible to every child in Pakistan. These high-impact initiatives address the root causes of educational
          inequality, ensuring that financial barriers never stand in the way of a child’s future. Through innovation,
          collaboration, and sustainable solutions, we are creating long-term change, empowering students, and transforming communities.
        </p>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-lg shadow-lg text-center"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover rounded-md mb-4"
              />
              <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                {project.title}
              </h2>
              <p className="text-lg text-gray-700">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;