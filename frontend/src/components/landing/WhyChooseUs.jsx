import {
  FiShield,
  FiMapPin,
  FiAlertTriangle,
} from "react-icons/fi";

import FeatureCard from "./FeatureCard";

const features = [
  {
    icon: <FiShield />,
    title: "Smart Safety",
    description:
      "Prepare ahead with safety-focused tools that help you stay aware and ready before every journey.",
  },
  {
    icon: <FiMapPin />,
    title: "Journey Planning",
    description:
      "Plan safer routes, organize trips, and travel with confidence using location-based guidance.",
  },
  {
    icon: <FiAlertTriangle />,
    title: "Emergency Response",
    description:
      "Access SOS features and emergency contacts instantly whenever you need immediate assistance.",
  },
];

function WhyChooseUs() {
  return (
    <section id="features" className="py-24 bg-slate-50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="text-4xl font-bold text-gray-900">
            Why Choose Suraksha?
          </h2>

          <p className="mt-6 text-lg text-gray-600">
            Designed to help you stay prepared,
            connected, and confident wherever life
            takes you.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {features.map((feature) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;