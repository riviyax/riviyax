import { useState, useEffect } from "react";

// --- COMPONENT: NAV (With GitHub Link & Hamburger) ---
const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "About", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Pricing", href: "#price" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="relative flex justify-between items-center py-6 z-50">
      <div className="text-2xl font-black tracking-tighter text-white">
        RIVIYA<span className="text-blue-500">_X</span>
      </div>

      {/* Desktop Links */}
      <div className="hidden md:flex gap-8 items-center">
        {links.map((l) => (
          <a key={l.name} href={l.href} className="text-sm font-medium text-slate-300 hover:text-blue-400 transition-colors">
            {l.name}
          </a>
        ))}
        {/* GitHub Link instead of Toggle */}
        <a 
          href="https://github.com/riviyax" 
          target="_blank" 
          rel="noreferrer"
          className="ml-4 p-2.5 rounded-xl bg-slate-800 border border-slate-700 hover:border-blue-500 hover:text-blue-400 transition-all text-sm flex items-center gap-2 font-bold"
        >
          <span>GitHub</span>
          <span className="text-lg">↗</span>
        </a>
      </div>

      {/* Mobile Toggle */}
      <div className="md:hidden flex items-center gap-4">
        <button onClick={() => setIsOpen(!isOpen)} className="text-2xl text-white focus:outline-none">
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="absolute top-20 left-0 w-full bg-[#0B0F1A]/95 backdrop-blur-xl border border-slate-800 rounded-2xl p-6 flex flex-col gap-4 md:hidden shadow-2xl z-50">
          {links.map((l) => (
            <a 
              key={l.name} 
              href={l.href} 
              onClick={() => setIsOpen(false)}
              className="text-lg font-semibold py-2 border-b border-slate-800 last:border-0 text-white"
            >
              {l.name}
            </a>
          ))}
          <a href="https://github.com/riviyax" className="text-blue-400 font-bold py-2">Follow on GitHub ↗</a>
        </div>
      )}
    </nav>
  );
};

// --- COMPONENT: PROJECT CARD ---
const ProjectCard = ({ title, desc, tag, link, icon }) => (
  <a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className="group relative flex flex-col justify-between p-8 rounded-3xl bg-slate-800/30 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-2"
  >
    <div className="relative z-10">
      <div className="flex justify-between items-start mb-6">
        <div className="text-3xl p-3 bg-blue-500/10 rounded-2xl group-hover:bg-blue-500/20 transition-colors">
          {icon}
        </div>
        <span className="text-[10px] font-black tracking-widest uppercase text-blue-400 bg-blue-400/10 px-3 py-1 rounded-full border border-blue-400/20">
          {tag.split(" and ")[0]}
        </span>
      </div>
      <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors mb-3">
        {title}
      </h3>
      <p className="text-slate-400 text-sm leading-relaxed line-clamp-3">
        {desc}
      </p>
    </div>
    <div className="mt-8 flex items-center text-blue-400 text-xs font-black tracking-widest opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0 uppercase">
      Explore Repository <span className="ml-2">↗</span>
    </div>
  </a>
);

