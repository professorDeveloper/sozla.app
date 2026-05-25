import React from "react";

const teamMembers = [
  {
    name: "Saidkamol",
    role: "Frontend developer",
    bio: "Former co-founder of Opendoor. Early staff at Spotify and Clearbit.",
    gradient: "from-green-400 to-emerald-500",
  },
  {
    name: "Bekzod",
    role: "UX/UI Designer",
    bio: "So`zla ilovasining interfeysi va UX jihatdan qulayligiga javobgar shaxs.",
    gradient: "from-lime-400 to-green-500",
  },
  {
    name: "Hasan",
    role: "Product Manager",
    bio: "Former PM for Linear, Lambda School, and On Deck.",
    gradient: "from-emerald-400 to-teal-500",
  },
  {
    name: "Husan",
    role: "Mobile Dev + Co-Founder",
    bio: "So`zla ilovasining mobil tomonini quruvchi va loyihaning hammuassisi.",
    gradient: "from-teal-400 to-green-600",
  },
];

const getInitials = (name) =>
  name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

const TeamCard = ({ name, role, bio, gradient }) => (
  <div className="group relative flex flex-col items-center p-8 rounded-[2.5rem] bg-[#f0f7ee] dark:bg-green-900/10 transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:shadow-green-200/50 dark:hover:shadow-none">
    <div
      className={`w-32 h-32 rounded-full mb-6 flex items-center justify-center border-4 border-white dark:border-slate-800 shadow-md bg-gradient-to-br ${gradient} transition-transform duration-500 group-hover:scale-110`}
    >
      <span className="text-white text-4xl font-bold tracking-wide drop-shadow-sm">
        {getInitials(name)}
      </span>
    </div>

    <h3 className="text-xl font-bold text-[#2D3142] dark:text-white mb-1">
      {name}
    </h3>
    <p className="text-green-600 dark:text-green-400 font-medium mb-4 text-center">
      {role}
    </p>
    <p className="text-gray-500 dark:text-gray-400 text-center text-sm leading-relaxed max-w-[200px]">
      {bio}
    </p>

    <div className="absolute bottom-6 w-0 h-1 bg-green-500 rounded-full transition-all duration-500 group-hover:w-12" />
  </div>
);

export default function TeamSection() {
  return (
    <section className="py-24 bg-white dark:bg-slate-900 transition-colors">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-[#2D3142] dark:text-white mb-6">
            Bizning jamoa
          </h2>
          <p className="max-w-2xl mx-auto text-gray-500 dark:text-gray-400 text-lg">
            Our philosophy is simple — hire a team of diverse, passionate people
            and foster a culture that empowers you to do you best work.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <TeamCard key={index} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
}
