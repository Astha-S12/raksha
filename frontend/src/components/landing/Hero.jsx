import { Link } from "react-router-dom";
import HeroFeatures from "./HeroFeatures";
import HeroStats from "./HeroStats";
function Hero() {
  return (
    <section className="relative min-h-screen flex items-center py-20 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-50 via-white to-teal-50"></div>
      <div className="absolute top-20 right-10 h-72 w-72 rounded-full bg-blue-200 opacity-20 blur-3xl -z-10"></div>
      <div className="absolute bottom-10 left-10 h-60 w-60 rounded-full bg-teal-200 opacity-20 blur-3xl -z-10"></div>
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Left Side */}
          <div>
            <p className="text-teal-600 font-semibold uppercase tracking-wide">
              Women's Safety Platform
            </p>

            <h1 className="text-5xl font-bold text-gray-900 mt-4 leading-tight">
              Your Safety,
              <br />
              Our Priority.
            </h1>

            <p className="text-gray-600 mt-6 text-lg">
             Plan safer journeys, manage emergency contacts,
             access instant SOS assistance, and stay prepared
                wherever you go.
            </p>

        <HeroFeatures />

            <div className="mt-8 flex gap-4">
                  ...
            </div>

        <HeroStats />

            <div className="mt-8 flex gap-4">
              <Link
                 to="/register"
                 className="bg-blue-900 text-white px-6 py-3 rounded-xl shadow-lg hover:bg-blue-800 hover:scale-105 transition-all duration-300"
                >
                 Get Started
            </Link>

              <a
                href="#features"
                 className="border-2 border-blue-900 text-blue-900 px-6 py-3 rounded-xl hover:bg-blue-50 hover:scale-105 transition-all duration-300"
                >
                 Learn More
             </a>
            </div>
          </div>

          {/* Right Side */}
          <div className="flex justify-center">
            <div className="w-96 h-96 rounded-3xl bg-gradient-to-br from-blue-100 via-white to-teal-100 shadow-2xl flex items-center justify-center">
                <div className="text-center">
                    <div className="text-8xl">🛡️</div>

                        <p className="mt-4 text-gray-700 font-semibold">
                            Safety Starts Here
                        </p>
                    </div>
                </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;