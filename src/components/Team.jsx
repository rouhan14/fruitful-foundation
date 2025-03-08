import React from "react";

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
    title: "Executive Council",
    centerAlign: true,
    members: [
      { name: "Asadullah Ashraf", role: "Manager Campus Teams", image: "/Asadullah.PNG" },
      { name: "Muhammad Khuzaima", role: "Content Head", image: "/khuzaima1.jpg" },
      { name: "Aaleen Fatima", role: "Donor Relations Manager", image: "/aaleen.jpg" },
    ],
  },
  {
    title: "Permanent Members",
    centerAlign: false,
    fullWidth: true,
    members: [
      { name: "Muhammad Shayan Khan Babar", role: "VP Impact and Sustainability", image: "/shayyan.JPG" },
      { name: "Falak Sher", role: "VP Fundraising and Development", image: "/falak.jpg" },
      { name: "Abdul Sammi", role: "VP Operations", image: "/sammi.JPG" },
      { name: "Ayna Dua", role: "VP Marketing & Communications", image: "/ayna.jpg" },
      { name: "Noor ul Harem", role: "VP Branding", image: "/noor.jpeg" },
    ],
  },
  {
    title: "NUST Islamabad Interns",
    centerAlign: false,
    members: [
      "Shuja Ahmad Farooq",
      "Zohra Waseem",
      "Moazma Shehar Bano",
      "Hanzla Abdur Rehman",
      "Muhammad Adnan Khalid",
      "Nazineen Mir Baz",
      "Sameer Abbasi",
      "Shamel Mujtaba",
      "Yusra Imtiaz Malik",
      "Huzaifa Rauf",
      "Fatima Habib",
      "Zukhruf Qayyum",
      "Chaudhry Muhammad Shahram Akbar",
      "Urwah Rasheed",
      "Muhammad Saher",
      "Talha Baloch",
    ],
  },
];

const Team = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-6">
      <div className="max-w-6xl mx-auto bg-white p-10 rounded-lg shadow-md">
        <h1 className="text-4xl font-bold text-red-600 mb-8 text-center">Meet Our Team</h1>

        {teamSections.map((section, index) => (
          <div key={index} className="mb-12">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">{section.title}</h2>
            
            {/* Responsive Grid Layout */}
            <div
              className={`grid gap-6 ${
                section.title === "Founding Partners" ? "grid-cols-1 sm:grid-cols-2 justify-center" :
                section.title === "NUST Islamabad Interns" ? "grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5" :
                section.centerAlign ? "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-center" :
                "grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5"
              }`}
            >
              {section.members.map((member, idx) => (
                typeof member === "string" ? (
                  <div key={idx} className="bg-gray-50 p-4 rounded-lg shadow-md text-center text-lg font-medium text-gray-800">
                    {member}
                  </div>
                ) : (
                  <div key={idx} className="bg-gray-50 p-6 rounded-lg shadow-lg text-center">
                    {member.image && (
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-40 h-40 mx-auto rounded-full shadow-md object-cover mb-4"
                      />
                    )}
                    <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
                    <p className="text-md text-gray-600">{member.role}</p>
                  </div>
                )
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
