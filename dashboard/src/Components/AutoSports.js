import React from "react";
import { useNavigate } from 'react-router-dom';

export default function TeamNiyudrathRacing() {
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
                      {club.name}
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
          <h1 className="text-4xl font-bold mb-5">Team Niyudrath Racing (TNR)</h1>
          <p className="text-lg text-gray-700 leading-relaxed">
            Team Niyudrath Racing, a club under the autosports club, aims at designing,
            manufacturing, and testing an ATV to participate in various national-level
            events like SAE BAJA, Enduro Student India (ESI), etc. For this, we prepare by
            creating a team capable of handling the immense pressure of deadlines,
            submissions, academics, failures, etc., whilst staying together in all these
            situations.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mt-4">
            As a contribution toward the college, we conduct workshops every year that are open to everyone,
            teaching them about our ATV and its various components. Inspired participants often join the team
            after attending these workshops.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mt-4">
            The team operates across several departments, including Brakes, CAE, Powertrain, Roll Cage, Steering, 
            and Suspension, all working together through the stages of design, manufacturing, testing, and finally,
            participating in events.
          </p>
        </section>

        {/* Achievements Section */}
        <section id="achievements" className="mb-10">
          <h2 className="text-3xl font-bold mb-5">Awards and Achievements</h2>
          <ul className="list-disc ml-8 text-gray-700">
            <li>
              <strong>2020-21:</strong> Indian Karting Race Champions
              <ul className="list-disc ml-8">
                <li>Best Design Award</li>
                <li>Best Crosspad Award</li>
                <li>First Runner-Up Endurance</li>
                <li>Future Award</li>
                <li>Prize Money: ₹1.4 Lakh</li>
              </ul>
            </li>
            <li>
              <strong>2021-22:</strong> Edgeline Go-Kart Championship Season 2
              <ul className="list-disc ml-8">
                <li>Best Aesthetics</li>
                <li>Best Captain</li>
                <li>Runner-Up in Design, Cost, and Business</li>
                <li>Overall AIR 2</li>
              </ul>
            </li>
            <li>
              <strong>2022-23:</strong> ISIE Indian Karting Race Season 7.0
              <ul className="list-disc ml-8">
                <li>Champion Award</li>
                <li>First TI (Tech Inspection) Winner</li>
                <li>Crosspad Winner</li>
                <li>Endurance Winner</li>
                <li>Future Team Award</li>
                <li>Overall Champions</li>
              </ul>
            </li>
          </ul>
        </section>

        {/* Events Participated Section */}
        <section id="events-participated" className="mb-10">
          <h2 className="text-3xl font-bold mb-5">Events Participated</h2>
          <ul className="list-disc ml-8 text-gray-700">
            <li>SAE BAJA 2020</li>
            <li>SAE BAJA 2019</li>
            <li>ESI 2019</li>
            <li>SAE BAJA 2018</li>
            <li>ESI 2018</li>
            <li>SAE BAJA 2017</li>
            <li>ESI 2017</li>
            <li>SAE BAJA 2016</li>
            <li>ESI 2016</li>
          </ul>
        </section>

        {/* Events Organized Section */}
        <section id="events-organized" className="mb-10">
          <h2 className="text-3xl font-bold mb-5">Events Organized</h2>
          <ul className="list-disc ml-8 text-gray-700">
            <li>Dynamic Hurl Event: Showcasing vehicle stunts.</li>
            <li>Vehicle Dynamics Workshop: Teaching about car components and their applications.</li>
            <li>Team Recruitment: Based on workshop performance and skills.</li>
          </ul>
        </section>

        {/* Contact Section */}
        <section id="contact">
          <h2 className="text-3xl font-bold mb-5">Contact</h2>
          <p className="text-lg text-gray-700">
            <strong>Technical Head & Coordinator:</strong> Prof. Savita Pawar, SEE<br />
            <strong>Faculty Advisor:</strong> Mr. B. R. Patil, SMCE<br />
            <strong>Club President:</strong> Sachin Angadi, sachinangadi18@gmail.com, 8329463341
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
