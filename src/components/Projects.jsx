import React from "react";
import Reveal from "./Reveal";

const projects = [
  {
    title: "Fruitful Education: Sponsor-A-Child Program",
    description:
      "Education should never be a privilege—it should be a right. Through our Sponsor-A-Child Program, we provide financial aid that covers tuition fees, school supplies, uniforms, and other essential educational expenses. This initiative connects compassionate sponsors with students in need, fostering a cycle of opportunity and empowerment.",
    image: "/projects/sponsor-a-child.png",
  },
  {
    title: "Fruitful Business Start-Up Support",
    description:
      "The Fruitful Business Start-Up Support project is designed to help individuals launch their own businesses and support their households. We offer comprehensive training in business planning, marketing, and financial management. Additionally, we provide access to microloans and networking opportunities to ensure that aspiring entrepreneurs have the tools they need to succeed.",
    image: "/projects/business-startup.png",
  },
  {
    title: "Fruitful Women Empowerment Program",
    description:
      "Our Fruitful Women Empowerment Program aims to provide women with the skills and resources they need to earn a sustainable living. Through vocational training, financial literacy workshops, and mentorship, we empower women to become self-reliant and confident in their abilities. Our goal is to create a supportive community where women can thrive and contribute to their households and society.",
    image: "/projects/women-empowerment.png",
  },
  {
    title: "Fruitful Pay-It-Forward Scholarship Model",
    description:
      "We believe in creating a self-sustaining cycle of generosity. Through our Pay-It-Forward Scholarship Model, students who have benefited from our support pledge to fund the education of future students once they become financially stable. This initiative fosters a sense of responsibility and community, ensuring that every generation lifts the next.",
    image: "/projects/pay-it-forward.png",
  },
  {
    title: "Fruitful Emergency Assistance Program",
    description:
      "Our Fruitful Emergency Assistance Program is dedicated to providing immediate support to families facing urgent household matters. Whether it's a sudden medical expense, housing crisis, or other emergency, we offer financial aid and resources to help families navigate these challenging situations. Our aim is to provide a safety net for those in need, ensuring stability and peace of mind.",
    image: "/projects/emergency-assistance.png",
  },
  {
    title: "Fruitful School Essentials Bank",
    description:
      "For many families, hidden costs such as books, stationery, and transport become obstacles to education. Our School Essentials Bank provides free learning materials, ensuring that students have the resources they need to focus on their studies without financial strain.",
    image: "/projects/school-essentials.png",
  },
  {
    title: "Fruitful Debt Relief Initiative",
    description:
      "The Fruitful Debt Relief Initiative focuses on helping individuals and families pay off their loans and achieve financial stability. We offer personalized financial counseling, debt management plans, and access to resources that can help reduce the burden of debt. Our objective is to empower people to regain control of their finances and build a secure future.",
    image: "/projects/debt-relief.png",
  },
];

const Projects = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <h1 className="text-4xl md:text-5xl font-bold text-red-700 mb-6 text-center">
            Our Projects
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed text-center max-w-3xl mx-auto mb-14">
            At <strong>Fruitful Foundation</strong>, our flagship projects are at the heart of our
            mission to make quality education accessible to every child in Pakistan. These
            high-impact initiatives address the root causes of educational inequality, ensuring
            that financial barriers never stand in the way of a child's future. Through
            innovation, collaboration, and sustainable solutions, we are creating long-term
            change, empowering students, and transforming communities.
          </p>
        </Reveal>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <Reveal key={project.title} delay={index * 0.05}>
              <div className="bg-red-700 rounded-2xl shadow-lg overflow-hidden flex flex-col md:flex-row items-center gap-8 p-6 md:p-10">
                <div className="w-full md:w-64 flex-shrink-0">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="w-full rounded-xl shadow-md bg-white"
                  />
                </div>
                <div className="text-center md:text-left">
                  <h2 className="text-2xl font-bold text-white mb-3">{project.title}</h2>
                  <p className="text-red-50 leading-relaxed">{project.description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
