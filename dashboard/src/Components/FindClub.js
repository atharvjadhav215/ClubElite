// import React, { useState } from "react";
// import skillsAndClubs from "../config/skillsAndClubs";
// import { useNavigate } from "react-router-dom"; // Ensure this is imported if you're using navigation

// export default function FindClub() {
//   const [input, setInput] = useState("");
//   const [suggestions, setSuggestions] = useState([]);
//   const [recommendedClubs, setRecommendedClubs] = useState([]);
//   const navigate = useNavigate();

//   const allSkills = Object.keys(skillsAndClubs);

//   const handleInputChange = (e) => {
//     const value = e.target.value;
//     setInput(value);

//     if (value.length > 0) {
//       const matches = allSkills.filter((skill) =>
//         skill.toLowerCase().includes(value.toLowerCase())
//       );
//       setSuggestions(matches.slice(0, 5)); // Limit suggestions to 5
//     } else {
//       setSuggestions([]);
//     }
//   };

//   const handleSkillSelect = (skill) => {
//     setInput(skill);
//     setSuggestions([]);
//     setRecommendedClubs(skillsAndClubs[skill] || []);
//   };

//   const clubs = [
//     { name: "AALEKH", rating: 8, img: "https://mitaoe.ac.in/assets/images/club/aalekh.jpg" },
//     { name: "AERO", rating: 7, img: "https://mitaoe.ac.in/assets/images/club/aero.jpg" },
//     { name: "Autosports Club", rating: 8.5, img: "https://mitaoe.ac.in/assets/images/club/autosports.jpg" },
//     { name: "CodeChef", rating: 9, img: "https://mitaoe.ac.in/assets/images/club/MITAoE-Chefs.jpg" },
//     { name: "GDSC", rating: 9, img: "https://mitaoe.ac.in/assets/images/club/DSCMITAOE.png" },
//     { name: "Digital Design", rating: 7, img: "https://mitaoe.ac.in/assets/images/club/digital-design.jpg" },
//     { name: "Drama Club", rating: 8, img: "https://mitaoe.ac.in/assets/images/club/drama.jpg" },
//     { name: "F. L. Club", rating: 8, img: "https://mitaoe.ac.in/assets/images/club/foreign-language-club-new.png" },
//     { name: "GirlScript", rating: 9, img: "https://mitaoe.ac.in/assets/images/club/girlscript.jpg" },
//     { name: "GOONJ", rating: 7, img: "https://mitaoe.ac.in/assets/images/club/goonj.jpg" },
//     { name: "Ignited Minds", rating: 7, img: "https://mitaoe.ac.in/assets/images/club/ignitedminds.jpg" },
//     { name: "Literary Club", rating: 8, img: "https://mitaoe.ac.in/assets/images/club/literaryclub.png" },
//     { name: "Mozilla", rating: 8, img: "https://mitaoe.ac.in/assets/images/club/googlestudentandfirefox.png" },
//     { name: "Prakruti", rating: 8, img: "https://mitaoe.ac.in/assets/images/club/prakruti.png" },
//     { name: "Robotics", rating: 7, img: "https://mitaoe.ac.in/assets/images/club/roboticsclub.png" },
//     { name: "Spark Club", rating: 7, img: "https://mitaoe.ac.in/assets/images/club/spark-club.jpg" },
//     { name: "Sports Club", rating: 8, img: "https://mitaoe.ac.in/assets/images/club/mitmasterblaster.png" },
//     { name: "Srujan", rating: 8.5, img: "https://mitaoe.ac.in/assets/images/club/srukan.jpg" },
//     { name: "Shutterbugs", rating: 8, img: "https://mitaoe.ac.in/assets/images/club/shutterbug.png" },
//     { name: "Maths Club", rating: 8, img: "https://mitaoe.ac.in/assets/images/club/exesmathsclub.jpg" },
//   ];

