import React, { useState } from 'react';

const Projects = () => {
  const [openCategory, setOpenCategory] = useState(null);
  const [openCase, setOpenCase] = useState(null);

  const toggleCategory = (category) => {
    setOpenCategory(openCategory === category ? null : category);
    setOpenCase(null); // Reset case description when changing categories
  };

  const toggleCase = (caseId) => {
    setOpenCase(openCase === caseId ? null : caseId);
  };

  return (
    <>
      <div className="absolute top-0 z-[-2] h-screen w-screen rotate-180 transform bg-gradient-to-b from-[#f3e6f9] to-[#ffffff]"></div>
      <div className="min-h-screen p-8 bg-gradient-to-b from-[#f3e6f9] to-[#ffffff]">
        <h1 className="text-4xl font-extrabold text-center text-[#D5435C] mb-8 tracking-wide font-roboto">
          Our Projects
        </h1>

        {/* Fruitful Education Category */}
        <div className="mb-8 ml-10 rounded-xl shadow-lg bg-white p-6 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
          <h2
            className="text-2xl font-semibold cursor-pointer text-[#D5435C] hover:text-[#7f1d1d] transition-colors duration-200 mb-4"
            onClick={() => toggleCategory('education')}
          >
            Fruitful Education
          </h2>
          {openCategory === 'education' && (
            <div className="mt-4 space-y-4">
              <p className="mb-6 text-lg text-gray-700 leading-relaxed transition-all duration-500 ease-in-out opacity-100">
                This project aims to ensure that all children have access to education. Many children are already benefiting from it. By overcoming financial barriers, these children can attend school and exercise their fundamental right to education.
              </p>
              <ul className="space-y-4 text-lg text-gray-700">
                {['Case 1', 'Case 2', 'Case 3', 'Case 4'].map((caseTitle, index) => (
                  <li
                    key={index}
                    className="flex items-start space-x-4 mb-3 transition-transform duration-300  hover:shadow-xl p-2 rounded-lg bg-gray-50"
                  >
                    {/* Left section (Case title and arrow) */}
                    <div className="flex items-center gap-3 cursor-pointer">
                      <span
                        className="font-semibold flex items-center gap-2"
                        onClick={() => toggleCase(`education-${index}`)}
                      >
                        <span
                          className={`text-gray-500 transform transition-transform duration-300 ${
                            openCase === `education-${index}` ? 'rotate-90' : ''
                          }`}
                        >
                          {'→'}
                        </span>
                        {caseTitle}
                      </span>
                    </div>

                    {/* Right section (Case description) */}
                    {openCase === `education-${index}` && (
                      <div className="ml-6 text-lg text-gray-700 flex-grow transition-all duration-300 opacity-100">
                        {index === 0 && "This case was about the educational expense of three siblings. The fees amount was to be collected."}
                        {index === 1 && "The children of a widowed woman living in Rawalpindi will be able to go to school and continue their education. Amount is needed to pay the fees of the children."}
                        {index === 2 && "Education of three siblings in Peshawar is the main focus of this case. The family struggles to save money for their children's schooling because they are living on the edge. Donations for this case will enable the children to continue their education and lessen the financial load on the family."}
                        {index === 3 && "This case centers on the educational needs of four siblings from Barakahu, Islamabad. Currently under the sole guardianship of their mother, they face significant financial challenges. Your generous contributions can provide them with uninterrupted education."}
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Fruitful Household Category */}
        <div className="mb-8 ml-10 rounded-xl shadow-lg bg-white p-6 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
          <h2
            className="text-2xl font-semibold cursor-pointer text-[#D5435C] hover:text-[#7f1d1d] transition-colors duration-200 mb-4"
            onClick={() => toggleCategory('household')}
          >
            Fruitful Household
          </h2>
          {openCategory === 'household' && (
            <div className="mt-4 space-y-4">
              <p className="mb-6 text-lg text-gray-700 leading-relaxed transition-all duration-500 ease-in-out opacity-100">
                This project is designed to assist families in managing their households smoothly. With the support of its donors, the foundation ensures that families have sufficient funds to afford two proper meals a day. Additionally, the project addresses emergency situations as well.
              </p>
              <ul className="space-y-4 text-lg text-gray-700">
                {['Case 1', 'Case 2', 'Case 3'].map((caseTitle, index) => (
                  <li
                    key={index}
                    className="flex items-start space-x-4 mb-3 transition-transform duration-300 hover:scale-100 hover:shadow-xl p-2 rounded-lg bg-gray-50"
                  >
                    {/* Left section (Case title and arrow) */}
                    <div className="flex items-center gap-3 cursor-pointer">
                      <span
                        className="font-semibold flex items-center gap-2"
                        onClick={() => toggleCase(`household-${index}`)}
                      >
                        <span
                          className={`text-gray-500 transform transition-transform duration-300 ${
                            openCase === `household-${index}` ? 'rotate-90' : ''
                          }`}
                        >
                          {'→'}
                        </span>
                        {caseTitle}
                      </span>
                    </div>

                    {/* Right section (Case description) */}
                    {openCase === `household-${index}` && (
                      <div className="ml-6 text-lg text-gray-700 flex-grow transition-all duration-300 opacity-100">
                        {index === 0 && "Empowering education for daughters of a disabled hero. The man works hard for the family but is not able to pay the fees of his children."}
                        {index === 1 && "The monthly support for a widow and her three children is the primary focus of this case. Located in the small town of Rawalpindi, Dhalla, Zainab Bibi is struggling to bear day-to-day expenses. We aim to collect enough donations to help her get food and medicine. Rent and education have already been managed."}
                        {index === 2 && "In Talagang, a dedicated security guard is enduring immense financial strain while selflessly caring for his family. He is the sole provider for his four children and two sisters-in-law, who now depend on his support."}
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Projects;
