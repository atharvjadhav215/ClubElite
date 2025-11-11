import React from "react";
// import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

export default function CodeChef() {
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
  <h1 className="text-4xl font-bold mb-5">CodeChef MITAOE Chapter</h1>
  <p className="text-lg text-gray-700 leading-relaxed">
    CodeChef MITAOE Chapter is a programming club run and maintained by
    official MITAOE Chapter representatives, mentored by CodeChef. The
    chapter promotes competitive programming in colleges and schools,
    helping students become better problem solvers and excel in their
    careers.
  </p>
  <ul className="list-disc ml-8 mt-4 text-gray-700">
    <li>Promoting competitive programming in the college.</li>
    <li>Hosting contests and competitions.</li>
    <li>Organizing workshops and doubt sessions.</li>
    <li>Helping students learn programming through various events.</li>
  </ul>
</section>

{/* Achievements Section */}
<section id="achievements" className="mb-10">
  <h2 className="text-3xl font-bold mb-5">Achievements (2023-24)</h2>
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
        <td className="border border-gray-300 px-4 py-2">Chetan Patil</td>
        <td className="border border-gray-300 px-4 py-2">
          Reached Specialist on Codeforces, 5⭐ on CodeChef, Global Rank 24
          in CodeChef Starters 100 Division 2, Rank 1 in Code Velocity Challenge.
        </td>
        <td className="border border-gray-300 px-4 py-2">
          Top 0.5% in India, promoted coding culture in the college.
        </td>
      </tr>
      <tr>
        <td className="border border-gray-300 px-4 py-2">Neeraj Kumar</td>
        <td className="border border-gray-300 px-4 py-2">
          Cracked international internships at NodeShark Hexfork Ltd (UK)
          and Carbyne (USA).
        </td>
        <td className="border border-gray-300 px-4 py-2">
          Made the department proud with two international internships.
        </td>
      </tr>
      <tr>
        <td className="border border-gray-300 px-4 py-2">Prasad Lokhande</td>
        <td className="border border-gray-300 px-4 py-2">
          Secured a stipend-based internship as a web developer at QuantEM
          Edutech.
        </td>
        <td className="border border-gray-300 px-4 py-2">
          Conducted technical events under the chapter successfully.
        </td>
      </tr>
    </tbody>
  </table>
</section>

{/* Events Section */}
<section id="events" className="mb-10">
  <h2 className="text-3xl font-bold mb-5">Events</h2>
  <ul className="list-disc ml-8 text-gray-700">
    <li>CodeSprint: A competitive programming contest for 2nd-year students.</li>
    <li>CodeBytes: Workshops on programming basics and competitive programming techniques.</li>
    <li>Doubt-solving sessions with experienced programmers.</li>
  </ul>
</section>

{/* Contact Section */}
<section id="contact">
  <h2 className="text-3xl font-bold mb-5">Contact</h2>
  <p className="text-lg text-gray-700">
    <strong>Faculty Advisor:</strong> Ms. Neha Hajare, SCET<br />
    <strong>Club President:</strong> Chetan Patil
  </p>
  <p className="mt-4">
    For more details, visit the official CodeChef MITAOE Chapter page:
    <a
      href="https://www.codechef.com/campus_chapter/MITAoE-Chefs"
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-500 underline ml-1"
    >
      CodeChef MITAOE Chapter
    </a>
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





