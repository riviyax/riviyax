export default function Nav({ theme, setTheme }) {
  return (
    <nav className="flex items-center justify-between py-4">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-indigo-600 flex items-center justify-center font-bold">
          <img
            className="rounded-full"
            src="https://avatars.githubusercontent.com/u/171820349?s=400&u=95b0f3989c49473b8a955987b030306a52db66ca&v=4"
            alt="logo"
          />
        </div>
        <div>
          <div className="text-lg font-semibold">Riviya_X</div>
          <div className="text-xs text-gray-400">15 y/o • Dev</div>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <a href="#about" className="text-sm hover:text-blue-400">
          About
        </a>
        <a href="#skills" className="text-sm hover:text-blue-400">
          Skills
        </a>
        <a href="#price" className="text-sm hover:text-blue-400">
          Pricing
        </a>
        <a href="#projects" className="text-sm hover:text-blue-400">
          Projects
        </a>
        <a href="#contact" className="text-sm hover:text-blue-400">
          Conatct
        </a>

        <button className="ml-4 p-2 rounded -mr-5 bg-gray-800 text-sm flex items-center justify-center">
          <a href="https://github.com/riviyax">
            <img
              className="rounded-full w-5.5"
              src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png"
            ></img>
          </a>
        </button>
      </div>
    </nav>
  );
}
