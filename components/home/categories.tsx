import React from 'react';

export const Categories = () => {
  return (
    <section id="categories" className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate__animated animate__fadeIn">
          <h2 className="text-3xl font-bold text-neutral-900 mb-4">Browse by Category</h2>
          <p className="text-neutral-600">Explore fact checks across different topics</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Politics Category */}
          <div className="bg-neutral-900 rounded-xl p-6 text-white hover:transform hover:scale-105 transition-all duration-300 animate__animated animate__fadeInUp">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                </svg>
              </div>
              <span className="text-sm text-gray-300">156 checks</span>
            </div>
            <h3 className="text-xl font-bold mb-2">Politics</h3>
            <p className="text-gray-400 text-sm mb-4">Political statements, campaign promises, and policy claims</p>
            <a href="#" className="text-red-500 hover:text-red-400 text-sm flex items-center">
              View Cases
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>

          {/* Social Media Category */}
          <div className="bg-neutral-900 rounded-xl p-6 text-white hover:transform hover:scale-105 transition-all duration-300 animate__animated animate__fadeInUp animate__delay-1s">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"></path>
                </svg>
              </div>
              <span className="text-sm text-gray-300">243 checks</span>
            </div>
            <h3 className="text-xl font-bold mb-2">Social Media</h3>
            <p className="text-gray-400 text-sm mb-4">Viral posts, trending claims, and online misinformation</p>
            <a href="#" className="text-blue-500 hover:text-blue-400 text-sm flex items-center">
              View Cases
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>

          {/* Health Category */}
          <div className="bg-neutral-900 rounded-xl p-6 text-white hover:transform hover:scale-105 transition-all duration-300 animate__animated animate__fadeInUp animate__delay-2s">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                </svg>
              </div>
              <span className="text-sm text-gray-300">178 checks</span>
            </div>
            <h3 className="text-xl font-bold mb-2">Health</h3>
            <p className="text-gray-400 text-sm mb-4">Medical claims, health advice, and scientific facts</p>
            <a href="#" className="text-green-500 hover:text-green-400 text-sm flex items-center">
              View Cases
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>

          {/* Entertainment Category */}
          <div className="bg-neutral-900 rounded-xl p-6 text-white hover:transform hover:scale-105 transition-all duration-300 animate__animated animate__fadeInUp animate__delay-3s">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z"></path>
                </svg>
              </div>
              <span className="text-sm text-gray-300">132 checks</span>
            </div>
            <h3 className="text-xl font-bold mb-2">Entertainment</h3>
            <p className="text-gray-400 text-sm mb-4">Celebrity statements, media claims, and viral entertainment</p>
            <a href="#" className="text-purple-500 hover:text-purple-400 text-sm flex items-center">
              View Cases
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};