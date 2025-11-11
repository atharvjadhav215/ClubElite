import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

export default function DigitalDesignClub() {
    const navigate = useNavigate();
    const clubs = [
        { name: "AALEKH", rating: 8, img: "https://mitaoe.ac.in/assets/images/club/aalekh.jpg" },
        { name: "AERO", rating: 7, img: "https://mitaoe.ac.in/assets/images/club/aero.jpg" },
        { name: "Autosports Club", rating: 8.5, img: "https://mitaoe.ac.in/assets/images/club/autosports.jpg" },
        { name: "CodeChef", rating: 9, img: "https://mitaoe.ac.in/assets/images/club/MITAoE-Chefs.jpg" },
        { name: "GDSC", rating: 9, img: "https://mitaoe.ac.in/assets/images/club/DSCMITAOE.png" },
        { name: "Digital Design", rating: 7, img: "https://mitaoe.ac.in/assets/images/club/digital-design.jpg" },
        { name: "Drama Club", rating: 8, img: "https://mitaoe.ac.in/assets/images/club/drama.jpg" },
        { name: "Foreign Language Club", rating: 8, img: "https://mitaoe.ac.in/assets/images/club/foreign-language-club-new.png" },
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
        { name: "Maths Club", rating: 8, img: "https://mitaoe.ac.in/assets/images/club/exesmathsclub.jpg" },
      ];
    
    
    
    
      return (
        <div className="bg-gray-100 w-full min-h-screen flex">
          
          <div className="bg-gray-900 text-white w-[420px] fixed cursor-default overflow-y-scroll h-[830px] mt-20">
            <div className="min-h-screen">
              <ul className="md:flex hidden text-xl pt-1 flex-col">
                {clubs.slice(0, 20).map((club, index) => (
                  <li key={index}>
                    <button
                      className="hover:font-bold my-1 w-96 p-5 rounded-3xl transform hover:scale-95 transition duration-300 ease-in-out bg-transparent focus:ring-2 focus:ring-gray-500 hover:shadow-lg hover:shadow-gray-500"
                      onClick={() => navigate(`/club/${club.name.toLowerCase().replace(/\s+/g, "-")}`)}
                    >
                      <a>{club.name}</a>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {/* Main Content */}
          <div className="flex-1 p-10 mt-20 ml-[420px] "
          style={{
            animation: "fade-in-left 1.0s",
            animationDelay: `${1 * 0.1}s`,
            animationFillMode: "forwards",
          }}>
        {/* About Section */}
        <section id="about" className="mb-10">
          <h1 className="text-4xl font-bold mb-5">Digital Design Club</h1>
          <p className="text-lg text-gray-700 leading-relaxed">
            The Digital Design Club is dedicated to fostering creativity and technical expertise in CAD (Computer-Aided Design) among students. 
            This club provides a platform for aspiring engineers to explore the vast potential of CAD in various industries and sectors.
          </p>
        </section>

        {/* Objectives Section */}
        <section id="objectives" className="mb-10">
          <h2 className="text-3xl font-bold mb-5">Objectives</h2>
          <ul className="list-disc ml-8 text-gray-700">
            <li>Reinforce the relevance of CAD design in industries among students.</li>
            <li>Provide a platform to enhance designing skillsets.</li>
            <li>Spread awareness about the importance of CAD across all engineering sectors.</li>
            <li>Introduce students to future career opportunities in the field of design.</li>
          </ul>
        </section>

        {/* Achievements Section */}
        <section id="achievements" className="mb-10">
          <h2 className="text-3xl font-bold mb-5">Awards and Achievements</h2>
          <ul className="list-disc ml-8 text-gray-700">
            <li>
              <strong>Manish Gavas (TYBTech):</strong> Won 1st prize in CAD WAR Competition at AISSMS Engineering Today, Pune.
            </li>
            <li>
              <strong>Manish Gavas (TYBTech):</strong> Won 1st prize in Creo Modelling at Sinhgad Karandak, SKN COE, Pune.
            </li>
            <li>
              <strong>Manish Gavas (TYBTech):</strong> Won 2nd prize in ID 2D & ID 3D at Mindspark'19, COEP, Pune.
            </li>
          </ul>
        </section>

        {/* Salient Features Section */}
        <section id="salient-features" className="mb-10">
          <h2 className="text-3xl font-bold mb-5">Salient Features</h2>
          <ul className="list-disc ml-8 text-gray-700">
            <li>Establishing industrial networks for real-world exposure.</li>
            <li>Applying CAD to solve industrial problems.</li>
            <li>Exploring CAD applications across diverse engineering sectors.</li>
          </ul>
        </section>

        {/* Contact Section */}
        <section id="contact">
          <h2 className="text-3xl font-bold mb-5">Contact</h2>
          <p className="text-lg text-gray-700">
            <strong>Faculty Advisor:</strong> Mr. Dilip Panchal, SMCE<br />
            <strong>Club President:</strong> Nihar Das, nrdas@mitaoe.ac.in, B.Tech Mechanical (8208567477)
          </p>
        </section>
      </div>
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
      </style>
    </div>
  );
}
