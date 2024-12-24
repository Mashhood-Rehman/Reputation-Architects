export default function About() {
  return (
    <div className="relative w-full overflow-hidden bg-black p-8 sm:p-12">
      {/* Background Triangle */}
      <div
        className="absolute left-0 top-0 h-64 w-64 opacity-0 animate-fadeInLeft"
        style={{ animationDelay: "0.2s", animationDuration: "0.8s" }}
      >
        <div className="h-full w-full transform -rotate-45 bg-orange-500" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-6">
          {/* Left Column - Images */}
          <div className="relative opacity-0 animate-scaleIn">
            <div className="relative aspect-square overflow-hidden rounded-full border-8 border-gray-100">
              <img
                src="/marketing.webp"
                alt="Team collaboration"
                height={600}
                width={600}
                className="z-50"
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
            <div className="absolute -bottom-10 -left-1  overflow-hidden rounded-lg shadow-xl opacity-0 animate-fadeInUp delay-400">
              <img
                src="/optimization.jpg  "
                height={300}
                width={200}
                alt="Office space"
                className=" "
              />
            </div>
            <div className="absolute -bottom-10 right-0 w-36 overflow-hidden rounded-lg shadow-xl opacity-0 animate-fadeInUp delay-600">
              <img
                src="/searching.jpg"
                alt="Team meeting"
                height={200}
                width={200}
                className=" object-cover"
              />
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="flex flex-col justify-center opacity-0 animate-fadeInUp delay-400">
            <div>
              <span className="text-sm font-semibold uppercase tracking-wider text-orange-500">
                ABOUT AGENCY :
              </span>
              <h1 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                We define your Digital Existence!
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-white">
                Grow brands through bold and strategic creative, focused on
                searching new ways to showcase user content on digital support
                and envisioning the future arts.
              </p>
              <div className="mt-8">
                <button className="rounded-full bg-orange-500 px-6 py-3 text-white transition-colors hover:bg-orange-600">
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
