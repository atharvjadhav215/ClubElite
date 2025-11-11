import React from "react";
// import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

export default function IgnitedMinds() {
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
          <h1 className="text-4xl font-bold mb-5">Ignited Minds</h1>
          <p className="text-lg text-gray-700 leading-relaxed">
            The Ignited Minds student club was established in <strong>2013</strong> by the students of MITAoE. 
            The main objective of this club is to <strong>serve the nation through social activities</strong> and 
            promote holistic development among youth. The club focuses on:
          </p>
          <ul className="list-disc ml-8 text-gray-700 mt-4">
            <li>Entrepreneurship Development Forum</li>
            <li>Preparation for Competitive Examinations</li>
            <li>Organizing Cultural Activities</li>
            <li>Spiritual Thought Process Development</li>
          </ul>
        </section>

        {/* Faculty and Club President */}
        <section id="leadership" className="mb-10">
          <h2 className="text-3xl font-bold mb-5">Leadership</h2>
          <p className="text-lg text-gray-700">
            <strong>Faculty Advisor:</strong> Mr. V A Tarange, SChE <br />
            <strong>Club President:</strong> Mangesh Humbad, B.Tech Chemical Engineering <br />
            <strong>Contact:</strong> <a href="tel:+919022007749" className="text-blue-500 underline">9022007749</a>
          </p>
        </section>

        {/* Events Participated */}
        <section id="events-participated" className="mb-10">
          <h2 className="text-3xl font-bold mb-5">Events Participated</h2>
          <ul className="list-disc ml-8 text-gray-700">
            <li>Unite students from all branches of MITAoE</li>
            <li>Ganesh Utsav 2019 (Ganesh Festival)</li>
            <li>Webinar on “Bringing Out the Best in Worst Times” during Ganesh Utsav 2020 by Sanatana Dharma Das</li>
            <li>Live session on “Simple Secrets of Perfect Life Style” during Ganesh Utsav 2021 by Capt Ram Prasad</li>
            <li>Shivjayanti 2022</li>
            <li>Fest of Thoughts 2022 on Dr. Babasaheb Ambedkar Jayanti</li>
            <li>Ganesh Utsav 2022 (Ganesh Festival)</li>
            <li>Shivjayanti 2023</li>
            <li>Fest of Thoughts 2023 on Dr. Babasaheb Ambedkar Jayanti</li>
          </ul>
        </section>

        {/* Salient Features */}
        <section id="salient-features" className="mb-10">
          <h2 className="text-3xl font-bold mb-5">Salient Features</h2>
          <ul className="list-disc ml-8 text-gray-700">
            <li>
              The club celebrates the Ganesh Festival on campus every year under the banner of{" "}
              <strong>“Ekta Ganesh Mitra Mandal”</strong>, guided by Ignited Minds.
            </li>
            <li>The club organizes celebrations for <strong>Shiv Jayanti</strong> and <strong>Dr. Babasaheb Ambedkar Jayanti</strong> annually.</li>
            <li>It unites students from all branches of MITAoE to promote <strong>spiritual thought process development</strong>.</li>
            <li>Organizes talks and guest lectures featuring socially and spiritually eminent personalities.</li>
          </ul>
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





