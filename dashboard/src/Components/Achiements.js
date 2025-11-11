import React, { useState } from "react";

function Achievements() {
  const [show, setShow] = useState(true);

  const handleClose = () => {
    setShow(false);
  };

  if (!show) {
    return null; // Don't render anything if the alert is closed
  }

  return (
    <>
      {/* Add padding to account for the fixed navbar */}
      <div className="">
        <section className="bg-gray-100 text-center pt-20 pb-14 cursor-default">
          <h2 className="text-4xl text-gray-700 font-bold">
            <span className="text-black">Achievements</span> of CLUB ELITE
          </h2>
          <div className="w-36 h-1 mt-4 mx-auto border-b-4 border-black rounded-full"></div>
        </section>
        <div className="h-full w-100 flex justify-evenly flex-wrap cursor-default bg-gray-100">
          <div className="h-auto p-10 w-100 rounded-2xl transform hover:scale-110 transition duration-500 ease-in-out bg-transparent hover:bg-gray-200 hover:shadow-2xl hover:shadow-black focus:ring-2 focus:ring-gray-500 hover:overflow-hidden">
            <img
              className="h-72 w-72 object-cover rounded-full overflow-hidden p-5 ml-10"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0tDf3dEN3DUPJQrLF8f3sVwQgpoYALIe7Ag&s"
              alt="100+ Users"
            />
            <p className="text-2xl text-center font-bold text-gray-700">
              <br />
              100+ Users
            </p>
            <p className="text-black mb-5">
              <br /> <span className="font-bold">100+ Users:</span> Active,
              engaged students.
              <br />
              <span className="font-bold">Diverse Skills:</span> Varied talents
              and interests.
              <br />
              <span className="font-bold">High Participation:</span> Involvement
              in events.
              <br />
              <span className="font-bold">Guidance:</span> Seamless club
              recommendations.
              <br />
              <span className="font-bold">Network:</span> Building meaningful
              connections.
              <br />
            </p>
          </div>
          <div className="h-auto p-10 w-100 rounded-2xl transform hover:scale-110 transition duration-500 ease-in-out bg-transparent hover:bg-gray-200 hover:shadow-2xl hover:shadow-black focus:ring-2 focus:ring-gray-500 hover:overflow-hidden">
            <img
              className="h-72 w-72 object-cover rounded-full overflow-hidden p-5 ml-16"
              src="https://media.istockphoto.com/id/1574440265/photo/artificial-intelligence-concept-dots-and-polygons-forming-a-human-brain.jpg?s=612x612&w=0&k=20&c=hiBSYw117jWf56WWQyAprctVPQV24Dtgd4wHg0f2Yb4="
              alt="Skill-Based Matching Algorithm"
            />
            <p className="text-2xl text-center font-bold text-gray-700">
              Skill-Based <br />
              Matching Algorithm
            </p>
            <p className="text-black mb-5 ">
              <br />
              <span className="font-bold"> AI-Powered:</span> Matches clubs
              using ML.
              <br />
              <span className="font-bold">Personalized:</span> Recommends based
              on skills.
              <br />
              <span className="font-bold">Efficient:</span> Simplifies finding
              the perfect club.
              <br />
              <span className="font-bold">Data-Driven:</span> Uses student data
              for suggestions.
              <br />
              <span className="font-bold">User-Friendly:</span> Offers a
              seamless platform.
              <br />
            </p>
          </div>
          <div className="h-auto p-10 w-100 rounded-2xl transform hover:scale-110 transition duration-500 ease-in-out bg-transparent hover:bg-gray-200 hover:shadow-2xl hover:shadow-black focus:ring-2 focus:ring-gray-500 hover:overflow-hidden">
            <img
              className="h-72 w-72 object-cover rounded-full overflow-hidden p-5 ml-16"
              src="https://media.istockphoto.com/id/958300052/photo/digital-marketing-new-startup-project-millennials-business-team-hands-at-work-with-financial.jpg?s=2048x2048&w=is&k=20&c=ANxBHBvv3RLlCoCkEmRmPNHREQVo8f7whAJXocdy7b4="
              alt="Enhanced Student Engagement"
            />
            <p className="text-2xl text-center font-bold text-gray-700">
              Enhanced Student <br />
              Engagement
            </p>
            <p className="text-black mb-5">
              <br /> <span className="font-bold"> 70% Boost:</span> Increased
              participation.
              <br />
              <span className="font-bold">Tailored Matches:</span> Helps to
              thrive in suitable clubs.
              <br />
              <span className="font-bold">Active Engagement:</span> Promotes
              contributions.
              <br />
              <span className="font-bold">Growth Opportunities:</span> Supports
              development.
              <br />
              <span className="font-bold">Connections:</span> Builds a
              collaborative community.
              <br />
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Achievements;