//   return (
//     <div className="container p-4 bg-gray-100 h-full w-full mx-auto">
//       <h1 className="text-4xl font-bold mb-4   text-center mt-32 ">
//         Welcome to MITAOE's CLUB ELITE Recommendation Platform
//       </h1>
//       <h1 className="text-2xl font-bold mb-4 text-center mt-20">
//         Find the Perfect Club for Your Skills
//       </h1>
//       <div className="relative max-w-md mx-auto">
//         <input
//           type="text"
//           className="w-full border border-gray-300 rounded-lg p-2"
//           placeholder="Enter your skill..."
//           value={input}
//           onChange={handleInputChange}
//         />
//         {suggestions.length > 0 && (
//           <ul className="absolute left-0 right-0 bg-white border border-gray-300 rounded-lg mt-1 max-h-40 overflow-y-auto shadow-lg z-10">
//             {suggestions.map((skill, index) => (
//               <li
//                 key={index}
//                 className="px-4 py-2 cursor-pointer hover:bg-gray-100"
//                 onClick={() => handleSkillSelect(skill)}
//               >
//                 {skill}
//               </li>
//             ))}
//           </ul>
//         )}
//       </div>
//       <div className="mt-6">
//         {recommendedClubs.length > 0 ? (
//           <div className="flex flex-col items-center mt-20">
//             <h2 className="text-xl font-bold mb-4">Recommended Clubs:</h2>
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//               {recommendedClubs.map((clubName, index) => {
//                 const club = clubs.find((c) => c.name === clubName);
//                 if (club) {
//                   return (
//                     <div
//                       key={index}
//                       className="bg-white shadow-lg transform transition duration-100 ease-in-out hover:cursor-pointer rounded-lg hover:shadow-gray-900 hover:shadow-lg px-6 py-2 w-56"
//                       onClick={() =>
//                         navigate(`/club/${club.name.toLowerCase().replace(/\s+/g, "-")}`)
//                       }
//                       style={{
//                         animation: "fade-in-left 1.0s",
//                         animationDelay: `${index * 0.1}s`,
//                         animationFillMode: "forwards",
//                       }}
//                     >
//                       <img
//                         src={club.img}
//                         alt={club.name}
//                         className="w-32 h-32 m-3 rounded-md shadow-lg shadow-gray-500 pb-0.5 bg-black"
//                       />
//                       <div className="mt-4">
//                         <h2 className="text-xl font-bold text-gray-800 text-center">
//                           {club.name}
//                         </h2>
//                         <p className="text-gray-600 pl-7">Rating: {club.rating}/10</p>
//                       </div>
//                     </div>
//                   );
//                 }
//                 return null;
//               })}
//             </div>
//           </div>
//         ) : (
//           input && <p className="text-gray-500">No clubs found for this skill.</p>
//         )}
//       </div>








      
//     </div>
//   );
// }
import React, { useState } from "react";
import skillsAndClubs from "../config/skillsAndClubs";
import { useNavigate } from "react-router-dom";
import skillsByCategory from "../config/skills";

