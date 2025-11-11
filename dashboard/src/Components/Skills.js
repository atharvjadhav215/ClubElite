import React, { useState } from "react";
import clubs from "../config/club";
import skillsByCategory from "../config/skills";

const CircleMenu = ({ clubs, setSelectedClub, toggleSidebars }) => {
  const [showClubs, setShowClubs] = useState(false);
  return (
    <div className="relative h-[600px] flex justify-center items-center bg-gray-100 ">
      {/* The Circle with "Clubs" text */}
      <div
        className="relative group w-32 h-32 rounded-full bg-gray-800 flex justify-center items-center cursor-pointer transform  transition duration-100 ease-in-out hover:cursor-pointer hover:shadow-gray-900 hover:shadow-lg "
        onClick={() => {
          setShowClubs(!showClubs);
          toggleSidebars(); // Toggle the sidebars
        }}
      >
        <span className="text-white text-2xl font-bold">Clubs</span>

        {/* Club Names around the circle on hover */}

        <div className="absolute inset-0 flex justify-center items-center">
          {/* Middle Circle */}
          <div className="w-[300px] h-[300px] relative group">
            {clubs.map((club, index) => {
              // Determine whether the club belongs to the inner or outer circle
              const isOuterCircle = index < clubs.length / 2;
              const radius = isOuterCircle ? "-300%" : "-450%"; // Radius for inner and outer circles
              const totalClubs = clubs.length / 2; // Number of clubs in each circle
              const adjustedIndex = isOuterCircle
                ? index
                : index - totalClubs + 0.7;
              const delay = `${index * 20}ms`; // Dynamic delay based on index

              return (
                <div
                  key={index}
                  className="absolute transition-all duration-500 transform"
                  style={{
                    top: "40%",
                    left: "20%",
                    transformOrigin: "center",
                    transform: `rotate(${
                      (360 / totalClubs - 2) * adjustedIndex
                    }deg) translateY(${radius})`,
                  }}
                >
                  <div
                    className={`w-20 h-20 bg-gray-100  flex justify-center items-center cursor-pointer 
            transition-transform duration-500 opacity-0 scale-0 
            ${showClubs ? "opacity-100 scale-105" : ""}`}
                    style={{
                      transitionDelay: delay, // Apply delay to each club
                    }}
                    onClick={() => setSelectedClub(club)}
                  >
                    <span className="text-xl text-center font-bold text-black hover:scale-105  opacity-100 transition-opacity duration-500 inline">
                      {club.name}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

const Sidebar = ({ title, skills, position }) => {
  const [isVisible, ] = useState(true);

  return (
    <div
      className={`bg-white shadow-md p-4 w-[450px] h-screen fixed transform transition duration-100 ease-in-out hover:cursor-pointer hover:shadow-gray-900 hover:shadow-2xl hover:scale-95 ${
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


// Skills Component
export default function Skills() {
  const [selectedClub, setSelectedClub] = useState(null);
  const [showSidebars, setShowSidebars] = useState(false);


// About sidebar....
  return (
    <div className="bg-gray-100 w-full h-screen flex justify-center items-center flex-col">
      {/* {showSidebars && (
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
      )} */}

      

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
 


      {/* Circle Menu Component */}
      <div>
        <p className="text-gray-400 text-3xl pl-10 text-center relative font-bold">
          What is inside <br /> the club{" "}
        </p>
      </div>
      <CircleMenu
        clubs={clubs}
        setSelectedClub={setSelectedClub}
        toggleSidebars={() => setShowSidebars(!showSidebars)}
      />

      {/* Show club skills when a club is selected */}
      {selectedClub && (
        <div
          className="absolute bottom-24 bg-white p-6 shadow-lg rounded-lg w-[700px] h-[700px] overflow-auto"
          style={{
            animation: "fade-in-up 0.5s",
            animationDelay: "0.0s",
            animationFillMode: "forwards",
          }}
        >
          <h3 className="text-2xl font-semibold my-3 ">
            How you can work in {selectedClub.name} accroding to your skills...{" "}
          </h3>
          <hr />
          <ul className="list-disc ml-6 mt-2">
            {selectedClub.skills.map((item, idx) => (
              <li key={idx} className="mb-2">
                <strong>{item.skill}:</strong> {item.explanation}
              </li>
            ))}
          </ul>
          <button
            className="mt-4 bg-purple-700 text-white p-2 rounded-md"
            onClick={() => setSelectedClub(null)}
          >
            Close
          </button>
        </div>
      )}

      <style>
        {`
          .group:hover .club-name {
            opacity: 1;
            visibility: visible;
            transform: scale(1);
          }
          .group:hover .club-name[data-index="0"] {
            opacity: 1;
            visibility: visible;
            transform: scale(1) rotate(0deg);
          }
          .group:hover .club-name[data-index="1"] {
            opacity: 1;
            visibility: visible;
            transform: scale(1) rotate(45deg);
          }
          .group:hover .club-name[data-index="2"] {
            opacity: 1;
            visibility: visible;
            transform: scale(1) rotate(90deg);
          }
          .group:hover .club-name[data-index="3"] {
            opacity: 1;
            visibility: visible;
            transform: scale(1) rotate(135deg);
          }
    @keyframes fade-in-up {
      0% {
        opacity: 0;
        transform: translateY(100%);
      }
      100% {
        opacity: 1;
        transform: translateY(0);
      }
    }
        `}

        {`
          @keyframes fade-in-left {
            0% {
              opacity: 0;
              transform: translateX(-10%);
            }
            100% {
              opacity: 5;
              transform: translateX(0);
            }
          }
        
  `}
      </style>
    </div>
  );
}
