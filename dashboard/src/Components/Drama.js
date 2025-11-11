import React from "react";
// import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

export default function Drama() {
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
    <h1 className="text-4xl font-bold mb-5">DRAMA CLUB</h1>
    <p className="text-lg text-gray-700 leading-relaxed">
      DRAMA Club aims to ignite the skill of acting and representation in various real-life situations. The club promotes scriptwriting, event management, and participation in dramas, skits, plays, and street plays. Members represent the institute at state and national drama competitions. The platform also encourages students in musical competitions, offering immense opportunities for skill development.
    </p>
    <ul className="list-disc ml-8 mt-4 text-gray-700">
      <li>Encourages acting, scriptwriting, and management skills.</li>
      <li>Represents the institute at various levels of competitions.</li>
      <li>Organizes workshops and events for skill enhancement.</li>
      <li>Provides opportunities in musical and cultural events.</li>
    </ul>
  </section>

  {/* Achievements Section */}
  <section id="achievements" className="mb-10">
    <h2 className="text-3xl font-bold mb-5">Achievements</h2>
    <table className="w-full table-auto border-collapse border border-gray-300">
      <thead>
        <tr className="bg-gray-200">
          <th className="border border-gray-300 px-4 py-2 text-left">Year</th>
          <th className="border border-gray-300 px-4 py-2 text-left">Achievement</th>
          <th className="border border-gray-300 px-4 py-2 text-left">Result</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border border-gray-300 px-4 py-2">2023</td>
          <td className="border border-gray-300 px-4 py-2">Won Prize in ON Sport Prop Making at Firodiya Karandak</td>
          <td className="border border-gray-300 px-4 py-2">Shortlisted in top 20</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2">2020</td>
          <td className="border border-gray-300 px-4 py-2">
            Best Papercut Stop Motion Animation for the play ‘Sidestand’
          </td>
          <td className="border border-gray-300 px-4 py-2">Nomination for Best Actor (Mr. Kiran Pawar)</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2">2019</td>
          <td className="border border-gray-300 px-4 py-2">
            Best Stop Motion Animation for the play ‘Manzar’
          </td>
          <td className="border border-gray-300 px-4 py-2">Innovative Concept Recognition</td>
        </tr>
      </tbody>
    </table>
  </section>

  {/* Events Section */}
  <section id="events" className="mb-10">
    <h2 className="text-3xl font-bold mb-5">Events</h2>
    <ul className="list-disc ml-8 text-gray-700">
      <li>Firodiya Karandak drama competitions (2016–2023).</li>
      <li>State-level drama competitions (e.g., Osmanabad, 2018).</li>
      <li>Organized workshops and showcases (e.g., Oct 2019).</li>
    </ul>
  </section>

  {/* Contact Section */}
  <section id="contact">
    <h2 className="text-3xl font-bold mb-5">Contact</h2>
    <p className="text-lg text-gray-700">
      <strong>Faculty Advisor:</strong> Prof. Satyajit Pangaonkar, School of Electrical Engg.<br />
      <strong>Club President:</strong> Tejas Tulsidas Limbani (ttlimbani@mitaoe.ac.in)<br />
      <strong>Phone:</strong> 7040171148
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





