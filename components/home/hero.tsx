export const Label = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div className="bg-neutral-700 p-4 rounded-lg">
      <p className="text-gray-300 text-sm mb-2">{title}</p>
      <h3 className="text-white font-medium">{description}</h3>
    </div>
  );
};
export const Hero = () => {
  const labels = [
    {
      title: "LATEST UPDATE",
      description: "Major Political Figure's Climate Claims Debunked",
    },
    {
      title: "VIRAL CHECK",
      description: "Social Media Post About Vaccines: Facts vs Fiction",
    },
    {
      title: "BREAKING",
      description: "Fact-checking Recent Viral Economic Claims",
    },
  ];
  return (
    <section id="hero" className="bg-neutral-900 min-h-[70vh] pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="animate__animated animate__fadeInLeft">
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
              Uncovering Truth in a World of{" "}
              <span className="text-red-500">Misinformation</span>
            </h1>
            <p className="text-gray-300 text-lg mb-8">
              We fact-check influential voices and help you understand what's
              real and what's not. Making truth accessible for everyone,
              including young minds.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#factcheckFeed"
                className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg font-medium transition-all animate__animated animate__pulse animate__infinite"
              >
                Latest Fact Checks
              </a>
              <a
                href="#educational"
                className="bg-neutral-700 hover:bg-neutral-600 text-white px-6 py-3 rounded-lg font-medium transition-all"
              >
                Learn More
              </a>
            </div>
          </div>
          <div className="relative animate__animated animate__fadeInRight">
            <div className="bg-neutral-800 p-6 rounded-xl shadow-2xl">
              <div className="flex items-center gap-4 mb-4">
                <div className="h-3 w-3 bg-red-500 rounded-full animate-pulse"></div>
                <span className="text-white font-medium">TRENDING NOW</span>
              </div>
              <div className="space-y-4">
                {labels.map((label, index) => (
                  <Label
                    key={index}
                    title={label.title}
                    description={label.description}
                  />
                ))}
              </div>
            </div>
            <div className="absolute -z-10 w-full h-full top-4 right-4 bg-red-500 rounded-xl"></div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-neutral-900 to-transparent"></div>
    </section>
  );
};
