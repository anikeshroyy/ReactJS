import profilePic from "../assets/anikesh-profile.jpg";

const Home = () => {
  return (
    <div className="bg-gray-900 h-screen flex items-center justify-center gap-20 flex-wrap">
      <div className="text-white w-195">
        <h1 className="text-7xl font-semibold">Full Stack Developer</h1>
        <p className="my-3 text-2xl">
          I did my Btech from{" "}
          <span className="text-amber-400">
            Government Engineering College, Jamui
          </span>{" "}
          I have experience in{" "}
          <span className="text-amber-400">MERN Stack</span> also I can build
          Website and App for Professionals and Business too!
        </p>
        <div className="flex items-center justify-start gap-6 mt-5">
          <button className="bg-blue-500 text-white font-medium px-4 py-2 rounded-lg active:scale-95 cursor-pointer">
            Contact
          </button>
          <button className="bg-green-500 text-white font-semibold px-4 py-2 rounded-lg active:scale-95 cursor-pointer">
            Download Resume
          </button>
        </div>
      </div>
      <div className="border p-1 rounded-full border-white">
        <img className="h-80 w-80 rounded-full" src={profilePic} alt="" />
      </div>
    </div>
  );
};

export default Home;
