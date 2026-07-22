const About = () => {
  return (
    <section className="bg-gray-900 min-h-screen flex items-center justify-center px-6">
      <div className="max-w-4xl text-center text-white">
        <h1 className="text-5xl md:text-7xl font-bold mb-8">About Me</h1>

        <p className="text-lg md:text-xl leading-9 text-gray-300">
          I'm <span className="text-amber-400 font-semibold">Anikesh Roy</span>,
          a Full Stack Developer passionate about building fast, scalable, and
          user-friendly web applications. I enjoy turning ideas into real-world
          products using{" "}
          <span className="text-amber-400">
            React, Node.js, Express, MongoDB, and JavaScript
          </span>
          . I'm always learning, solving problems, and exploring new
          technologies to create impactful digital experiences.
        </p>
      </div>
    </section>
  );
};

export default About;