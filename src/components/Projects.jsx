// import React, { useState } from 'react';

// const Projects = () => {
//   const [openCategory, setOpenCategory] = useState(null);
//   const [openCase, setOpenCase] = useState(null);

//   const toggleCategory = (category) => {
//     setOpenCategory(openCategory === category ? null : category);
//     setOpenCase(null); // Reset case description when changing categories
//   };

//   const toggleCase = (caseId) => {
//     setOpenCase(openCase === caseId ? null : caseId);
//   };

//   return (
//     <>
//       {/* Background Gradient */}
      
//       <div className="min-h-screen p-8 bg-gradient-to-b from-[#f3e6f9] to-[#ffffff] flex flex-col items-center overflow-x-hidden">
//         <div className="max-w-screen-lg w-full">
//           <h1 className="text-4xl font-extrabold text-center text-[#D5435C] mb-8 tracking-wide font-roboto">
//             Our Projects
//           </h1>

//           {/* Fruitful Education Category */}
//           <div className="mb-8 w-full rounded-xl shadow-lg bg-white p-6 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl box-border">
//             <h2
//               className="text-2xl font-semibold cursor-pointer text-[#D5435C] hover:text-[#7f1d1d] transition-colors duration-200 mb-4"
//               onClick={() => toggleCategory('education')}
//             >
//               Fruitful Education
//             </h2>
//             {openCategory === 'education' && (
//               <div className="mt-4 space-y-4">
//                 <p className="mb-6 text-lg text-gray-700 leading-relaxed">
//                   This project aims to ensure that all children have access to education. Many children are already benefiting from it. By overcoming financial barriers, these children can attend school and exercise their fundamental right to education.
//                 </p>
//                 <ul className="space-y-4 text-lg text-gray-700">
//                   {['Case 1', 'Case 2', 'Case 3', 'Case 4'].map((caseTitle, index) => (
//                     <li
//                       key={index}
//                       className={`flex items-start space-x-4 mb-3 transition-transform duration-300 hover:shadow-xl p-2 rounded-lg bg-gray-50 cursor-pointer ${
//                         openCase === `education-${index}` ? 'shadow-lg' : ''
//                       }`}
//                       onClick={() => toggleCase(`education-${index}`)}
//                     >
//                       <div className="flex items-center gap-3">
//                         <span
//                           className={`text-gray-500 transform transition-transform duration-300 ${
//                             openCase === `education-${index}` ? 'rotate-90' : ''
//                           }`}
//                         >
//                           {'→'}
//                         </span>
//                         <span className="font-semibold">{caseTitle}</span>
//                       </div>
//                       {openCase === `education-${index}` && (
//                         <div className="ml-6 text-lg text-gray-700 flex-grow transition-all duration-300 opacity-100">
//                           {index === 0 && "This case was about the educational expense of three siblings. The fees amount was to be collected."}
//                           {index === 1 && "The children of a widowed woman living in Rawalpindi will be able to go to school and continue their education. Amount is needed to pay the fees of the children."}
//                           {index === 2 && "Education of three siblings in Peshawar is the main focus of this case. The family struggles to save money for their children's schooling because they are living on the edge. Donations for this case will enable the children to continue their education and lessen the financial load on the family."}
//                           {index === 3 && "This case centers on the educational needs of four siblings from Barakahu, Islamabad. Currently under the sole guardianship of their mother, they face significant financial challenges. Your generous contributions can provide them with uninterrupted education."}
//                         </div>
//                       )}
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             )}
//           </div>