export default function FindClub() {
  const [input, setInput] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [recommendedClubs, setRecommendedClubs] = useState([]);
  const navigate = useNavigate();
  const [showSidebars, setShowSidebars] = useState(true);

  const allSkills = Object.keys(skillsAndClubs);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInput(value);

    if (value.length > 0) {
      const matches = allSkills.filter((skill) =>
        skill.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(matches.slice(0, 6)); // Limit suggestions to 5
    } else {
      setSuggestions([]);
    }
  };

  const handleSkillSelect = (skill) => {
    setInput(skill);
    setSuggestions([]);
    setRecommendedClubs(skillsAndClubs[skill] || []);
  };

  const clubs = [
    { name: "AALEKH", rating: 8, img: "https://mitaoe.ac.in/assets/images/club/aalekh.jpg" },
    { name: "AERO", rating: 7, img: "https://mitaoe.ac.in/assets/images/club/aero.jpg" },
    { name: "Autosports Club", rating: 8.5, img: "https://mitaoe.ac.in/assets/images/club/autosports.jpg" },
    { name: "CodeChef", rating: 9, img: "https://mitaoe.ac.in/assets/images/club/MITAoE-Chefs.jpg" },
    { name: "GDSC", rating: 9, img: "https://mitaoe.ac.in/assets/images/club/DSCMITAOE.png" },
    { name: "Digital Design", rating: 7, img: "https://mitaoe.ac.in/assets/images/club/digital-design.jpg" },
    { name: "Drama Club", rating: 8, img: "https://mitaoe.ac.in/assets/images/club/drama.jpg" },
    { name: "F. L. Club", rating: 8, img: "https://mitaoe.ac.in/assets/images/club/foreign-language-club-new.png" },
    { name: "GirlScript", rating: 9, img: "https://mitaoe.ac.in/assets/images/club/girlscript.jpg" },
    { name: "GOONJ", rating: 7, img: "https://mitaoe.ac.in/assets/images/club/goonj.jpg" },
    { name: "Ignited Minds", rating: 7, img: "https://mitaoe.ac.in/assets/images/club/ignitedminds.jpg" },
    { name: "Literary Club", rating: 8, img: "https://mitaoe.ac.in/assets/images/club/literaryclub.png" },
    { name: "Mozilla", rating: 8, img: "https://mitaoe.ac.in/assets/images/club/googlestudentandfirefox.png" },
    { name: "Prakruti", rating: 8, img: "https://mitaoe.ac.in/assets/images/club/prakruti.png" },
    { name: "Robotics", rating: 7, img: "https://mitaoe.ac.in/assets/images/club/roboticsclub.png" },
    { name: "Spark Club", rating: 7, img: "https://mitaoe.ac.in/assets/images/club/spark-club.jpg" },
    { name: "Sports Club", rating: 8, img: "https://mitaoe.ac.in/assets/images/club/mitmasterblaster.png" },
    { name: "Srujan", rating: 8.5, img: "https://mitaoe.ac.in/assets/images/club/srukan.jpg" },
    { name: "Shutterbugs", rating: 8, img: "https://mitaoe.ac.in/assets/images/club/shutterbug.png" },
    { name: "Maths Club", rating: 8, img: "https://mitaoe.ac.in/assets/images/club/exesmathsclub.jpg" },
  ];

  const Sidebar = ({ title, skills, position }) => {
    const [isVisible, ] = useState(true);
  
    return (
      <div
        className={`bg-gray-100 shadow-md p-4 w-[450px] h-screen fixed transform transition duration-100 ease-in-out hover:cursor-pointer hover:shadow-gray-900 hover:shadow-2xl hover:scale-95 ${
          position === "right"
            ? "right-0 rounded-l-full text-right"
            : "left-0 rounded-r-full"
        } top-0 mt-20`}
        style={{
          animation: `${
            isVisible
              ? position === "right"
                ? "fade-in-right"
                : "fade-in-left"
              : position === "right"
                ? "fade-out-right"
                : "fade-out-left"
          } 1.0s`,
          animationFillMode: "forwards",
        }}
      >
        <h1 className="text-3xl m-5 font-bold">Skills</h1>
        <div
          className={`overflow-y-auto h-[700px] mt-0 ${
            position === "right"
              ? "right-0 rounded-l-full text-right"
              : "left-0 rounded-r-full"
          }`}
          style={{
            scrollbarWidth: "none", // Firefox
            msOverflowStyle: "none", // IE and Edge
          }}
        >
          <style>
            {`
        /* Hide scrollbar for webkit browsers (Chrome, Safari, Edge) */
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
  
        /* Keyframe animations for fade-in and fade-out effects */
        @keyframes fade-in-right {
          from {
            opacity: 0;
            transform: translateX(100%);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
  
        @keyframes fade-in-left {
          from {
            opacity: 0;
            transform: translateX(-100%);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
  
        @keyframes fade-out-right {
          from {
            opacity: 1;
            transform: translateX(0);
          }
          to {
            opacity: 0;
            transform: translateX(100%);
          }
        }
  
        @keyframes fade-out-left {
          from {
            opacity: 1;
            transform: translateX(0);
          }
          to {
            opacity: 0;
            transform: translateX(-100%);
          }
        }
        `}
          </style>
          <ul className="list-disc ml-6 space-y-2 p-10 hide-scrollbar">
            {skillsByCategory.map((categories, idx) => (
              <li key={idx} className="text-gray-700 p-2">
                <strong className="text-xl">{categories.type}</strong>
                <br />
                <div>
                  {categories.skills.map((skill, skillIdx) => (
                    <span key={skillIdx} className="block">
                      {skill}
                    </span>
                  ))}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  };

  return (
    <div className="container p-4  h-full w-full mx-auto ">
      <h1 className="text-4xl font-bold mb-4 text-center mt-24">
        Welcome to MITAOE's CLUB ELITE Recommendation Platform
      </h1>
      <h1 className="text-2xl font-bold mb-4 text-center mt-14">
        Find the Perfect Club for Your Skills
      </h1>
      <div className="relative max-w-md mx-auto">
        <input
          type="text"
          className="w-full border border-gray-300 rounded-lg p-2"
          placeholder="Enter your skill..."
          value={input}
          onChange={handleInputChange}
        />
        {suggestions.length > 0 && (
          <ul className="absolute left-0 right-0 bg-white border border-gray-300 rounded-lg mt-1 max-h-40 overflow-y-auto shadow-lg z-10">
            {suggestions.map((skill, index) => (
              <li
                key={index}
                className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                onClick={() => handleSkillSelect(skill)}
              >
                {skill}
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="mt-6">
        {recommendedClubs.length > 0 ? (
          <div className="flex flex-col items-center mt-14">
            <h2 className="text-xl font-bold mb-4">---Recommended Clubs---</h2>
            <hr />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {recommendedClubs.map((clubName, index) => {
                const club = clubs.find((c) => c.name === clubName);
                if (club) {
                  return (
                    <div
                      key={index}
                      className="bg-gray-200 shadow-lg transform transition duration-100 ease-in-out hover:cursor-pointer rounded-full hover:shadow-gray-900 hover:shadow-lg px-6 py-2 w-56"
                      onClick={() =>
                        navigate(`/club/${club.name.toLowerCase().replace(/\s+/g, "-")}`)
                      }
                    >
                      <img
                        src={club.img}
                        alt={club.name}
                        className="w-32 h-32 m-4 ml-7 mt-7 rounded-md shadow-lg shadow-gray-500 pb-0.5 bg-black"
                      />
                      <div className="mt-4">
                        <h2 className="text-xl font-bold text-gray-800 text-center">
                          {club.name}
                        </h2>
                        <p className="text-gray-600 pl-7">Rating: {club.rating}/10</p>
                      </div>
                    </div>
                  );
                }
                return null;
              })}
            </div>
          </div>
        ) : (
          input && <p className="text-gray-500 ml-[650px]">No clubs found for this skill.</p>
        )}
      </div>


      {showSidebars && (
        <>
          {skillsByCategory.map((category, index) => (
            
            <Sidebar
            position={index % 2 === 0 ? "left" : "right"}
              key={index/2}
              title={category.type}
              skills={category.skills} // Dynamically pass skills for each category
            />
          ))}
        </>
      )}
    </div>
  );
}
