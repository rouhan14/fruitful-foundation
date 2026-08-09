import React from "react";
import { Link } from "react-router-dom";
import Reveal from "./Reveal";

const whatWeDo = [
  {
    title: "Educational Empowerment",
    tags: ["Learning centers", "Micro-scholarships", "Pay-It-Forward", "Girls' education", "Digital classrooms"],
    text:
      "We provide accessible education by establishing learning centers and enhancing school infrastructure. From micro-scholarships and the \"Pay-It-Forward\" model to work-study programs, we ensure education remains a priority. We are equally committed to bridging the gender gap by providing specialized support for girls' education and leveraging digital classrooms to reach students in remote areas.",
  },
  {
    title: "Basic Need Fulfillment",
    tags: ["Food & shelter", "School supplies", "Transport support", "Exam fee support"],
    text:
      "Understanding that people cannot live if their basic needs are unmet, we provide essential support including food, clothing, and shelter to struggling families. We also alleviate financial pressures on households by providing school supplies, subsidized transportation, and exam fee support.",
  },
  {
    title: "Health, Water & Sanitation",
    tags: ["Water boring", "Clean water access", "Family health"],
    text:
      "We improve community well-being by implementing vital water and sanitation projects, such as water boring, ensuring clean and safe resources for those in need. Our health initiatives aim to provide necessary support to vulnerable families, creating a healthier foundation for the next generation.",
  },
  {
    title: "Skill Development & Welfare",
    tags: ["Vocational training", "Microfinance", "Tree-planting"],
    text:
      "We empower women through vocational training and microfinance initiatives to promote financial independence. Furthermore, we are committed to long-term environmental health, actively engaging in initiatives such as tree-planting campaigns to foster a greener, more resilient Pakistan.",
  },
];

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Intro */}
      <section className="py-16 px-6 bg-gradient-to-b from-red-50 to-white">
        <Reveal>
          <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-6">
            <span className="text-gray-900">Empowering </span>
            <span className="text-red-700">Communities</span>
            <span className="text-gray-900">, Restoring </span>
            <span className="text-green-600">Opportunity</span>
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto text-center mb-10">
            At <strong>Fruitful Foundation</strong>, we believe that education is the fundamental
            key to breaking the cycle of poverty; however, we recognize that true community
            upliftment requires a holistic approach. As a dedicated non-profit organization, we
            are committed to eradicating the social and financial barriers that hinder
            underprivileged communities across Pakistan. While our primary focus remains on
            ensuring every child has access to quality education, we work simultaneously to
            address critical needs in health, water, sanitation, skill development, and
            environmental welfare to foster a brighter, more sustainable future.
          </p>
        </Reveal>
        <Reveal delay={0.15}>
          <img
            src="/about/about-hero.png"
            alt="Fruitful Foundation's holistic approach: education, health, clean water, sanitation, skill development, and environmental welfare"
            loading="lazy"
            className="rounded-2xl shadow-xl max-w-3xl w-full mx-auto"
          />
        </Reveal>
      </section>

      {/* Our Mission */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <Reveal direction="left">
            <img
              src="/about/our-mission.png"
              alt="Our Mission: removing barriers, education, community, and funding"
              loading="lazy"
              className="rounded-2xl shadow-xl w-full"
            />
          </Reveal>
          <Reveal direction="right">
            <h2 className="text-3xl font-bold text-red-700 mb-4 text-center md:text-left">
              Our Mission
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed text-center md:text-left">
              Our mission is to empower underprivileged communities by making quality education
              accessible and addressing the systemic challenges that impede social development.
              Through sustainable solutions, innovative funding, and community-driven initiatives,
              we strive to remove financial constraints, whether in the classroom or in daily
              life, ensuring that no family is left behind.
            </p>
          </Reveal>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-16 px-6 bg-gray-50">
        <Reveal>
          <h2 className="text-3xl font-bold text-red-700 mb-4 text-center">What We Do</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto text-center mb-12">
            We approach community development through a multi-faceted lens.
          </p>
        </Reveal>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-12">
          <Reveal direction="left">
            <img
              src="/about/what-we-do.png"
              alt="What We Do: educational empowerment, basic need fulfillment, health water and sanitation, skill development and welfare"
              loading="lazy"
              className="rounded-2xl shadow-xl w-full"
            />
          </Reveal>
          <Reveal direction="right">
            <div className="space-y-8">
              {whatWeDo.map((item) => (
                <div key={item.title} className="text-center md:text-left">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-700 mb-3">{item.text}</p>
                  <div className="flex flex-wrap justify-center md:justify-start gap-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-medium bg-white border border-red-200 text-red-700 px-3 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Our Impact */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <Reveal direction="right" className="order-2 md:order-1">
            <h2 className="text-3xl font-bold text-red-700 mb-4 text-center md:text-left">
              Our Impact
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed text-center md:text-left">
              Over the years, Fruitful Foundation has reached over 5,000 beneficiaries through its
              wide-ranging work, including thousands of education cases and numerous community
              relief campaigns. By providing nutritious meals, clean water, and vital skills, we
              have ensured stability for countless families. Our partnerships with sponsors and
              volunteers have allowed us to develop self-sustaining models that continue to expand
              our reach, removing barriers to both learning and livelihood.
            </p>
          </Reveal>
          <Reveal direction="left" className="order-1 md:order-2">
            <img
              src="/about/our-impact.png"
              alt="Our Impact: 5,000+ beneficiaries reached through nutritious meals, clean water, and vital skills"
              loading="lazy"
              className="rounded-2xl shadow-xl w-full"
            />
          </Reveal>
        </div>
      </section>

      {/* Join Us CTA */}
      <section className="py-16 px-6 bg-red-700 text-center">
        <Reveal>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Join Us in Transforming Communities
          </h2>
          <p className="text-red-50 max-w-2xl mx-auto mb-8 leading-relaxed">
            At Fruitful Foundation, we believe in the power of collective action. Whether you are
            a donor, volunteer, or partner, your support helps us ensure that every child receives
            an education and every community gains the resources to thrive. Together, we can break
            down barriers, uplift lives, and create a stronger, more empowered nation.
          </p>
          <p className="text-white font-semibold text-lg mb-8">
            Join us today because every life and every future matters.
          </p>
          <Link
            to="/contacts"
            className="inline-block bg-white text-red-700 font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-red-50 transition-all duration-300 transform hover:scale-105"
          >
            Get Involved
          </Link>
        </Reveal>
      </section>
    </div>
  );
};

export default About;
