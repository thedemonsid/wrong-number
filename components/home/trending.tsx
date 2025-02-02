import React from 'react';

export const Trending = () => {
  return (
    <section id="trending" className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate__animated animate__fadeIn">
          <h2 className="text-3xl font-bold text-neutral-900 mb-4">Trending Fact Checks</h2>
          <p className="text-neutral-600">Latest viral claims that we've investigated</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Trending Card 1 */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 animate__animated animate__fadeInUp">
            <div className="relative">
              <div className="bg-neutral-200 h-48 flex items-center justify-center">
                <span className="text-neutral-500">Image Placeholder</span>
              </div>
              <span className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">FALSE</span>
            </div>
            <div className="p-6">
              <div className="flex items-center mb-4">
                <span className="text-sm text-neutral-500">2 hours ago</span>
                <span className="mx-2">•</span>
                <span className="text-sm text-neutral-500">Politics</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Popular Leader's Statement About Economic Growth</h3>
              <p className="text-neutral-600 mb-4">Fact check reveals contradictions in recent claims about national economic statistics...</p>
              <a href="#" className="text-red-500 font-medium hover:text-red-600 transition-colors">Read Full Analysis →</a>
            </div>
          </div>

          {/* Trending Card 2 */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 animate__animated animate__fadeInUp animate__delay-1s">
            <div className="relative">
              <div className="bg-neutral-200 h-48 flex items-center justify-center">
                <span className="text-neutral-500">Image Placeholder</span>
              </div>
              <span className="absolute top-4 right-4 bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-medium">MISLEADING</span>
            </div>
            <div className="p-6">
              <div className="flex items-center mb-4">
                <span className="text-sm text-neutral-500">5 hours ago</span>
                <span className="mx-2">•</span>
                <span className="text-sm text-neutral-500">Health</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Viral Social Media Post About New Health Study</h3>
              <p className="text-neutral-600 mb-4">Investigation shows mixed truth in viral claims about recent medical research...</p>
              <a href="#" className="text-red-500 font-medium hover:text-red-600 transition-colors">Read Full Analysis →</a>
            </div>
          </div>

          {/* Trending Card 3 */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 animate__animated animate__fadeInUp animate__delay-2s">
            <div className="relative">
              <div className="bg-neutral-200 h-48 flex items-center justify-center">
                <span className="text-neutral-500">Image Placeholder</span>
              </div>
              <span className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">TRUE</span>
            </div>
            <div className="p-6">
              <div className="flex items-center mb-4">
                <span className="text-sm text-neutral-500">1 day ago</span>
                <span className="mx-2">•</span>
                <span className="text-sm text-neutral-500">Environment</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Environmental Activist's Climate Change Statement</h3>
              <p className="text-neutral-600 mb-4">Our research confirms the accuracy of recent climate change statistics shared...</p>
              <a href="#" className="text-red-500 font-medium hover:text-red-600 transition-colors">Read Full Analysis →</a>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <a href="#factcheckFeed" className="inline-block bg-neutral-900 text-white px-8 py-3 rounded-lg hover:bg-neutral-800 transition-colors animate__animated animate__pulse animate__infinite">
            View More Fact Checks
          </a>
        </div>
      </div>
    </section>
  );
};