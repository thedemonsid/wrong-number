import React from "react";
import TrendingCard, { TrendingCardProps } from "./trending-card";

export const Trending = () => {
  const trendingFactChecks: TrendingCardProps[] = [
    {
      status: "FALSE",
      time: "2 hours ago",
      category: "Politics",
      title: "Popular Leader's Statement About Economic Growth",
      description:
        "Fact check reveals contradictions in recent claims about national economic statistics...",
      link: "#",
      delay: "",
    },
    {
      status: "MISLEADING",
      time: "5 hours ago",
      category: "Health",
      title: "Viral Social Media Post About New Health Study",
      description:
        "Investigation shows mixed truth in viral claims about recent medical research...",
      link: "#",
      delay: "animate__delay-1s",
    },
    {
      status: "TRUE",
      time: "1 day ago",
      category: "Environment",
      title: "Environmental Activist's Climate Change Statement",
      description:
        "Our research confirms the accuracy of recent climate change statistics shared...",
      link: "#",
      delay: "animate__delay-2s",
    },
  ];

  return (
    <section id="trending" className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate__animated animate__fadeIn">
          <h2 className="text-3xl font-bold text-neutral-900 mb-4">
            Trending Fact Checks
          </h2>
          <p className="text-neutral-600">
            Latest viral claims that we've investigated
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trendingFactChecks.map((factCheck, index) => (
            <TrendingCard
              key={index}
              status={factCheck.status}
              time={factCheck.time}
              category={factCheck.category}
              title={factCheck.title}
              description={factCheck.description}
              link={factCheck.link}
              delay={factCheck.delay}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#factcheckFeed"
            className="inline-block bg-neutral-900 text-white px-8 py-3 rounded-lg hover:bg-neutral-800 transition-colors animate__animated animate__pulse animate__infinite"
          >
            View More Fact Checks
          </a>
        </div>
      </div>
    </section>
  );
};
