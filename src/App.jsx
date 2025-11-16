import { useState, useEffect } from "react";
import Nav from "./components/Nav";
import ProjectCard from "./components/ProjectCard";

export default function App() {
  const [theme, setTheme] = useState("dark");

  // ---------------- TYPEWRITER EFFECT ----------------
  const [displayName, setDisplayName] = useState("Rivith");
  const [strike, setStrike] = useState(false);
  const [wipe, setWipe] = useState(false);

  useEffect(() => {
    let cancelled = false;

    async function run() {
      const first = "Rivith";
      const final = "Riviya_X";

      await new Promise((res) => setTimeout(res, 1500));
      if (cancelled) return;

      setWipe(true);
      setStrike(true);

      await new Promise((res) => setTimeout(res, 500));

      for (let i = first.length; i >= 0; i--) {
        if (cancelled) return;
        setDisplayName(first.slice(0, i));
        await new Promise((res) => setTimeout(res, 120));
      }

      setStrike(false);
      setWipe(false);

      for (let i = 0; i < final.length; i++) {
        if (cancelled) return;
        setDisplayName(final.slice(0, i + 1));
        await new Promise((res) => setTimeout(res, 120));
      }
    }

    run();
    return () => (cancelled = true);
  }, []);

  // ---------------- PROJECTS ----------------
  const projects = [
    {
      title: "Presenter-Remote",
      desc: "PowerPoint control with Arduino + Python",
      tag: "Python, Arduino",
      link: "https://github.com/riviyax/Presentor-Remote",
    },
    {
      title: "Members Works Manager Tool",
      desc: "Utilities for school tasks",
      tag: "React, Express, MongoDB, Node.js",
      link: "https://github.com/riviyax/Marks",
    },
    {
      title: "Marks Viewer",
      desc: "Whatsapp Bot to view members data",
      tag: "Node.js",
      link: "https://github.com/riviyax/Marks_Viewer",
    },
    {
      title: "EZMail",
      desc: "Simple smtp server using Node.js",
      tag: "JS, Nodemailer",
      link: "https://ezmail-smtp.pages.dev/",
    },
  ];

  // ---------------- SKILLS ----------------
  const skills = [
    { name: "Graphic Design", level: 96 },
    { name: "Python", level: 82 },
    { name: "JavaScript", level: 70 },
    { name: "Arduino", level: 90 },
    { name: "React", level: 79 },
    { name: "Node.js", level: 85 },
    { name: "PHP", level: 90 },
  ];

  // ---------------- PRICING ----------------
  const pricing = [
    {
      title: "Web Development",
      price: "$5",
      prefix: "Starting at", // optional, for display
      desc: "A complete landing page or creative website to showcase your business or personal brand.",
    },
    {
      title: "WhatsApp Bots",
      price: "$8",
      prefix: "Starting at",
      desc: "Custom WhatsApp bots to automate tasks and manage your business efficiently.",
    },
    {
      title: "Business Apps",
      price: "$20",
      prefix: "Starting at",
      desc: "Desktop, web, or mobile applications tailored to your business needs.",
    },
    {
      title: "All-in-One Solutions",
      price: "$35",
      prefix: "Starting at",
      desc: "Comprehensive systems, dashboards, or bots with full support for large-scale businesses.",
    },
  ];

  return (
    <div
      className={`min-h-screen transition-colors duration-500 ${
        theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 py-10">
        <Nav theme={theme} setTheme={setTheme} />

        {/* HEADER */}
        <header className="text-center mt-12">
          <h1 className="text-5xl font-extrabold select-none">
            Hi, I'm{" "}
            <span className="relative text-blue-400 font-bold">
              <span
                className={`${
                  strike ? "line-through text-white font-extrabold" : ""
                }`}
              >
                {displayName}
              </span>

              {wipe && (
                <span
                  className="absolute left-0 top-1/2 h-[4px] bg-white animate-wipe"
                  style={{ width: "100%" }}
                ></span>
              )}
            </span>
          </h1>

          <p className="mt-4 text-lg text-gray-300">
            15 y/o Developer • Graphic Designer
          </p>

          <a
            href="https://github.com/riviyax?tab=repositories"
            className="mt-6 inline-block px-6 py-3 bg-blue-500 rounded-lg hover:bg-blue-600"
          >
            View Projects
          </a>
        </header>

        {/* ABOUT */}
        <section id="about" className="mt-20">
          <h2 className="text-3xl font-bold">About Me</h2>

          <p className="mt-4 text-gray-300 max-w-2xl hover:text-white transition-all duration-300 cursor-default">
            I'm a 15-year-old self-taught developer from Sri Lanka. I build
            tools, bots, and automation apps using Python, JavaScript, and
            Arduino. Always learning and creating useful projects.
          </p>
        </section>

        {/* SKILLS */}
        <section id="skills" className="mt-16">
          <h2 className="text-3xl font-bold mb-6">Skills</h2>

          <div className="space-y-5">
            {skills.map((s) => (
              <div key={s.name}>
                <div className="flex justify-between mb-1">
                  <span>{s.name}</span>
                  <span>{s.level}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-3">
                  <div
                    className="bg-blue-500 h-3 rounded-full transition-all duration-700"
                    style={{ width: `${s.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* PRICING */}
        <section id="price" className="mt-20">
          <h2 className="text-3xl font-bold mb-6">Pricing</h2>
          <p className="m-5">
            Your projects, our expertise—starting at prices you’ll love. Contact
            us today.
          </p>

          <div className="grid sm:grid-cols-2 gap-6">
            {pricing.map((p) => (
              <div
                key={p.title}
                className="p-6 rounded-xl bg-gray-800 border border-gray-700 hover:border-blue-400 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
              >
                <h3 className="text-xl font-bold">{p.title}</h3>
                <p className="text-blue-400 text-3xl font-extrabold mt-2">
                  <span className="text-white font-medium text-xs">From</span>{" "}
                  {p.price}
                </p>
                <p className="text-gray-300 mt-3">{p.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="mt-20">
          <h2 className="text-3xl font-bold">Featured Projects</h2>

          <div className="mt-6 grid sm:grid-cols-2 gap-6">
            {projects.map((p) => (
              <a
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                key={p.title}
                className="block transform hover:-translate-y-2 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 rounded-xl"
              >
                <ProjectCard title={p.title} desc={p.desc} tag={p.tag} />
              </a>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="mt-16 text-center mb-12">
          <h2 className="text-2xl font-bold">Contact</h2>
          <p className="mt-3 text-gray-300">
            Email:{" "}
            <a className="text-blue-300" href="mailto:mrriviya@gmail.com">
              mrriviya@gmail.com
            </a>
          </p>
          <p className="mt-3 text-gray-300">
            Whatsapp:{" "}
            <a className="text-blue-300" href="https://api.whatsapp.com/send?phone=94773557644&text=Hello!%20I%20need%20your%20help%20with%20a%20project.">
              0773557644
            </a>
          </p>
        </section>
      </div>
    </div>
  );
}
