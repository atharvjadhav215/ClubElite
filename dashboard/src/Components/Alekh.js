import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

export default function Aalekh() {
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
          <h1 className="text-4xl font-bold mb-5">AALEKH - ART ELATED CLUB</h1>
          <p className="text-lg text-gray-700 leading-relaxed">
            AALEKH - Art Elated Club's goal is to introduce students to the
            world's finer arts and raise their awareness of them. An important
            aspect of the club's mission is to help its members develop their
            creative and critical thinking abilities in a safe environment.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mt-4">
            The club hosts a variety of entertaining activities that not only
            amuse us but also help us gain a better knowledge of the diverse
            cultures and customs that exist around the world. We guarantee that
            you'll learn a lot from your time here, and we'll make sure you do.
          </p>
        </section>

        {/* Achievements Section */}
        <section id="achievements" className="mb-10">
          <h2 className="text-3xl font-bold mb-5">Achievements</h2>
          <table className="w-full table-auto border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-gray-300 px-4 py-2 text-left">Student(s)</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Event / Achievement Details</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Result / Outcome</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Ajeya Bhattacharya</td>
                <td className="border border-gray-300 px-4 py-2">Received 2nd prize in Colour Splash - Monochromatic Painting</td>
                <td className="border border-gray-300 px-4 py-2">Impressions 2021</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Team AALEKH</td>
                <td className="border border-gray-300 px-4 py-2">Won 1st Prize in Crane-o-Mania event</td>
                <td className="border border-gray-300 px-4 py-2">TechFest IIT Bombay</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Team AALEKH</td>
                <td className="border border-gray-300 px-4 py-2">Won 1st Prize in Impressions</td>
                <td className="border border-gray-300 px-4 py-2">COEP (2018)</td>
              </tr>
            </tbody>
          </table>
        </section>

        {/* Events Section */}
        <section id="events" className="mb-10">
          <h2 className="text-3xl font-bold mb-5">Events</h2>
          <ul className="list-disc ml-8 text-gray-700">
            <li>ARTISIA 2k20 virtually, on various social media platforms.</li>
            <li>Inter-college event ARTISIA 2k19.</li>
            <li>Organized a workshop on Painting and Sketching.</li>
            <li>म मराठीचा competition to celebrate Marathi Bhasha week.</li>
          </ul>
        </section>

        {/* Contact Section */}
        <section id="contact">
          <h2 className="text-3xl font-bold mb-5">Contact</h2>
          <p className="text-lg text-gray-700">
            <strong>Faculty Advisor:</strong> Mrs. Aswathy MA, aswathy.ma@mitaoe.ac.in<br />
            <strong>Club President:</strong> Samruddhi Kakad, shubhampatil@mitaoe.ac.in, (9561894479).
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
