import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

export default function GoogleDSC() {
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
          <h1 className="text-4xl font-bold mb-5">GOOGLE DEVELOPER STUDENT CLUB</h1>
          <p className="text-lg text-gray-700 leading-relaxed">
            Developer Student Clubs is a Google Developers program for university
            students to learn mobile and web development skills, design thinking skills,
            and leadership skills. The DSC program is a grassroots channel through
            which Google provides development skills for students, towards employability.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mt-4">
            For students to learn development skills, solve problems through technology,
            and inspire them to be world-class developers and changemakers.
          </p>
          <a
            href="https://dscmitaoe.github.io/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline"
          >
            Developer Student Club Link
          </a>
        </section>

        {/* Achievements Section */}
        <section id="achievements" className="mb-10">
          <h2 className="text-3xl font-bold mb-5">Achievements</h2>
          <ul className="list-disc ml-8 text-gray-700">
            <li>Google Cloud Career Practitioners Pathway - Over 100+ Participants received swags from Google Developers.</li>
            <li>
              Open Elective Allocation Portal - Developed by Pratik Kale and Niranjan Girhe, currently deployed with 800+ student users.
            </li>
            <li>
              Course Completion Tracking Leaderboard - Tracks participants' status on the Google Cloud Course, referred by other colleges.
            </li>
            <li>
              Data Analysis Dashboard - Represents data analysis reports from Feb 22 to Feb 23.
            </li>
          </ul>
        </section>

        {/* Digital Presence Section */}
        <section id="digital-presence" className="mb-10">
          <h2 className="text-3xl font-bold mb-5">Digital Presence</h2>
          <table className="w-full table-auto border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-gray-300 px-4 py-2 text-left">Social Platform</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Link</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Official Website</td>
                <td className="border border-gray-300 px-4 py-2">
                  <a
                    href="https://gdscmitaoe.github.io/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 underline"
                  >
                    Visit Website
                  </a>
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Event Platform</td>
                <td className="border border-gray-300 px-4 py-2">
                  <a
                    href="https://gdsc.community.dev/mit-academy-of-engineering-pune/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 underline"
                  >
                    Visit Event Platform
                  </a>
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Instagram</td>
                <td className="border border-gray-300 px-4 py-2">
                  <a
                    href="https://www.instagram.com/gdsc.mitaoe/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 underline"
                  >
                    Follow on Instagram
                  </a>
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">LinkedIn</td>
                <td className="border border-gray-300 px-4 py-2">
                  <a
                    href="https://www.linkedin.com/company/gdscmitaoe/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 underline"
                  >
                    Connect on LinkedIn
                  </a>
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Twitter</td>
                <td className="border border-gray-300 px-4 py-2">
                  <a
                    href="https://twitter.com/DSCmitaoe"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 underline"
                  >
                    Follow on Twitter
                  </a>
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Facebook</td>
                <td className="border border-gray-300 px-4 py-2">
                  <a
                    href="https://www.facebook.com/DSCmitaoe"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 underline"
                  >
                    Like on Facebook
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </section>

        {/* Alumni Section */}
        <section id="alumni" className="mb-10">
          <h2 className="text-3xl font-bold mb-5">Alumni Engagement</h2>
          <ul className="list-disc ml-8 text-gray-700">
            <li>Amey Nerkar - GDG Pune Member and GDG Nashik Organizer</li>
            <li>Namrata More - WTM Ambassador and GDG Pune Member</li>
            <li>Mayank Chaurasia - Google Cloud Blogger</li>
          </ul>
        </section>

        {/* Contact Section */}
        <section id="contact">
          <h2 className="text-3xl font-bold mb-5">Contact</h2>
          <p className="text-lg text-gray-700">
            <strong>Faculty Advisor:</strong> Ms. Neha Hajare, SCET<br />
            <strong>Club President:</strong> Kaustubh Bhavsar.
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
