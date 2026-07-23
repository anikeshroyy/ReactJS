const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-gray-800 shadow-sm shadow-amber-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div>
          <img
            className="h-12 w-12 rounded-full border border-white p-1"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_DAUqPMZ1U5hoVnPUr8X1xsyHIRytRMV8QBC-0d4rkg&s=10"
            alt="Logo"
          />
        </div>

        {/* Nav Links */}
        <div className="flex items-center gap-2 md:gap-4 px-2 md:px-4 py-2 rounded-full border border-white/30 bg-white/10 backdrop-blur-md shadow-[inset_0_1px_6px_rgba(255,255,255,0.35)] text-white font-semibold text-sm md:text-base">
          <a
            href=""
            className="hover:bg-blue-500 px-3 md:px-4 py-2 rounded-full transition active:scale-95"
          >
            Home
          </a>

          <a
            href=""
            className="hover:bg-blue-500 px-3 md:px-4 py-2 rounded-full transition active:scale-95"
          >
            About
          </a>

          <a
            href=""
            className="hover:bg-blue-500 px-3 md:px-4 py-2 rounded-full transition active:scale-95"
          >
            Contact
          </a>

          <a
            href=""
            className="hover:bg-blue-500 px-3 md:px-4 py-2 rounded-full transition active:scale-95"
          >
            Login
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;