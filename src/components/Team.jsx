import React, { useState } from "react";

const teamSections = [
  {
    title: "Founding Partners",
    centerAlign: true,
    members: [
      { name: "Rayan Malik", role: "CEO & Founder", image: "/rayan.JPG" },
      { name: "Muhammad Khuzaima Qureshi", role: "COO & Co-Founder", image: "/khuzaima2.webp" },
    ],
  },
  {
    title: "Central Executive Directorate",
    centerAlign: true,
    members: [
      { name: "Falak Sher Mir", role: "Director Fundraising & Development", image: "/falak.jpg" },
      { name: "Ayna Dua", role: "Director Media & Communications", image: "/ayna.jpg" },
      { name: "Abdul Sammi", role: "Director Outreach & Operations", image: "/sammi.JPG" },
      { name: "Noor ul Harem", role: "Director Web & IT", image: "/noor.jpeg" },
      { name: "Shayan Khan", role: "Director Impact & Sustainability", image: "/shayyan.JPG" },
      { name: "Muhammad Khuzaima", role: "Content Head", image: "/khuzaima1.jpg" },
    ],
  },
];

const campusTeams = [
  { title: "NUST Chapter", image: "/nust.jpg", shortDesc: "NUST student chapter.", description: "This is the NUST team." },
  { title: "COMSATS Lahore Chapter", image: "/comsats.jpg", shortDesc: "COMSATS Lahore student chapter.", description: "This is the COMSATS Lahore team." },
  { title: "FAST Islamabad Chapter", image: "/fast.jpg", shortDesc: "FAST Islamabad student chapter.", description: "This is the FAST team." },
  { title: "GIKI Chapter", image: "/giki.jpg", shortDesc: "GIKI student chapter.", description: "This is the GIKI team." },
  { title: "UMT Chapter", image: "/umt.jpg", shortDesc: "UMT student chapter.", description: "This is the UMT team." },
  { title: "TUF Chapter", image: "/tuf.jpg", shortDesc: "TUF student chapter.", description: "This is the TUF team." },
];

const TeamCard = ({ member }) => (
  <div className="bg-gray-50 p-6 rounded-lg shadow-lg flex flex-col items-center justify-between w-full h-full min-h-[300px]">
    {member.image && (
      <img
        src={member.image}
        alt={member.name}
        className="w-32 h-32 mx-auto rounded-full shadow-md object-cover mb-4"
      />
    )}
    <div className="text-center">
      <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
      <p className="text-md text-gray-600">{member.role}</p>
    </div>
  </div>
);

const CampusModule = ({ campus, onSeeMore }) => (
  <div className="bg-white rounded-xl shadow-md p-6 flex flex-col justify-between h-80 w-full hover:shadow-lg transition relative">
    {/* Image */}
    <img
      src={campus.image}
      alt={campus.title}
      className="w-24 h-24 mx-auto mb-4 object-contain"
    />
    {/* Title + Short Desc */}
    <div className="text-center">
      <h3 className="text-lg font-semibold text-gray-800 mb-2">{campus.title}</h3>
      <p className="text-sm text-gray-600">{campus.shortDesc}</p>
    </div>
    {/* See More Link */}
    <p
      onClick={onSeeMore}
      className="text-red-600 text-sm font-semibold absolute bottom-2 right-4 cursor-pointer hover:underline"
    >
      See More →
    </p>
  </div>
);


const Team = () => {
  const [selectedCampus, setSelectedCampus] = useState(null);

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-6">
      <div className="max-w-6xl mx-auto bg-white p-10 rounded-lg shadow-md">
        <h1 className="text-4xl font-bold text-red-600 mb-8 text-center">
          Meet Our Team
        </h1>

        {teamSections.map((section, index) => (
          <div key={index} className="mb-12">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
              {section.title}
            </h2>

            <div
              className={`grid gap-6 ${
                section.title === "Founding Partners"
                  ? "grid-cols-1 sm:grid-cols-2 place-items-center"
                  : section.centerAlign
                  ? "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 place-items-center"
                  : "grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5"
              }`}
            >
              {section.members.map((member, idx) => (
                <TeamCard key={idx} member={member} />
              ))}
            </div>
          </div>
        ))}

        {/* Campus Teams Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
            Campus Teams
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {campusTeams.map((campus, idx) => (
              <CampusModule
                key={idx}
                campus={campus}
                onSeeMore={() => setSelectedCampus(campus)}
              />
            ))}
          </div>
        </div>

        {/* Modal for Selected Campus */}
        {selectedCampus && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white w-11/12 md:w-3/4 lg:w-1/2 p-6 rounded-lg overflow-y-auto max-h-[80vh] relative">
              <button
                className="absolute top-4 right-4 text-red-600 font-bold"
                onClick={() => setSelectedCampus(null)}
              >
                ✕
              </button>
              <h3 className="text-2xl font-semibold mb-4">
                {selectedCampus.title}
              </h3>
              <p className="mb-4">{selectedCampus.description}</p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                <div className="bg-gray-100 p-4 rounded-md text-center">
                  <p className="text-gray-600">Team member cards go here</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Team;

