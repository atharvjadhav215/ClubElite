
import React from "react";
// import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

export default function MozillaClub() {
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
          <h1 className="text-4xl font-bold mb-5">Mozilla Club</h1>
          <p className="text-lg text-gray-700 leading-relaxed">
            Mozilla Club MITAOE aims to promote <strong>exposure</strong> and 
            increase awareness among students toward the <strong>finer arts of the world</strong>. 
            The club acts as a forum to improve students' inner skills, expressivity, and critical thinking abilities.
          </p>
          <p className="text-lg text-gray-700 mt-4">
            The club conducts enjoyable events that not only entertain but also 
            enrich our understanding of <strong>open-source cultures and practices</strong>. 
            By participating, students gain exposure to <strong>new technologies and forms</strong> 
            from across the globe, along with proper training and guidance.
          </p>
        </section>

        {/* Faculty and Club President */}
        <section id="leadership" className="mb-10">
          <h2 className="text-3xl font-bold mb-5">Leadership</h2>
          <p className="text-lg text-gray-700">
            <strong>Faculty Advisor:</strong> Mrs. Jayashree Yadannavar <br />
            <strong>Email:</strong>{" "}
            <a href="mailto:j.s.yadannavar@mitaoe.ac.in" className="text-blue-500 underline">
              j.s.yadannavar@mitaoe.ac.in
            </a> <br />
            <strong>Club President:</strong> Kartikey Sapkal <br />
            <strong>Email:</strong>{" "}
            <a href="mailto:kartikey.sapkal@mitaoe.ac.in" className="text-blue-500 underline">
              kartikey.sapkal@mitaoe.ac.in
            </a> <br />
            <strong>Mobile:</strong>{" "}
            <a href="tel:+917666182083" className="text-blue-500 underline">
              7666182083
            </a>
          </p>
        </section>

        {/* Awards, Events Participated, and Organized */}
        <section id="activities" className="mb-10">
          <h2 className="text-3xl font-bold mb-5">Awards and Activities</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 text-gray-700">
            {/* Awards and Achievements */}
            <div>
              <h3 className="text-2xl font-semibold mb-3">Awards and Achievements</h3>
              <ul className="list-disc ml-8">
                <li>Organized Tracks of Certification Specialization on various CS subjects</li>
              </ul>
            </div>

            {/* Events Participated */}
            <div>
              <h3 className="text-2xl font-semibold mb-3">Events Participated</h3>
              <ul className="list-disc ml-8">
                <li>Josh Talk Community Event 2018</li>
              </ul>
            </div>

            {/* Events Organized */}
            <div>
              <h3 className="text-2xl font-semibold mb-3">Events Organized</h3>
              <ul className="list-disc ml-8">
                <li>MozComp 2k17 1.0</li>
                <li>Ethical Hacking 1.0</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Salient Features */}
        <section id="salient-features" className="mb-10">
          <h2 className="text-3xl font-bold mb-5">Salient Features</h2>
          <ul className="list-disc ml-8 text-gray-700">
            <li>
              Organizes <strong>institute-level events</strong> such as Tracks of Certification 
              Specialization in Computer Science Subjects.
            </li>
            <li>
              Hosts <strong>open-source events</strong> like GitHub for Students, 
              Ethical Hacking 1.0, Using Firefox for VR, and MozComp 2k17.
            </li>
            <li>
              Organized impactful sessions including <strong>Josh Talks 2018</strong>, showcasing 
              teamwork, open culture, and enthusiasm for openness and collaboration.
            </li>
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





