import { useState } from "react";
import Nav from "./components/Nav";
import ProjectCard from "./components/ProjectCard";

export default function App() {
  const [theme, setTheme] = useState("dark");

  const projects = [
    {
      title: "Presenter-Remote",
      desc: "PowerPoint control with Arduino + Python",
      tag: "Python, Arduino",
      link: "https://github.com/riviyax/Presentor-Remote"
    },
    {
      title: "Members Works Manager Tool",
      desc: "Utilities for school tasks",
      tag: "React, Express, MongoDB, Node.js",
      link: "https://github.com/riviyax/Marks"
    },
    { title: "Marks Viewer", desc: "Whatsapp Bot to view members data", tag: "Node.js", link: "https://github.com/riviyax/Marks_Viewer" },
    { title: "EZMail", desc: "Simple simple smtp server using node js", tag: "JS, Nodemailer", link: "https://github.com/riviyax/EZMail" },
  ];

  return (
<div
  className={`min-h-screen transition-colors duration-500 ${
    theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-gray-900"
  }`}
>
      <div className="max-w-5xl mx-auto px-6 py-10">
        <Nav theme={theme} setTheme={setTheme} />

        <header className="text-center mt-12">
          <h1 className="text-5xl font-extrabold">
            Hi, I'm <span className="text-blue-400">Riviya_X</span>
          </h1>
          <p className="mt-4 text-lg text-gray-300 dark:text-gray-800">
            15 y/o Developer • Python • JavaScript • Arduino
          </p>
          <a
            href="#projects"
            className="mt-6 inline-block px-6 py-3 bg-blue-500 rounded-lg hover:bg-blue-600"
          >
            View Projects
          </a>
        </header>

        <section id="about" className="mt-20">
          <h2 className="text-3xl font-bold">About Me</h2>
          <p className="mt-4 dark:text-gray-800 text-gray-300 max-w-2xl">
            I'm a 15-year-old self-taught developer from Sri Lanka. I build
            tools, bots, and automation apps using Python, JavaScript, and
            Arduino. Always learning and creating small useful projects.
          </p>
        </section>

        <section id="projects" className="mt-12">
          <h2 className="text-3xl font-bold">Projects</h2>
          <div className="mt-6 grid sm:grid-cols-2 gap-6">
            {projects.map((p) => (
              <a href={p.link || "#"} target="_blank" rel="noopener noreferrer">
              <ProjectCard
                key={p.title}
                title={p.title}
                desc={p.desc}
                tag={p.tag}
              /></a>
            ))}
          </div>
        </section>

        <section id="contact" className="mt-16 text-center mb-12">
          <h2 className="text-2xl font-bold">Contact</h2>
          <p className="dark:text-gray-800 light:text-white mt-3 text-gray-300">
            Email:{" "}
            <a className=" text-blue-300" href="mailto:mrriviya@gmail.com">
              mrriviya@gmail.com
            </a>
          </p>
        </section>
      </div>
    </div>
  );
}
