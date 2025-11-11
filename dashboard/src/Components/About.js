import React from "react";
import { useNavigate } from "react-router-dom";

export default function About() {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-100 w-full min-h-screen ">
      {/* Hero Section */}

      <div
        className="flex flex-row justify-start"
        style={{
          animation: "fade-in-up 1.0s",
          animationDelay: "0.1s",
          animationFillMode: "forwards",
        }}
      >
        <div className="flex flex-col md:flex-column items-left justify-start px-6 md:px-20 mt-20">
          <div className="mt-10">
            <h1 className="font-bold text-5xl text-black cursor-default">
              Why <span className="text-gray-600">CLUB ELITE</span>.....?
            </h1>

            <div className="flex flex-row">
              <div className="h-96 w-96 mr-20 transition duration-500 transform hover:scale-125">
                <img
                  className="rounded-full mx-auto md:mx-0 md:h-auto md:w-full object-cover mt-20"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZkK5PBEJnJGTxBFb_GudpbZ0ubdPf1svXuA&s"
                  alt="Club Elite"
                />

                <h1 className="text-4xl md:text-2xl font-bold text-black cursor-default rounded-lg mt-10 text-center">
                  <span className="text-gray-600">Discover</span> your path,{" "}
                  <br />
                  <span className="text-gray-600">Grow</span> your skills, and{" "}
                  <br />
                  <span className="text-gray-600">Shine</span> in the perfect
                  club tailored just for you...
                </h1>
              </div>

              <p className="text-lg md:text-xl text-gray-700">
                <ul className="list-disc list-inside space-y-10 my-10 text-gray-800 mt-16">
                  <li className="flex items-start cursor-default rounded-lg transition duration-100 transform hover:scale-105">
                    <span className="flex-shrink-0 mr-2 mt-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        className="h-6 w-6 text-purple-600"
                      >
                        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-1 18l-5-5 1.41-1.41L11 15.17l7.59-7.59L20 9l-9 9z" />
                      </svg>
                    </span>
                    <span>
                      <strong>Discover:</strong> Find the ideal club that aligns
                      with your unique skills and passions.
                    </span>
                  </li>
                  <li className="flex items-start cursor-default rounded-lg transition duration-100 transform hover:scale-105">
                    <span className="flex-shrink-0 mr-2 mt-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        className="h-6 w-6 text-purple-600"
                      >
                        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-1 18l-5-5 1.41-1.41L11 15.17l7.59-7.59L20 9l-9 9z" />
                      </svg>
                    </span>
                    <span>
                      <strong>Grow:</strong> Unlock pathways to grow,
                      collaborate, and shine in your college journey.
                    </span>
                  </li>
                  <li className="flex items-start cursor-default rounded-lg transition duration-100 transform hover:scale-105">
                    <span className="flex-shrink-0 mr-2 mt-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        className="h-6 w-6 text-purple-600"
                      >
                        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-1 18l-5-5 1.41-1.41L11 15.17l7.59-7.59L20 9l-9 9z" />
                      </svg>
                    </span>
                    <span>
                      <strong>Personalized:</strong> Get tailored suggestions
                      based on your talents and interests for a seamless
                      experience.
                    </span>
                  </li>
                  <li className="flex items-start cursor-default rounded-lg transition duration-300 transform hover:scale-105">
                    <span className="flex-shrink-0 mr-2 mt-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        className="h-6 w-6 text-purple-600"
                      >
                        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-1 18l-5-5 1.41-1.41L11 15.17l7.59-7.59L20 9l-9 9z" />
                      </svg>
                    </span>
                    <span>
                      <strong>Impactful:</strong> Join a club where you can make
                      the most of your skills and build a lasting impact.
                    </span>
                  </li>
                  <li className="flex items-start cursor-default rounded-lg transition duration-100 transform hover:scale-105">
                    <span className="flex-shrink-0 mr-2 mt-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        className="h-6 w-6 text-purple-600"
                      >
                        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-1 18l-5-5 1.41-1.41L11 15.17l7.59-7.59L20 9l-9 9z" />
                      </svg>
                    </span>
                    <span>
                      <strong>Collaborate:</strong> Be a part of a vibrant
                      community that encourages growth and teamwork.
                    </span>
                  </li>
                  <li className="flex items-start cursor-default rounded-lg transition duration-100 transform hover:scale-105">
                    <span className="flex-shrink-0 mr-2 mt-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        className="h-6 w-6 text-purple-600"
                      >
                        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-1 18l-5-5 1.41-1.41L11 15.17l7.59-7.59L20 9l-9 9z" />
                      </svg>
                    </span>
                    <span>
                      <strong>Achieve:</strong> Take the first step towards
                      achieving your goals with right guidance and
                      opportunities.
                    </span>
                  </li>
                </ul>
                <div className="mt-14 flex justify-center md:justify-start space-x-4">
                  <button
                    className="bg-black text-white p-5 hover:font-semibold text-2xl rounded-lg hover:bg-gray-900 transition duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-black"
                    onClick={() =>
                      (window.location.href =
                        "https://sahas2711-clubrecommandation-app-nx54uh.streamlit.app/")
                    }
                  >
                    Discover Club for you...
                  </button>
                  <button
                    onClick={() => navigate("/club")}
                    className="bg-gray-300 text-black p-5 hover:font-semibold text-2xl rounded-lg hover:bg-gray-400 transition duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-black"
                  >
                    Clubs in MITAOE
                  </button>
                </div>
              </p>
            </div>
          </div>
        </div>

        <div
          className="bg-gray-100 w-96 h-[700px] m-10 px-10 rounded-lg transform hover:scale-105 transition duration-500 ease-in-out shadow-md hover:shadow-2xl cursor-pointer flex items-center justify-center text-center mt-32"
          onClick={() => (window.location.href = "http://localhost:3000/chats")}
        >
          <p className="text-lg font-semibold text-gray-800">
            Click to get notifications and recruitments
          </p>
        </div>
      </div>

      {/* <style>
          {`
          @keyframes fade-in-down {
            0% {
              opacity: 0;
              transform: translateY(-100%);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
        </style> */}

      <style>
        {`
    @keyframes fade-in-up {
      0% {
        opacity: 0;
        transform: translateY(100%);
      }
      100% {
        opacity: 1;
        transform: translateY(0);
      }
    }
  `}
      </style>
    </div>
  );
}
