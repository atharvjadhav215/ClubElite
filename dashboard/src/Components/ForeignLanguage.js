import React from "react";
// import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

export default function ForeignLanguage() {
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
          <h1 className="text-4xl font-bold mb-5">Foreign Language Club</h1>
          <p className="text-lg text-gray-700 leading-relaxed">
            The Foreign Language Club aims to create awareness among students about foreign 
            languages, helping them advance their careers and explore opportunities for higher 
            studies abroad. The club provides a platform to learn new cultures, connect like-minded 
            people, and make students bilingual through various events such as workshops, quizzes, 
            and cultural activities throughout the year.
          </p>
          <ul className="list-disc ml-8 mt-4 text-gray-700">
            <li>Promoting economical learning of foreign languages.</li>
            <li>Spreading awareness and opportunities for higher studies abroad.</li>
            <li>Organizing cultural events and interactive seminars.</li>
            <li>Enhancing personality development through cultural exchange.</li>
          </ul>
        </section>

        {/* Benefits Section */}
        <section id="benefits" className="mb-10">
          <h2 className="text-3xl font-bold mb-5">Benefits of Learning a Foreign Language</h2>
          <ul className="list-disc ml-8 text-gray-700">
            <li>Opportunities for jobs, higher studies, and research.</li>
            <li>Foundation for learning a new culture.</li>
            <li>Increased creativity and problem-solving skills.</li>
            <li>Improved verbal, spatial, and memory abilities.</li>
          </ul>
        </section>

        {/* Achievements Section */}
        <section id="achievements" className="mb-10">
          <h2 className="text-3xl font-bold mb-5">Events Participated</h2>
          <table className="w-full table-auto border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-gray-300 px-4 py-2 text-left">Event</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Date</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Awards</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Club Mela</td>
                <td className="border border-gray-300 px-4 py-2">25th March 2022</td>
                <td className="border border-gray-300 px-4 py-2">-</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Nakshatra</td>
                <td className="border border-gray-300 px-4 py-2">26th March 2022</td>
                <td className="border border-gray-300 px-4 py-2">-</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">IJBC</td>
                <td className="border border-gray-300 px-4 py-2">19th-20th Nov 2022</td>
                <td className="border border-gray-300 px-4 py-2">Participation Trophy</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Club Mela</td>
                <td className="border border-gray-300 px-4 py-2">2nd March 2023</td>
                <td className="border border-gray-300 px-4 py-2">-</td>
              </tr>
            </tbody>
          </table>
        </section>

        {/* Events Organized */}
        <section id="events" className="mb-10">
          <h2 className="text-3xl font-bold mb-5">Events Organized</h2>
          <table className="w-full table-auto border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-gray-300 px-4 py-2 text-left">SR. No</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Event Name</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Date</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Participants</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2">1</td>
                <td className="border border-gray-300 px-4 py-2">
                  Guest Seminar on “Career Opportunities with Japanese Language”
                </td>
                <td className="border border-gray-300 px-4 py-2">18th March 2022</td>
                <td className="border border-gray-300 px-4 py-2">30</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">2</td>
                <td className="border border-gray-300 px-4 py-2">Club Mela</td>
                <td className="border border-gray-300 px-4 py-2">25th March 2022</td>
                <td className="border border-gray-300 px-4 py-2">150+</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">3</td>
                <td className="border border-gray-300 px-4 py-2">Japanese Song Performance</td>
                <td className="border border-gray-300 px-4 py-2">26th March 2022</td>
                <td className="border border-gray-300 px-4 py-2">3</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">4</td>
                <td className="border border-gray-300 px-4 py-2">Interactive Session on “Higher Study Opportunities in US”</td>
                <td className="border border-gray-300 px-4 py-2">15th Sept 2022</td>
                <td className="border border-gray-300 px-4 py-2">100+</td>
              </tr>
            </tbody>
          </table>
        </section>

        {/* Contact Section */}
        <section id="contact">
          <h2 className="text-3xl font-bold mb-5">Contact</h2>
          <p className="text-lg text-gray-700">
            <strong>Faculty Advisor:</strong> Mr. Surendra Barewar
            <br />
            <strong>President:</strong> Parth Wani,{" "}
            <a href="mailto:parth.wani@mitaoe.ac.in" className="text-blue-500 underline">
              parth.wani@mitaoe.ac.in
            </a>{" "}
            (8275881277)
            <br />
            <strong>Vice-President:</strong> Mrunmayee Pawar,{" "}
            <a href="mailto:mrunmayee.pawar@mitaoe.ac.in" className="text-blue-500 underline">
              mrunmayee.pawar@mitaoe.ac.in
            </a>{" "}
            (9325476122)
          </p>
          <p className="mt-4">
            <strong>Contact Details:</strong> <br />
            Amit Ovhal:{" "}
            <a href="mailto:amit.ovhal@mitaoe.ac.in" className="text-blue-500 underline">
              amit.ovhal@mitaoe.ac.in
            </a>{" "}
            (7387015493) <br />
            Dhawal Turkar:{" "}
            <a href="mailto:dhawal.turkar@mitaoe.ac.in" className="text-blue-500 underline">
              dhawal.turkar@mitaoe.ac.in
            </a>{" "}
            (9325866943)
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





