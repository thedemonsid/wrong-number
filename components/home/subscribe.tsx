import React from 'react';

export const Subscribe = () => {
  return (
    <section id="subscribe" className="bg-neutral-900 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-neutral-800 rounded-2xl p-8 md:p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/3 h-full opacity-10">
            <svg className="w-full h-full" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path fill="#FF0066" d="M34.5,-58.2C46.3,-49.7,58.6,-43.1,67.4,-32.5C76.2,-21.9,81.5,-7.3,80.3,6.9C79.1,21.1,71.4,34.8,61.7,46.2C52,57.6,40.3,66.7,27.2,70.5C14.1,74.3,-0.4,72.8,-14.8,69.2C-29.1,65.6,-43.3,60,-54.8,50C-66.3,40.1,-75.1,25.8,-76.9,10.5C-78.7,-4.8,-73.5,-21.1,-65.1,-34.6C-56.7,-48.1,-45,-58.8,-32.4,-66.8C-19.8,-74.8,-6.2,-80.1,3.1,-75.2C12.4,-70.3,22.8,-66.7,34.5,-58.2Z" transform="translate(100 100)"></path>
            </svg>
          </div>

          <div className="relative z-10">
            <div className="text-center mb-8 animate__animated animate__fadeIn">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Stay Informed, Stay Smart!</h2>
              <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                Get weekly fact-checks and educational resources delivered straight to your inbox
              </p>
            </div>

            <form className="max-w-xl mx-auto animate__animated animate__fadeInUp">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <input type="email" placeholder="Enter your email address" className="w-full px-4 py-3 rounded-lg bg-neutral-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500" required />
                </div>
                <button type="submit" className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg font-medium transition-colors animate__animated animate__pulse animate__infinite">
                  Subscribe Now
                </button>
              </div>
              
              <div className="mt-4 text-center">
                <label className="inline-flex items-center gap-2 text-gray-400 text-sm cursor-pointer hover:text-gray-300">
                  <input type="checkbox" className="form-checkbox rounded bg-neutral-700 border-neutral-600 text-red-500 focus:ring-red-500" required />
                  <span>I agree to receive educational updates and fact-checks</span>
                </label>
              </div>
            </form>

            <div className="mt-8 flex flex-wrap justify-center gap-6 text-center animate__animated animate__fadeIn">
              <div className="flex items-center gap-2 text-gray-400">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <span>Weekly Updates</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <span>Kid-Friendly Content</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Fact-Checked News</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};