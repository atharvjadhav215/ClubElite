import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

export default function Aero() {
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
          <h1 className="text-4xl font-bold mb-5">MITAERO</h1>
          <p className="text-lg text-gray-700 leading-relaxed">
            MITAOE Aero is MITAOE’s first ever Aeromodelling club established in 2018
            by Faculty Coordinator Prof. Savita Pawar, SEE and Student Coordinators
            Rohan Hangi and Shubham Takhbhate. The aim of this club is to provide
            knowledge related to Multirotor as well as RC Planes, which includes designing
            and guidance to fly Multirotor and RC planes.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mt-4">
            MITAOEAero enthusiastically participates in many National Level Aeromodelling
            competitions including Boeing Aeromodelling competition conducted by IIT Bombay
            - Techfest, IIT Kharagpur - Kshitij, and SAE Drone Development Challenge for RC Planes.
          </p>
        </section>

        {/* Achievements Section */}
        <section id="achievements" className="mb-10">
          <h2 className="text-3xl font-bold mb-5">Achievements</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Currently, MITAOE Aero Club has two teams participating in the Society of Automotive
            Engineers (SAE) India Southern Section Drone Development Challenge 2024:
          </p>
          <ul className="list-disc ml-8 text-gray-700">
            <li>
              Team Blitzkrieg, led by Deep Naik (TY, SME), in the regular class RC plane category.
            </li>
            <li>
              Team Pegasus, led by Sakshi Bhaleghare (TY, SEE), in the micro class RC plane category.
            </li>
          </ul>
        </section>

        {/* Events Participated Section */}
        <section id="events-participated" className="mb-10">
          <h2 className="text-3xl font-bold mb-5">Events Participated</h2>
          <ul className="list-disc ml-8 text-gray-700">
            <li>SAE Drone Development Challenge Competition 2023, held in Tamil Nadu.</li>
            <li>SAE Aero Design Challenge Competition 2022, held in Tamil Nadu.</li>
            <li>SAE Aero Design Challenge Competition 2021, held online.</li>
            <li>SAE Aero Design Challenge Competition 2020, held in Tamil Nadu.</li>
            <li>Boeing competition in Techfest, at IIT Bombay, January 2020.</li>
            <li>SAE Aero Design Challenge workshop, November 2019.</li>
          </ul>
        </section>

        {/* Events Organized Section */}
        <section id="events-organized" className="mb-10">
          <h2 className="text-3xl font-bold mb-5">Events Organized</h2>
          <ul className="list-disc ml-8 text-gray-700">
            <li>Workshop on RC Planes.</li>
            <li>Hands-on Simulation training during Club Mela 2023.</li>
            <li>RC plane design training for IIT Bombay Techfest event (2019-2020).</li>
            <li>30 Days internship programme from June 16th 2019 to July 17th 2019.</li>
          </ul>
        </section>

        {/* Contact Section */}
        <section id="contact">
          <h2 className="text-3xl font-bold mb-5">Contact</h2>
          <p className="text-lg text-gray-700">
            <strong>Faculty Advisor:</strong> Prof. Sudesh Powar, sbpowar@mitaoe.ac.in, SME<br />
            <strong>Club President:</strong> Yash Tajane, yash.tajane@mitaoe.ac.in, B.Tech, SME
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
