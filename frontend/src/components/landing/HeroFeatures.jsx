import { FiShield, FiAlertTriangle, FiMapPin } from "react-icons/fi";

const features = [
  {
    icon: <FiShield />,
    title: "Secure",
  },
  {
    icon: <FiAlertTriangle />,
    title: "Fast SOS",
  },
  {
    icon: <FiMapPin />,
    title: "Journey Planner",
  },
];

function HeroFeatures() {
  return (
    <div className="flex flex-wrap gap-4 mt-8">
      {features.map((feature) => (
        <div
          key={feature.title}
          className="flex items-center gap-2 bg-teal-50 text-teal-700 px-4 py-2 rounded-full text-sm font-medium shadow-sm"
        >
          <span className="text-lg">{feature.icon}</span>
          <span>{feature.title}</span>
        </div>
      ))}
    </div>
  );
}

export default HeroFeatures;