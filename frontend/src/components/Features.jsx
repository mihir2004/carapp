// src/components/FeaturesSection.js
const FeaturesSection = () => {
  const features = [
    {
      title: "Easy Management",
      description: "Keep track of your cars with just a few clicks.",
    },
    { title: "Secure Data", description: "Your car details are safe with us." },
    {
      title: "User-Friendly Interface",
      description: "A modern design for seamless use.",
    },
  ];

  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto">
        <h3 className="text-2xl font-bold text-center mb-8">
          Why Choose CarApp?
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <h4 className="font-bold text-lg mb-2">{feature.title}</h4>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
