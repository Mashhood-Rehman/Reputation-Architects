export default function AboutMarqee() {
  return (
    <div className="relative w-full overflow-hidden bg-black py-4">
      <div className="animate-marquee-ltr flex whitespace-nowrap will-change-transform">
        {[...Array(3)].map((_, index) => (
          <div key={index} className="flex items-center gap-4 px-4">
            <TextContent />
          </div>
        ))}
      </div>
    </div>
  );
}

function TextContent() {
  return (
    <>
      <span
        className="font-bold text-4xl md:text-6xl"
        style={{
          color: "transparent",
          WebkitTextStroke: "2px white",
          textShadow: "0 0 4px black, 0 0 4px black",
        }}
      >
        GENCY CREATIVE
      </span>
      <span
        className="font-bold text-4xl md:text-6xl"
        style={{
          color: "transparent",
          WebkitTextStroke: "2px white",
          textShadow: "0 0 4px black, 0 0 4px black",
        }}
      >
        *
      </span>
      <span
        className="font-bold text-4xl md:text-6xl"
        style={{
          color: "transparent",
          WebkitTextStroke: "2px #F97316",
          textShadow: "0 0 4px black, 0 0 4px black",
        }}
      >
        SMART
      </span>
      <span
        className="font-bold text-4xl md:text-6xl"
        style={{
          color: "transparent",
          WebkitTextStroke: "2px white",
          textShadow: "0 0 4px black, 0 0 4px black",
        }}
      >
        *
      </span>
    </>
  );
}
