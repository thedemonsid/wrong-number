import React from 'react';

export const Latest = () => {
  return (
    <section id="factcheckFeed" className="bg-neutral-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-neutral-900 mb-4 animate__animated animate__fadeIn">Latest Fact Checks</h2>
          <div className="flex flex-wrap gap-4 mb-8">
            <button className="bg-red-500 text-white px-4 py-2 rounded-full text-sm font-medium">All</button>
            <button className="bg-white text-neutral-600 px-4 py-2 rounded-full text-sm font-medium hover:bg-neutral-200">Politics</button>
            <button className="bg-white text-neutral-600 px-4 py-2 rounded-full text-sm font-medium hover:bg-neutral-200">Social Media</button>
            <button className="bg-white text-neutral-600 px-4 py-2 rounded-full text-sm font-medium hover:bg-neutral-200">Entertainment</button>
            <button className="bg-white text-neutral-600 px-4 py-2 rounded-full text-sm font-medium hover:bg-neutral-200">Technology</button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8">
          {/* Fact Check Card 1 */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden animate__animated animate__fadeInUp">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/3">
                <div className="bg-neutral-200 h-full min-h-[200px] flex items-center justify-center">
                  <span className="text-neutral-500">Image Placeholder</span>
                </div>
              </div>
              <div className="md:w-2/3 p-6">
                <div className="flex items-center gap-4 mb-4">
                  <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">FALSE</span>
                  <span className="text-neutral-500 text-sm">Published 3 hours ago</span>
                </div>
                <h3 className="text-2xl font-bold mb-3">Influential CEO's Claims About AI Safety Debunked</h3>
                <p className="text-neutral-600 mb-4">Recent statements about artificial intelligence safety measures contradict existing research and industry standards...</p>
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-sm text-neutral-500">By Fact Check Team</span>
                  <span className="text-sm text-neutral-500">•</span>
                  <span className="text-sm text-neutral-500">5 min read</span>
                </div>
                <a href="#" className="inline-flex items-center text-red-500 font-medium hover:text-red-600">
                  Read Complete Analysis
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Fact Check Card 2 */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden animate__animated animate__fadeInUp animate__delay-1s">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/3">
                <div className="bg-neutral-200 h-full min-h-[200px] flex items-center justify-center">
                  <span className="text-neutral-500">Image Placeholder</span>
                </div>
              </div>
              <div className="md:w-2/3 p-6">
                <div className="flex items-center gap-4 mb-4">
                  <span className="bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-medium">PARTIALLY TRUE</span>
                  <span className="text-neutral-500 text-sm">Published 5 hours ago</span>
                </div>
                <h3 className="text-2xl font-bold mb-3">Viral Social Media Post About Education Policy</h3>
                <p className="text-neutral-600 mb-4">Analysis of recent viral claims about education reform reveals mixed accuracy in policy interpretation...</p>
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-sm text-neutral-500">By Education Team</span>
                  <span className="text-sm text-neutral-500">•</span>
                  <span className="text-sm text-neutral-500">4 min read</span>
                </div>
                <a href="#" className="inline-flex items-center text-red-500 font-medium hover:text-red-600">
                  Read Complete Analysis
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Load More Button */}
          <div className="text-center mt-8">
            <button className="bg-neutral-900 text-white px-8 py-3 rounded-lg hover:bg-neutral-800 transition-colors animate__animated animate__pulse animate__infinite">
              Load More Fact Checks
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};