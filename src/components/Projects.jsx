import React, { useState } from 'react';

const Projects = () => {
  const [showDetails, setShowDetails] = useState({ project1: false, project2: false });

  const toggleDetails = (project) => {
    setShowDetails((prevState) => ({
      ...prevState,
      [project]: !prevState[project],
    }));
  };

  return (
    <div className="min-h-screen p-4 sm:p-8 bg-gradient-to-b from-[#f3e6f9] to-[#ffffff] flex flex-col items-center overflow-x-hidden">
      <div className="max-w-screen-lg w-full space-y-8">
        {/* Project 1 */}
        <div className="w-full rounded-xl shadow-lg bg-white p-4 sm:p-6 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl box-border">
          {!showDetails.project1 ? (
            // Summary View for Project 1
            <div className="flex flex-wrap items-start">
              <img
                src="/project1.jpg"
                alt="Digital Banking Project 1"
                className="w-full sm:w-1/4 h-auto rounded-lg mb-4 sm:mb-0"
              />
              <div className="sm:ml-6 flex-1">
                <h2 className="text-xl sm:text-2xl font-semibold text-[#D5435C] mb-4">
                  Fruitful Education
                </h2>
                <p className="text-base sm:text-lg text-gray-700 mb-4 leading-relaxed">
                  Providing educational support to underprivileged children by addressing financial barriers and enabling uninterrupted learning opportunities.
                </p>
                <button
                  className="bg-red-500 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-red-700 transition-colors duration-200"
                  onClick={() => toggleDetails('project1')}
                >
                  View Cases
                </button>
              </div>
            </div>
          ) : (
            // Detailed View for Project 1
            <div>
              <h2 className="text-xl sm:text-2xl font-semibold text-[#D5435C] mb-4">
                Fruitful Education
              </h2>
              <ul className="space-y-4 text-base sm:text-lg text-gray-700">
                <li className="p-4 rounded-lg bg-gray-50 shadow-md">
                  <h3 className="text-lg font-bold mb-2">Case 1:</h3>
                  <p>
                    This case was about the educational expense of three siblings. The fees amount was to be collected.
                  </p>
                </li>
                <li className="p-4 rounded-lg bg-gray-50 shadow-md">
                  <h3 className="text-lg font-bold mb-2">Case 2:</h3>
                  <p>
                    The children of a widowed woman living in Rawalpindi will be able to go to school and continue their education. Amount is needed to pay the fees of the children.
                  </p>
                </li>
                <li className="p-4 rounded-lg bg-gray-50 shadow-md">
                  <h3 className="text-lg font-bold mb-2">Case 3:</h3>
                  <p>
                    Education of three siblings in Peshawar is the main focus of this case. The family struggles to save money for their children's schooling because they are living on the edge. Donations for this case will enable the children to continue their education and lessen the financial load on the family.
                  </p>
                </li>
                <li className="p-4 rounded-lg bg-gray-50 shadow-md">
                  <h3 className="text-lg font-bold mb-2">Case 4:</h3>
                  <p>
                    This case centers on the educational needs of four siblings from Barakahu, Islamabad. Currently under the sole guardianship of their mother, they face significant financial challenges. Your generous contributions can provide them with uninterrupted education.
                  </p>
                </li>
              </ul>
              <button
                className="mt-6 bg-red-500 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-red-700 transition-colors duration-200"
                onClick={() => toggleDetails('project1')}
              >
                Back
              </button>
            </div>
          )}
        </div>

        {/* Project 2 */}
        <div className="w-full rounded-xl shadow-lg bg-white p-4 sm:p-6 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl box-border">
          {!showDetails.project2 ? (
            // Summary View for Project 2
            <div className="flex flex-wrap items-start">
              <img
                src="/project2.jpg"
                alt="Digital Banking Project 2"
                className="w-full sm:w-1/4 h-auto rounded-lg mb-4 sm:mb-0"
              />
              <div className="sm:ml-6 flex-1">
                <h2 className="text-xl sm:text-2xl font-semibold text-[#D5435C] mb-4">
                  Fruitful Household
                </h2>
                <p className="text-base sm:text-lg text-gray-700 mb-4 leading-relaxed">
                  Supporting families in financial distress by providing essentials, education, and care for those struggling to make ends meet.
                </p>
                <button
                  className="bg-red-500 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-red-700 transition-colors duration-200"
                  onClick={() => toggleDetails('project2')}
                >
                  View Cases
                </button>
              </div>
            </div>
          ) : (
            // Detailed View for Project 2
            <div>
              <h2 className="text-xl sm:text-2xl font-semibold text-[#D5435C] mb-4">
                Fruitful Household
              </h2>
              <ul className="space-y-4 text-base sm:text-lg text-gray-700">
                <li className="p-4 rounded-lg bg-gray-50 shadow-md">
                  <h3 className="text-lg font-bold mb-2">Case 1:</h3>
                  <p>
                    Empowering education for daughters of a disabled hero. The man works hard for the family but is not able to pay the fees of his children.
                  </p>
                </li>
                <li className="p-4 rounded-lg bg-gray-50 shadow-md">
                  <h3 className="text-lg font-bold mb-2">Case 2:</h3>
                  <p>
                    The monthly support for a widow and her three children is the primary focus of this case. Located in the small town of Rawalpindi, Dhalla, Zainab Bibi is struggling to bear day-to-day expenses. We aim to collect enough donations to help her get food and medicine. Rent and education have already been managed.
                  </p>
                </li>
                <li className="p-4 rounded-lg bg-gray-50 shadow-md">
                  <h3 className="text-lg font-bold mb-2">Case 3:</h3>
                  <p>
                    In Talagang, a dedicated security guard is enduring immense financial strain while selflessly caring for his family. He is the sole provider for his four children and two sisters-in-law, who now depend on his support.
                  </p>
                </li>
              </ul>
              <button
                className="mt-6 bg-red-500 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-red-700 transition-colors duration-200"
                onClick={() => toggleDetails('project2')}
              >
                Back
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects;
