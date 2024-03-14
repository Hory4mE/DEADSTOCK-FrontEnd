function FeatureCard({ title, subtitle, icon, alt }) {
    return (
      <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
        <div className="flex flex-col grow justify-center text-center text-black max-md:mt-4">
          <div className="flex flex-col items-center px-20 py-8 w-full bg-neutral-100 max-md:px-5">
            <div className="text-3xl font-bold tracking-widest">
              <span className="text-xl font-medium">{title}</span>
              <br />
              <span className="text-xs font-medium">{subtitle}</span>
            </div>
            <div className="flex gap-2 mt-7 text-xs font-medium tracking-wide whitespace-nowrap">
              <div>{title.split(" ")[0]}</div>
              <img
                loading="lazy"
                src={icon}
                alt={alt}
                className="shrink-0 w-4 aspect-[1.23]"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  function Features() {
    const features = [
      {
        title: "Worldwide Shipping ✈️",
        subtitle: "We Ship worldwide via UPS",
        icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/12aebb4629ab3031a4f6bdabe9b35683d9d6a9cc9735be02a3430b3745e92089?apiKey=c3d84cbd0c3a42f4a1616e4ea278d805&",
        alt: "Shipping icon",
      },
      {
        title: "We accept returns 📬",
        subtitle: "Changed your mind? We're here for you",
        icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/12aebb4629ab3031a4f6bdabe9b35683d9d6a9cc9735be02a3430b3745e92089?apiKey=c3d84cbd0c3a42f4a1616e4ea278d805&",
        alt: "Returns icon",
      },
      {
        title: "Our customers say it best 🌟",
        subtitle: "Rating 4.5/5 on Trustpilot",
        icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/12aebb4629ab3031a4f6bdabe9b35683d9d6a9cc9735be02a3430b3745e92089?apiKey=c3d84cbd0c3a42f4a1616e4ea278d805&",
        alt: "Reviews icon",
      },
    ];
  
    return (
      <section className="mt-16 max-md:mt-10 max-md:mr-2 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              subtitle={feature.subtitle}
              icon={feature.icon}
              alt={feature.alt}
            />
          ))}
        </div>
      </section>
    );
  }

  export default Features;