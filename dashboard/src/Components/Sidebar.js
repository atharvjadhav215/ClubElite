

import React from "react";
import { useNavigate } from 'react-router-dom';


export default function Top5() {
  const navigate = useNavigate();
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
    { name: "Dance Club", rating: 8, img: "data:image/jpeg;base64,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" 

    },
  ];




  return (
    <div className="bg-gray-100 w-full min-h-screen flex">
      
      <div className="bg-gray-900 shadow-2xl shadow-black text-white w-[420px] fixed cursor-default overflow-y-scroll h-[830px] mt-20"
      style={{
        animation: "fade-in-left 1.0s",
        animationDelay: `${1 * 0.1}s`,
        animationFillMode: "forwards",
      }}
      >
        <div className="min-h-screen">
          <ul className="md:flex hidden text-xl pt-1 flex-col">
            {clubs.slice(0, 20).map((club, index) => (
              <li key={index}>
                <button
                  className="hover:font-bold my-1 w-96 p-5 rounded-3xl transform hover:scale-95 transition duration-300 ease-in-out bg-transparent focus:ring-2 focus:ring-gray-500 hover:shadow-lg hover:shadow-gray-500"
                  onClick={() => navigate(`/club/${club.name.toLowerCase().replace(/\s+/g, "-")}`)}
                  style={{
                    animation: "fade-in-up 1.0s",
                    animationDelay: "0.1s",
                    animationFillMode: "forwards",
                  }}
                >
                  {club.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>


      <div className=" justify-center h-auto">
        <h1 className="text-4xl font-bold text-gray-900 mt-24 ml-[850px]">
    {Array.from("Welcome to MITAOE Clubs...".split(" ")).map((word, wordIndex) => (
      <span key={wordIndex} className="mr-4 inline-block"> {/* Adds space between words */}
        {Array.from(word).map((letter, letterIndex) => (
          <span
            key={letterIndex}
            className="inline-block animate-zoom-in"
            style={{
              animationDelay: `${(wordIndex) * 0.2}s`, // Stagger delay for each letter
            }}
          >
            {letter}
          </span>
        ))}
      </span>
    ))}
        </h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-3 p-5 ml-[420px]">
        {clubs.map((club, index) => (
          <div
            key={index}
            className="bg-white shadow-lg transform  transition duration-100 ease-in-out hover:cursor-pointer rounded-lg hover:shadow-gray-900 hover:shadow-lg px-6 py-2"
            style={{
              animation: "fade-in-left 1.0s",
              animationDelay: `${index * 0.1}s`,
              animationFillMode: "forwards",
            }}
              onClick={() => navigate(`/club/${club.name.toLowerCase().replace(/\s+/g, "-")}`)}
                >
                  
            <img
              src={club.img}
              alt={club.name}
              className="w-32 h-32 m-3 rounded-md shadow-lg shadow-gray-500 pb-0.5 bg-black"
            />
            <div className="mt-4">
              <h2 className="text-xl font-bold text-gray-800 text-center">{club.name}</h2>
              <p className="text-gray-600 pl-7">Rating: {club.rating}/10</p>
            </div>
          </div>
        ))}
      </div>
      </div>
      {/* Keyframe Styles */}
      <style>
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

{`
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
      </style>
      

      
    </div>
  );
}

