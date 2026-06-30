function FeatureCard({ icon, title, description }) {
  return (
    <div className="group rounded-2xl bg-white p-8 shadow-md border border-gray-100 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 text-3xl text-blue-900 transition-all duration-300 group-hover:rotate-6 group-hover:scale-110 group-hover:bg-blue-900 group-hover:text-white">
        {icon}
      </div>

      <h3 className="mb-4 text-2xl font-semibold text-gray-900">
        {title}
      </h3>

      <p className="leading-7 text-gray-600">
        {description}
      </p>
    </div>
  );
}

export default FeatureCard;