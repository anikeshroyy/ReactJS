import profilePic from "../assets/anikesh-profile.jpg";

const Home = () => {
  return (
    <section className="min-h-screen bg-gray-900 text-white flex flex-col-reverse lg:flex-row items-center justify-center gap-16 px-6 lg:px-20">
      {/* Left Section */}
      <div className="max-w-2xl">
        <p className="text-cyan-400 text-xl font-medium mb-3">
          👋 Hello, I'm
        </p>

        <h1 className="text-5xl md:text-7xl font-bold leading-tight">
          Anikesh <span className="text-cyan-400">Roy</span>
        </h1>

        <h2 className="text-2xl md:text-4xl font-semibold text-gray-300 mt-4">
          Full Stack Developer
        </h2>

        <p className="mt-6 text-lg text-gray-400 leading-8">
          I completed my B.Tech in Computer Science from{" "}
          <span className="text-amber-400 font-medium">
            Government Engineering College, Jamui
          </span>
          . I specialize in building modern, scalable, and responsive web
          applications using the MERN Stack. I enjoy turning ideas into
          high-performance digital products for businesses and professionals.
        </p>

        <div className="flex flex-wrap gap-5 mt-10">
          <button className="bg-cyan-500 hover:bg-cyan-400 text-black font-semibold px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-cyan-500/40">
            Contact Me
          </button>

          <a
            href="/resume.pdf"
            download
            className="bg-transparent border-2 border-cyan-500 hover:bg-cyan-500 hover:text-black font-semibold px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105"
          >
            Download Resume
          </a>
        </div>
      </div>

      {/* Right Section */}
      <div className="relative">
        <div className="absolute inset-0 rounded-full bg-cyan-500 blur-3xl opacity-25"></div>

        <img
          src={profilePic}
          alt="Anikesh Roy"
          className="relative h-72 w-72 md:h-96 md:w-96 object-cover rounded-full border-4 border-cyan-400 shadow-2xl hover:scale-105 transition duration-500"
        />
      </div>
    </section>
  );
};

export default Home;