import React from "react";

export const About = () => {
  return (
    <section id="about" className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate__animated animate__fadeInLeft">
            <h2 className="text-3xl font-bold text-neutral-900 mb-6">
              Our Mission for Truth
            </h2>
            <p className="text-neutral-600 mb-6 text-lg">
              We believe everyone, especially young minds, deserve to know the
              truth. Our team of dedicated fact-checkers works tirelessly to
              verify claims and present accurate information in an engaging way.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-red-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-900 mb-1">
                    Accurate Information
                  </h3>
                  <p className="text-neutral-600">
                    We verify every claim thoroughly using reliable sources and
                    expert opinions
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-blue-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    ></path>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-900 mb-1">
                    Kid-Friendly Approach
                  </h3>
                  <p className="text-neutral-600">
                    Complex topics explained in simple, understandable ways
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-green-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    ></path>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-900 mb-1">
                    Community Driven
                  </h3>
                  <p className="text-neutral-600">
                    Building a community that values truth and critical thinking
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:pl-12 animate__animated animate__fadeInRight">
            <div className="bg-neutral-900 rounded-xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Our Impact</h3>

              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-500 mb-2">
                    1000+
                  </div>
                  <p className="text-gray-400">Claims Verified</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-500 mb-2">
                    50K+
                  </div>
                  <p className="text-gray-400">Monthly Readers</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-500 mb-2">
                    100+
                  </div>
                  <p className="text-gray-400">Expert Contributors</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-500 mb-2">
                    95%
                  </div>
                  <p className="text-gray-400">Accuracy Rate</p>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-neutral-700">
                <h4 className="font-semibold mb-4">Our Partners</h4>
                <div className="flex flex-wrap gap-4">
                  <span className="bg-neutral-800 px-4 py-2 rounded-full text-sm">
                    News Organizations
                  </span>
                  <span className="bg-neutral-800 px-4 py-2 rounded-full text-sm">
                    Educational Institutions
                  </span>
                  <span className="bg-neutral-800 px-4 py-2 rounded-full text-sm">
                    Research Centers
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
