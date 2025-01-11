export default function About() {
  return (
    <div className="min-h-[500px] bg-[#111111] px-6 py-12 md:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-square w-full max-w-lg mx-auto lg:mx-0">
            <div className="relative h-full">
              <img
                height={100}
                width={100}
                src="/marketing-min.webp"
                alt="Creative professional"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>

          <div className="space-y-8">
            <div className="space-y-6">
              <p className="text-gray-400 text-sm uppercase tracking-wider">
                ABOUT US
              </p>
              <h1 className="lg:text-4xl text-2xl font-bold text-white leading-tight">
                We Use Creativity to
                <br />
                Get Our Clients.
              </h1>
              <p className="text-gray-400 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel
                magna integer a tellus cursus amet. Proin vel magna integer in
                tellus cursus vitae interdum ut elementum sit amet.
              </p>
            </div>

            {/* Features Section */}
            <div className="grid grid-cols-2 gap-6">
              {/* Feature 1 - Clean Code */}
              <div className=" flex lg:flex-row flex-col  items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-[#40E0D0]/10 flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-[#40E0D0]"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                </div>
                <div className=" text-sm lg:text-lg">
                  <h3 className="text-white  font-semibold mb-1">Clean Code</h3>
                  <p className="text-gray-400 text-sm">
                    Optimized for better performance
                  </p>
                </div>
              </div>

              {/* Feature 2 - Modern Design */}
              <div className="flex lg:flex-row flex-col items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-[#40E0D0]/10 flex  items-center justify-center">
                    <svg
                      className="w-6 h-6 text-[#40E0D0]"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                      />
                    </svg>
                  </div>
                </div>
                <div className=" text-sm lg:text-lg">
                  <h3 className="text-white font-semibold mb-1">
                    Modern Design
                  </h3>
                  <p className="text-gray-400 text-sm">Latest design trends</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
