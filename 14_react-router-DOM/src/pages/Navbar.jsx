const Navbar = () => {
  return (
    <div className="py-4 bg-gray-700/50 shadow-sm shadow-amber-50 fixed w-full">
      <div className="flex items-center justify-around gap-100">
        <div>
          <img
            className="h-13.5 w-13.5 rounded-full border border-white p-1"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_DAUqPMZ1U5hoVnPUr8X1xsyHIRytRMV8QBC-0d4rkg&s=10"
            alt=""
          />
        </div>
        <div className="flex items-center justify-center gap-6 px-4 py-2 rounded-full border border-white/30 bg-white/10 backdrop-blur-md shadow-[inset_0_1px_6px_rgba(255,255,255,0.35)] text-white font-semibold">
          <a
            href=""
            className=" hover:bg-blue-500 px-4 py-2 rounded-full active:scale-95"
          >
            Home
          </a>
          <a
            href=""
            className=" hover:bg-blue-500 px-4 py-2 rounded-full active:scale-95"
          >
            About
          </a>
          <a
            href=""
            className=" hover:bg-blue-500 px-4 py-2 rounded-full active:scale-95"
          >
            Contact
          </a>
          <a
            href=""
            className=" hover:bg-blue-500 px-4 py-2 rounded-full active:scale-95"
          >
            Login
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
