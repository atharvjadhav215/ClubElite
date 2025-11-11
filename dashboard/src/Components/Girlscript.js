import React from "react";
// import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

export default function Girlscript() {
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
          <h1 className="text-4xl font-bold mb-5">GirlScript</h1>
          <p className="text-lg text-gray-700 leading-relaxed">
            GirlScript is a technical community and a Section-8 company registered under the Government of 
            India. It operates across <strong>36 cities in India</strong> and runs <strong>3 international chapters</strong>. 
            GirlScript supports diversity and equality in technology and is open to all community members. 
            Driven by leaders worldwide, it aims to create opportunities for beginners and bring more women 
            into the tech industry.
          </p>
        </section>

        {/* Objectives Section */}
        <section id="objectives" className="mb-10">
          <h2 className="text-3xl font-bold mb-5">Objective</h2>
          <ul className="list-disc ml-8 text-gray-700">
            <li>To learn technologies in Data Science, Machine Learning, and Artificial Intelligence through expert talks, seminars, workshops, and meet-ups.</li>
            <li>To build a <strong>technical community</strong> especially for girl students.</li>
          </ul>
        </section>

        {/* Goals Section */}
        <section id="goals" className="mb-10">
          <h2 className="text-3xl font-bold mb-5">Goals</h2>
          <ul className="list-disc ml-8 text-gray-700">
            <li>To help and train students in technical skills.</li>
            <li>To expand the community globally, helping beginners learn technology and programming.</li>
          </ul>
        </section>

        {/* Salient Features */}
        <section id="features" className="mb-10">
          <h2 className="text-3xl font-bold mb-5">Salient Features</h2>
          <ul className="list-disc ml-8 text-gray-700">
            <li>Students gain knowledge in various technologies.</li>
            <li>Strengthens technical skills in Data Science, Machine Learning, and Artificial Intelligence.</li>
          </ul>
        </section>

        {/* Events Organized */}
        <section id="events" className="mb-10">
          <h2 className="text-3xl font-bold mb-5">Events Organized</h2>

          {/* A.Y. 2019-2020 */}
          <h3 className="text-2xl font-semibold mt-4 mb-3">A.Y. 2019-2020</h3>
          <table className="w-full table-auto border-collapse border border-gray-300 mb-5">
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-gray-300 px-4 py-2 text-left">SR. No</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Activity Name</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Organized By</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Date</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Participants</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2">1</td>
                <td className="border border-gray-300 px-4 py-2">A Two-Day Bootcamp: LetsPy</td>
                <td className="border border-gray-300 px-4 py-2">GirlScript, Pune</td>
                <td className="border border-gray-300 px-4 py-2">21st and 22nd September 2019</td>
                <td className="border border-gray-300 px-4 py-2">8 Teams for Hackathon</td>
              </tr>
            </tbody>
          </table>

          {/* A.Y. 2018-2019 */}
          <h3 className="text-2xl font-semibold mt-4 mb-3">A.Y. 2018-2019</h3>
          <table className="w-full table-auto border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-gray-300 px-4 py-2 text-left">SR. No</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Activity Name</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Organized By</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Date</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Participants</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2">1</td>
                <td className="border border-gray-300 px-4 py-2">Hands-on TensorFlow</td>
                <td className="border border-gray-300 px-4 py-2">
                  GirlScript, Pune in association with Developer Student Club MITAOE
                </td>
                <td className="border border-gray-300 px-4 py-2">30th March 2019</td>
                <td className="border border-gray-300 px-4 py-2">80 Participants</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">2</td>
                <td className="border border-gray-300 px-4 py-2">Google Cloud Jam</td>
                <td className="border border-gray-300 px-4 py-2">
                  GirlScript, Pune in association with Developer Student Club MITAOE
                </td>
                <td className="border border-gray-300 px-4 py-2">13th April 2019</td>
                <td className="border border-gray-300 px-4 py-2">-</td>
              </tr>
            </tbody>
          </table>
        </section>

        {/* Contact Section */}
        <section id="contact">
          <h2 className="text-3xl font-bold mb-5">Contact</h2>
          <p className="text-lg text-gray-700">
            <strong>Faculty Advisor:</strong> Ms. Shubhangi Kale
            <br />
            <strong>Email:</strong>{" "}
            <a href="mailto:spkale@comp.maepune.ac.in" className="text-blue-500 underline">
              spkale@comp.maepune.ac.in
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





