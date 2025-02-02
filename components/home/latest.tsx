import FactCheckCard, { FactCheckCardProps } from "./fact-check-card";

export const Latest = () => {
  const factChecks: FactCheckCardProps[] = [
    {
      status: "FALSE",
      publishedTime: "Published 3 hours ago",
      title: "Influential CEO's Claims About AI Safety Debunked",
      description:
        "Recent statements about artificial intelligence safety measures contradict existing research and industry standards...",
      author: "Fact Check Team",
      readTime: "5 min read",
      link: "#",
      delay: "",
    },
    {
      status: "PARTIALLY TRUE",
      publishedTime: "Published 5 hours ago",
      title: "Viral Social Media Post About Education Policy",
      description:
        "Analysis of recent viral claims about education reform reveals mixed accuracy in policy interpretation...",
      author: "Education Team",
      readTime: "4 min read",
      link: "#",
      delay: "animate__delay-1s",
    },
  ];

  return (
    <section id="factcheckFeed" className="bg-neutral-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-neutral-900 mb-4 animate__animated animate__fadeIn">
            Latest Fact Checks
          </h2>
          <div className="flex flex-wrap gap-4 mb-8">
            <button className="bg-red-500 text-white px-4 py-2 rounded-full text-sm font-medium">
              All
            </button>
            <button className="bg-white text-neutral-600 px-4 py-2 rounded-full text-sm font-medium hover:bg-neutral-200">
              Politics
            </button>
            <button className="bg-white text-neutral-600 px-4 py-2 rounded-full text-sm font-medium hover:bg-neutral-200">
              Social Media
            </button>
            <button className="bg-white text-neutral-600 px-4 py-2 rounded-full text-sm font-medium hover:bg-neutral-200">
              Entertainment
            </button>
            <button className="bg-white text-neutral-600 px-4 py-2 rounded-full text-sm font-medium hover:bg-neutral-200">
              Technology
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8">
          {factChecks.map((factCheck, index) => (
            <FactCheckCard
              key={index}
              status={factCheck.status}
              publishedTime={factCheck.publishedTime}
              title={factCheck.title}
              description={factCheck.description}
              author={factCheck.author}
              readTime={factCheck.readTime}
              link={factCheck.link}
              delay={factCheck.delay}
            />
          ))}
        </div>

        <div className="text-center mt-8">
          <button className="bg-neutral-900 text-white px-8 py-3 rounded-lg hover:bg-neutral-800 transition-colors animate__animated animate__pulse animate__infinite">
            Load More Fact Checks
          </button>
        </div>
      </div>
    </section>
  );
};
