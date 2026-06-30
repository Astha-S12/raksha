const stats = [
  {
    number: "Smart",
    label: "Journey Planning",
  },
  {
    number: "Instant",
    label: "SOS Access",
  },
  {
    number: "Private",
    label: "Data Protection",
  },
];

function HeroStats() {
  return (
    <div className="flex flex-wrap gap-8 mt-12">
      {stats.map((stat) => (
        <div key={stat.label}>
          <h3 className="text-2xl font-bold text-blue-900">
            {stat.number}
          </h3>

          <p className="text-gray-600">
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  );
}

export default HeroStats;