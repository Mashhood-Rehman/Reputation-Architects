import { Icon } from "@iconify/react"; // Import Icon component from Iconify
import { Link } from "react-router-dom";

const teamMembers = [
  {
    name: "John Doe",
    role: "Software Engineer",
    image: "https://readymadeui.com/team-1.webp",
    socials: {
      // twitter: "https://twitter.com",
      linkedin: "https://www.linkedin.com",
      github: "https://github.com",
    },
  },
  {
    name: "Mark Adair",
    role: "Software Engineer",
    image: "https://readymadeui.com/team-2.webp",
    socials: {
      // twitter: "https://twitter.com",
      linkedin: "https://www.linkedin.com",
      github: "https://github.com",
    },
  },
  {
    name: "Simon Konecki",
    role: "Web Designer",
    image: "https://readymadeui.com/team-3.webp",
    socials: {
      // twitter: "https://twitter.com",
      linkedin: "https://www.linkedin.com",
      github: "https://github.com",
    },
  },
  {
    name: "Eleanor",
    role: "Web Designer",
    image: "https://readymadeui.com/team-6.webp",
    socials: {
      // twitter: "https://twitter.com",
      linkedin: "https://www.linkedin.com",
      github: "https://github.com",
    },
  },
];

const Team = () => {
  return (
    <div className="font-[sans-serif] h-[100vh]  mx-auto p-4 bg-black">
      <div className="max-w-2xl mx-auto text-center text-white">
        <h2 className="text-white text-3xl font-extrabold">Meet our team</h2>
        <p className="text-white text-sm mt-4 leading-relaxed">
          Meet our team of professionals to serve you.
        </p>
      </div>

      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-x-6 gap-y-16 text-center mt-24">
        {teamMembers.map((member, index) => (
          <div key={index} className="bg-gray-800 relative rounded">
            <img
              src={member.image}
              alt={member.name}
              className="w-32 h-32 rounded-full inline-block -mt-12 border-4 border-white"
            />
            <div className="py-4">
              <h4 className="text-white text-base font-extrabold">
                {member.name}
              </h4>
              <p className="text-white text-xs mt-1">{member.role}</p>
              <div className="space-x-4 mt-4">
                <Link to={member.socials.linkedin} passHref>
                  <button
                    type="button"
                    className="w-7 h-7 inline-flex items-center justify-center rounded-full bg-orange-500 hover:bg-orange-400"
                  >
                    <Icon
                      icon="bx:bxl-linkedin"
                      className="fill-white"
                      width={16}
                      height={16}
                    />
                  </button>
                </Link>
                <Link to={member.socials.github} passHref>
                  <button
                    type="button"
                    className="w-7 h-7 inline-flex items-center justify-center rounded-full bg-orange-500 hover:bg-orange-400"
                  >
                    <Icon
                      icon="bi:github"
                      className="fill-white"
                      width={16}
                      height={16}
                    />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
