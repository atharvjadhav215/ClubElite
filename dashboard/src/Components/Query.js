import React, { useState } from 'react';

export default function Query() {
  const [activeForm, setActiveForm] = useState("query");

  return (
    <>
      <div className="flex flex-col">
        {/* Navigation Buttons */}
        <div className="bg-gray-100 px-6 py-20 md:px-72 text-center">
          <button
            onClick={() => setActiveForm("query")}
            className={`px-6 py-2 mx-2 rounded-lg text-lg font-bold transition ${
              activeForm === "query"
                ? "bg-purple-600 text-white hover:shadow-2xl hover:shadow-black transform hover:scale-95 transition duration-300 ease-in-out"
                : "bg-gray-200 text-gray-700 hover:text-black hover:bg-gray-300 transform hover:scale-95 transition duration-300 ease-in-out bg-transparent  focus:ring-2 focus:ring-gray-500 hover:shadow-lg hover:shadow-black"
            }`}
          >
            Fill Query Form
          </button>
          <button
            onClick={() => setActiveForm("suggestion")}
            className={`px-6 py-2 mx-2 rounded-lg text-lg font-bold transition ${
              activeForm === "suggestion"
                ? "bg-purple-600 text-white hover:shadow-2xl hover:shadow-black transform hover:scale-95 transition duration-300 ease-in-out"
                : "bg-gray-200 text-gray-700 hover:text-black hover:bg-gray-300 transform hover:scale-95 transition duration-300 ease-in-out bg-transparent  focus:ring-2 focus:ring-gray-500 hover:shadow-lg hover:shadow-black"
            }`}
          >
            Fill Suggestion Form
          </button>
        </div>

        {/* Query Form */}
        {activeForm === "query" && (
          <section className="bg-gray-100 py-10 pb-24 px-6 md:px-72">
            <h2 className="text-4xl text-gray-700 font-bold text-center cursor-default">
              Have a Query?
            </h2>
            <div className="w-36 h-1 mt-4 mx-auto border-b-4 border-black rounded-full"></div>
            <form className="mt-10 max-w-xl mx-auto">
              <div className="mb-6">
                <label className="block text-gray-700 font-bold mb-2 " htmlFor="name">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 transform hover:scale-105 transition duration-300 ease-in-out"
                  placeholder="Enter your name"
                />
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 transform hover:scale-105 transition duration-300 ease-in-out"
                  placeholder="Enter your email"
                />
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 font-bold mb-2" htmlFor="query">
                  Query
                </label>
                <textarea
                  id="query"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 transform hover:scale-105 transition duration-300 ease-in-out"
                  placeholder="Enter your query"
                  rows="5"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition duration-300 transform hover:scale-105  ease-in-out"
              >
                Submit
              </button>
            </form>
          </section>
        )}

        {/* Suggestion Form */}
        {activeForm === "suggestion" && (
          <section className="bg-gray-100 py-10 pb-72 px-6 md:px-72">
            <h2 className="text-4xl text-gray-700 font-bold text-center cursor-default">
              Suggestions & Feedback
            </h2>
            <div className="w-36 h-1 mt-4 mx-auto border-b-4 border-black rounded-full"></div>
            <form className="mt-10 max-w-xl mx-auto">
              <div className="mb-6">
                <label className="block text-gray-700 font-bold mb-2" htmlFor="feedback">
                  Your Suggestions
                </label>
                <textarea
                  id="feedback"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 transform hover:scale-105 transition duration-300 ease-in-out"
                  placeholder="Share your suggestions or feedback"
                  rows="5"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition duration-300 transform hover:scale-105 ease-in-out"
              >
                Send
              </button>
            </form>
          </section>
        )}
      </div>
    </>
  );
}
