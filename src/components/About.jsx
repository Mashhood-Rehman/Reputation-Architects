export default function About() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-white px-4 py-12 md:px-6 lg:px-8">
      {/* Background Triangle */}
      <div
        className="absolute left-0 top-0 h-96 w-96 opacity-0 animate-fadeInLeft"
        style={{ animationDelay: "0.2s", animationDuration: "0.8s" }}
      >
        <div className="h-full w-full transform -rotate-45 bg-orange-500" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8">
          {/* Left Column - Images */}
          <div className="relative opacity-0 animate-scaleIn">
            <div className="relative aspect-square overflow-hidden rounded-full border-8 border-gray-100">
              <img
                src="/optimization.jpg"
                alt="Team collaboration"
                className="h-full w-full object-cover"
              />
              {/* Spiral overlay */}
              <div
                className="absolute inset-0 animate-spinSlow"
                style={{
                  background:
                    "radial-gradient(circle at center, transparent 30%, rgba(255,255,255,0.8) 70%)",
                }}
              />
            </div>
            {/* Additional Images */}
            <div className="absolute -bottom-12 -left-12 w-48 overflow-hidden rounded-lg shadow-xl opacity-0 animate-fadeInUp delay-400">
              <img
                src="/optimization.jpg"
                alt="Office space"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-12 right-0 w-48 overflow-hidden rounded-lg shadow-xl opacity-0 animate-fadeInUp delay-600">
              <img
                src="/"
                alt="Team meeting"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="flex flex-col justify-center opacity-0 animate-fadeInUp delay-400">
            <div>
              <span className="text-sm font-semibold uppercase tracking-wider text-orange-500">
                : ABOUT AGENCY :
              </span>
              <h1 className="mt-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                Were Sharp Brands Creators Open For Any New Collabs
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-gray-600">
                Grow brands through bold and strategic creative, focused on
                searching new ways to showcase user content on digital support
                and envisioning the future arts.
              </p>
              <div className="mt-8">
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-gray-900">
                    High Standard
                  </h3>
                  <p className="mt-2 text-gray-600">
                    Grow brands through bold and strategic creative, focused on
                    searching new ways to showcase user content on digital
                    support and envisioning the future arts.
                  </p>
                </div>
                <button className="rounded-full bg-orange-500 px-8 py-4 text-white transition-colors hover:bg-orange-600">
                  View All Our News
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