//           {/* Fruitful Household Category */}
//           <div className="mb-8 w-full rounded-xl shadow-lg bg-white p-6 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl box-border">
//             <h2
//               className="text-2xl font-semibold cursor-pointer text-[#D5435C] hover:text-[#7f1d1d] transition-colors duration-200 mb-4"
//               onClick={() => toggleCategory('household')}
//             >
//               Fruitful Household
//             </h2>
//             {openCategory === 'household' && (
//               <div className="mt-4 space-y-4">
//                 <p className="mb-6 text-lg text-gray-700 leading-relaxed">
//                   This project is designed to assist families in managing their households smoothly. With the support of its donors, the foundation ensures that families have sufficient funds to afford two proper meals a day. Additionally, the project addresses emergency situations as well.
//                 </p>
//                 <ul className="space-y-4 text-lg text-gray-700">
//                   {['Case 1', 'Case 2', 'Case 3'].map((caseTitle, index) => (
//                     <li
//                       key={index}
//                       className={`flex items-start space-x-4 mb-3 transition-transform duration-300 hover:shadow-xl p-2 rounded-lg bg-gray-50 cursor-pointer ${
//                         openCase === `household-${index}` ? 'shadow-lg' : ''
//                       }`}
//                       onClick={() => toggleCase(`household-${index}`)}
//                     >
//                       <div className="flex items-center gap-3">
//                         <span
//                           className={`text-gray-500 transform transition-transform duration-300 ${
//                             openCase === `household-${index}` ? 'rotate-90' : ''
//                           }`}
//                         >
//                           {'→'}
//                         </span>
//                         <span className="font-semibold">{caseTitle}</span>
//                       </div>
//                       {openCase === `household-${index}` && (
//                         <div className="ml-6 text-lg text-gray-700 flex-grow transition-all duration-300 opacity-100">
//                           {index === 0 && "Empowering education for daughters of a disabled hero. The man works hard for the family but is not able to pay the fees of his children."}
//                           {index === 1 && "The monthly support for a widow and her three children is the primary focus of this case. Located in the small town of Rawalpindi, Dhalla, Zainab Bibi is struggling to bear day-to-day expenses. We aim to collect enough donations to help her get food and medicine. Rent and education have already been managed."}
//                           {index === 2 && "In Talagang, a dedicated security guard is enduring immense financial strain while selflessly caring for his family. He is the sole provider for his four children and two sisters-in-law, who now depend on his support."}
//                         </div>
//                       )}
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Projects;


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
    <div className="min-h-screen p-8 bg-gradient-to-b from-[#f3e6f9] to-[#ffffff] flex flex-col items-center overflow-x-hidden">
      <div className="max-w-screen-lg w-full space-y-8">
        {/* Project 1 */}
        <div className="w-full rounded-xl shadow-lg bg-white p-6 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl box-border">
          {!showDetails.project1 ? (
            // Summary View for Project 1
            <>
              <div className="flex flex-row">
                <img
                  src="/project1.jpg"
                  alt="Digital Banking Project 1"
                  className="w-1/4 h-auto rounded-lg"
                />
                <div className="ml-6">
                  <h2 className="text-2xl font-semibold text-[#D5435C] mb-4">
                    Fruitful Educations
                  </h2>
                  <p className="text-lg text-gray-700 mb-4 leading-relaxed">
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
            </>
          ) : (
            // Detailed View for Project 1
            <div>
              <h2 className="text-2xl font-semibold text-[#D5435C] mb-4">
              Fruitful Educations
              </h2>
              <ul className="space-y-4 text-lg text-gray-700">
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
        <div className="w-full rounded-xl shadow-lg bg-white p-6 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl box-border">
          {!showDetails.project2 ? (
            // Summary View for Project 2
            <>
              <div className="flex flex-row">
                <img
                  src="/project2.jpg"
                  alt="Digital Banking Project 2"
                  className="w-1/4 h-auto rounded-lg"
                />
                <div className="ml-6">
                  <h2 className="text-2xl font-semibold text-[#D5435C] mb-4">
                  Fruitful Households
                  </h2>
                  <p className="text-lg text-gray-700 mb-4 leading-relaxed">
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
            </>
          ) : (
            // Detailed View for Project 2
            <div>
              <h2 className="text-2xl font-semibold text-[#D5435C] mb-4">
                Fruitful Households
              </h2>
              <ul className="space-y-4 text-lg text-gray-700">
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
