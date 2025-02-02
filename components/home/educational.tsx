import React from "react";

export const Educational = () => {
  return (
    <section id="educational" className="bg-neutral-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate__animated animate__fadeIn">
          <h2 className="text-3xl font-bold text-neutral-900 mb-4">
            Learn About Fact-Checking
          </h2>
          <p className="text-neutral-600">
            Fun and easy ways to spot false information
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Educational Module 1 */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden animate__animated animate__fadeInUp">
            <div className="h-48 bg-neutral-200 flex items-center justify-center">
              <div className="text-center p-4">
                <svg
                  className="w-12 h-12 mx-auto text-neutral-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  ></path>
                </svg>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-3">Spotting Fake News 101</h3>
              <p className="text-neutral-600 mb-4">
                Learn the basic tricks to identify false information online.
                Perfect for beginners!
              </p>
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">
                  Beginner Friendly
                </span>
                <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                  Interactive
                </span>
              </div>
              <button className="w-full bg-neutral-900 text-white py-2 rounded-lg hover:bg-neutral-800 transition-colors">
                Start Learning
              </button>
            </div>
          </div>

          {/* Educational Module 2 */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden animate__animated animate__fadeInUp animate__delay-1s">
            <div className="h-48 bg-neutral-200 flex items-center justify-center">
              <div className="text-center p-4">
                <svg
                  className="w-12 h-12 mx-auto text-neutral-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
                  ></path>
                </svg>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-3">Digital Detective Game</h3>
              <p className="text-neutral-600 mb-4">
                Play our fun game to become a fact-checking expert. Solve cases
                and earn badges!
              </p>
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-purple-100 text-purple-800 text-xs font-medium px-2.5 py-0.5 rounded">
                  Game Based
                </span>
                <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2.5 py-0.5 rounded">
                  Rewards
                </span>
              </div>
              <button className="w-full bg-neutral-900 text-white py-2 rounded-lg hover:bg-neutral-800 transition-colors">
                Play Now
              </button>
            </div>
          </div>

          {/* Educational Module 3 */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden animate__animated animate__fadeInUp animate__delay-2s">
            <div className="h-48 bg-neutral-200 flex items-center justify-center">
              <div className="text-center p-4">
                <svg
                  className="w-12 h-12 mx-auto text-neutral-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                  ></path>
                </svg>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-3">Quiz Challenge</h3>
              <p className="text-neutral-600 mb-4">
                Test your knowledge with our fun quizzes. Challenge friends and
                family!
              </p>
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-red-100 text-red-800 text-xs font-medium px-2.5 py-0.5 rounded">
                  Multiplayer
                </span>
                <span className="bg-orange-100 text-orange-800 text-xs font-medium px-2.5 py-0.5 rounded">
                  Weekly Updates
                </span>
              </div>
              <button className="w-full bg-neutral-900 text-white py-2 rounded-lg hover:bg-neutral-800 transition-colors">
                Take Quiz
              </button>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <a
            href="#"
            className="inline-flex items-center gap-2 text-red-500 hover:text-red-600 font-medium"
          >
            View All Learning Resources
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              ></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};