export default function App() {
  const [displayName, setDisplayName] = useState("Rivith");
  const [strike, setStrike] = useState(false);

  useEffect(() => {
    let cancelled = false;
    async function run() {
      const first = "Rivith";
      const final = "Riviya_X";
      await new Promise((res) => setTimeout(res, 1500));
      if (cancelled) return;
      setStrike(true);
      await new Promise((res) => setTimeout(res, 500));
      for (let i = first.length; i >= 0; i--) {
        if (cancelled) return;
        setDisplayName(first.slice(0, i));
        await new Promise((res) => setTimeout(res, 80));
      }
      setStrike(false);
      for (let i = 0; i < final.length; i++) {
        if (cancelled) return;
        setDisplayName(final.slice(0, i + 1));
        await new Promise((res) => setTimeout(res, 80));
      }
    }
    run();
    return () => (cancelled = true);
  }, []);

  const projects = [
    { 
      title: "Presenter-Remote", 
      desc: "PowerPoint control with Arduino + Python. Uses serial communication for ultra-low latency.", 
      tag: "Python and Arduino", 
      link: "https://github.com/riviyax/Presentor-Remote",
      icon: "🖱️" // Better icon for hardware control
    },
    { 
      title: "Members Works", 
      desc: "Enterprise-level utility for school tasks. Features a full React frontend and Node.js backend.", 
      tag: "React", 
      link: "https://github.com/riviyax/Marks",
      icon: "👥" // Better icon for members/management
    },
    { 
      title: "Marks Viewer", 
      desc: "High-performance Whatsapp Bot built to view and manage member data automatically.", 
      tag: "Node.js", 
      link: "https://github.com/riviyax/Marks_Viewer",
      icon: "🤖" // Better icon for Bot
    },
    { 
      title: "EZMail", 
      desc: "A custom SMTP server built with Nodemailer for simplified email automation.", 
      tag: "Node.JS", 
      link: "https://ezmail-smtp.pages.dev/",
      icon: "📧" // Better icon for Email
    },
  ];

  const skills = [
    { name: "Graphic Design", level: 96, color: "bg-blue-500" },
    { name: "Python", level: 82, color: "bg-indigo-500" },
    { name: "JavaScript", level: 70, color: "bg-yellow-500" },
    { name: "Arduino", level: 90, color: "bg-teal-500" },
    { name: "React", level: 79, color: "bg-cyan-500" },
    { name: "Node.js", level: 85, color: "bg-green-500" },
  ];

  return (
    <div className="min-h-screen selection:bg-blue-500/30 bg-[#0B0F1A] text-slate-200">
      
      {/* GLOW DECORATIONS */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-600/10 blur-[140px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-600/10 blur-[140px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-4">
        <Nav />

        {/* HERO */}
        <header className="flex flex-col items-center text-center mt-20 md:mt-32 mb-40">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 text-[10px] font-bold tracking-[0.2em] text-blue-400 uppercase bg-blue-500/5 border border-blue-500/20 rounded-full">
            <span className="w-2 h-2 bg-blue-500 rounded-full animate-ping"></span>
            Ready for hire
          </div>
          <h1 className="text-5xl md:text-8xl font-black mb-8 tracking-tighter leading-none text-white">
            Hi, I'm{" "}
            <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 inline-block min-w-[280px]">
              <span className={strike ? "line-through decoration-white/30 text-slate-700" : ""}>
                {displayName}
              </span>
              <span className="absolute -right-2 top-0 w-1 h-full bg-blue-500 animate-pulse" />
            </span>
          </h1>
          <p className="max-w-2xl text-lg md:text-xl text-slate-400 font-medium leading-relaxed">
            Crafting the future of <span className="text-white font-bold">Automation</span> and <span className="text-white font-bold">Design</span>. Based in Sri Lanka.
          </p>
          <div className="mt-12 flex flex-col sm:flex-row gap-5">
            <a href="#projects" className="px-10 py-5 bg-blue-600 hover:bg-blue-500 text-white font-black rounded-2xl transition-all shadow-2xl shadow-blue-600/30 hover:-translate-y-1">
              EXPLORE WORK
            </a>
            <a href="#contact" className="px-10 py-5 bg-slate-800 hover:bg-slate-700 text-white font-black rounded-2xl transition-all border border-slate-700">
              LET'S CHAT
            </a>
          </div>
        </header>

        {/* SKILLS */}
        <section id="skills" className="grid md:grid-cols-2 gap-20 mb-40 items-center">
          <div>
            <h2 className="text-4xl font-black mb-6 tracking-tight text-white">Technical Arsenal</h2>
            <p className="text-slate-400 text-lg mb-10 leading-relaxed">
              I specialize in bridging hardware with modern software. From circuit design in Arduino to real-time React applications.
            </p>
            <div className="space-y-8">
              {skills.map((s) => (
                <div key={s.name} className="group">
                  <div className="flex justify-between mb-3">
                    <span className="font-bold tracking-wide uppercase text-xs group-hover:text-blue-400 transition-colors">{s.name}</span>
                    <span className="text-slate-500 text-xs font-black">{s.level}%</span>
                  </div>
                  <div className="w-full bg-slate-800/50 rounded-full h-1.5 overflow-hidden">
                    <div className={`${s.color} h-full rounded-full transition-all duration-1000 shadow-[0_0_10px_rgba(59,130,246,0.5)]`} style={{ width: `${s.level}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative p-10 rounded-3xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-white/5 backdrop-blur-sm shadow-inner">
             <div className="absolute top-0 right-0 p-4 opacity-10 text-8xl text-blue-500">{"</>"}</div>
             <h3 className="text-2xl font-bold mb-6 text-white">Expertise</h3>
             <ul className="space-y-6 text-slate-400 font-medium">
               <li className="flex gap-4">
                 <span className="text-blue-500 font-black">01</span>
                 <span>Full-stack automation using Node.js & Python.</span>
               </li>
               <li className="flex gap-4">
                 <span className="text-blue-500 font-black">02</span>
                 <span>Micro-controller programming and IOT integration.</span>
               </li>
               <li className="flex gap-4">
                 <span className="text-blue-500 font-black">03</span>
                 <span>Premium UI/UX design with a focus on conversion.</span>
               </li>
             </ul>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="mb-40">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-4">
            <div>
              <h2 className="text-5xl font-black tracking-tighter text-white">Selected Works</h2>
              <p className="text-slate-500 mt-3 text-lg">Hardware meets Software.</p>
            </div>
            <a href="https://github.com/riviyax" className="text-blue-400 font-black tracking-widest text-xs border-b-2 border-blue-400/20 hover:border-blue-400 transition-all pb-1 uppercase">
              View All Repositories
            </a>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((p) => (
              <ProjectCard key={p.title} {...p} />
            ))}
          </div>
        </section>

        {/* PRICING */}
        <section id="price" className="mb-40 py-16 px-6 bg-blue-600/5 border border-blue-500/10 rounded-3xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black text-white">Services & Pricing</h2>
            <p className="text-slate-400 mt-2 font-medium">Professional grade solutions for any scale.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { t: "Web Dev", p: "$5", d: "Landing pages and brand sites." },
              { t: "Bots", p: "$8", d: "Custom WhatsApp/Telegram automation." },
              { t: "Apps", p: "$20", d: "Tailored business software solutions." },
              { t: "Full System", p: "$35", d: "End-to-end automation with support." }
            ].map((item) => (
              <div key={item.t} className="p-8 rounded-2xl bg-slate-900 border border-slate-800 hover:border-blue-500 transition-all hover:shadow-lg hover:shadow-blue-500/5">
                <h3 className="font-bold text-slate-300 mb-2 uppercase tracking-widest text-[10px]">{item.t}</h3>
                <div className="text-4xl font-black text-white mb-4 tracking-tight">{item.p}<span className="text-xs text-slate-500 font-normal"> Starting</span></div>
                <p className="text-sm text-slate-400 leading-relaxed">{item.d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <footer id="contact" className="py-20 text-center rounded-3xl bg-slate-800/20 border border-slate-800/50 mb-20 backdrop-blur-md">
          <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tighter text-white">Let's build something.</h2>
          <p className="text-slate-400 mb-12 text-lg max-w-md mx-auto">I'm currently taking on new projects and collaborations.</p>
          <div className="flex flex-col md:flex-row justify-center items-center gap-8">
            <a href="mailto:mrriviya@gmail.com" className="text-2xl font-bold text-white hover:text-blue-400 transition-colors">mrriviya@gmail.com</a>
            <span className="hidden md:block text-slate-700">/</span>
            <a href="https://wa.me/94773557644" className="text-2xl font-bold text-white hover:text-green-400 transition-colors">WhatsApp</a>
          </div>
        </footer>
      </div>
    </div>
  );
}