import { Phone, Mail, MapPinned } from "lucide-react";
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Contact = () => {
  return (
    <section className="bg-gray-900 text-white min-h-screen py-16 px-6">
      <h1 className="text-5xl md:text-7xl font-bold text-center mb-12">Contact Me</h1>

      <div className="max-w-6xl mx-auto bg-gray-800 rounded-2xl shadow-xl p-8 lg:p-10 flex flex-col lg:flex-row gap-12">
        {/* Left Section */}
        <div className="flex-1">
          <div className="overflow-hidden rounded-xl border border-cyan-500">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d457704.28092111973!2d85.89866638183594!3d26.332499225449443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ee61acd21c3239%3A0x9de80ecf0fa10ff8!2sRoy%20Jii%20House%20(Anikesh%20Roy)!5e0!3m2!1sen!2sin!4v1784776775333!5m2!1sen!2sin"
              width="100%"
              height="320"
              loading="lazy"
              allowFullScreen
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </div>

          <div className="mt-8 space-y-5">
            <div className="flex items-center gap-3">
              <Phone className="text-cyan-400" />
              <p>+91 8292663951</p>
            </div>

            <div className="flex items-center gap-3">
              <Mail className="text-cyan-400" />
              <p>royy.anikesh@gmail.com</p>
            </div>

            <div className="flex items-center gap-3">
              <MapPinned className="text-cyan-400" />
              <p>Madhubani, Bihar - 847409</p>
            </div>

            <div className="pt-2">
              <h2 className="text-xl font-semibold mb-2">Connect With Me</h2>

              <div className="flex gap-6 text-2xl">
                <a
                  href="https://github.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-300 hover:scale-110 transition-all duration-300"
                >
                  <FaGithub />
                </a>

                <a
                  href="https://linkedin.com/in/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-500 hover:scale-110 transition-all duration-300"
                >
                  <FaLinkedin />
                </a>

                <a
                  href="https://instagram.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-pink-500 hover:scale-110 transition-all duration-300"
                >
                  <FaInstagram />
                </a>

                <a
                  href="https://x.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white hover:scale-110 transition-all duration-300"
                >
                  <FaXTwitter />
                </a>

                <a
                  href="https://facebook.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-600 hover:scale-110 transition-all duration-300"
                >
                  <FaFacebook />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex-1">
          <h2 className="text-4xl font-bold mb-8">Get in Touch</h2>

          <form className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <input
                type="text"
                placeholder="First Name"
                className="bg-gray-900 border border-cyan-500 rounded-lg px-4 py-3 outline-none placeholder:text-gray-500 focus:border-cyan-300 transition"
              />

              <input
                type="text"
                placeholder="Last Name"
                className="bg-gray-900 border border-cyan-500 rounded-lg px-4 py-3 outline-none placeholder:text-gray-500 focus:border-cyan-300 transition"
              />
            </div>

            <input
              type="email"
              placeholder="Email Address"
              className="w-full bg-gray-900 border border-cyan-500 rounded-lg px-4 py-3 outline-none placeholder:text-gray-500 focus:border-cyan-300 transition"
            />

            <input
              type="text"
              placeholder="Subject"
              className="w-full bg-gray-900 border border-cyan-500 rounded-lg px-4 py-3 outline-none placeholder:text-gray-500 focus:border-cyan-300 transition"
            />

            <textarea
              rows={5}
              placeholder="Drop Your Message..."
              className="w-full bg-gray-900 border border-cyan-500 rounded-lg px-4 py-3 outline-none placeholder:text-gray-500 focus:border-cyan-300 resize-none transition"
            />

            <label className="flex items-start gap-3 text-sm text-gray-300">
              <input type="checkbox" className="mt-1 accent-cyan-500" />
              <span>
                I've read and agree to the{" "}
                <a href="#" className="text-cyan-400 hover:underline">
                  Terms
                </a>{" "}
                &{" "}
                <a href="#" className="text-cyan-400 hover:underline">
                  Privacy Policy
                </a>
              </span>
            </label>

            <button
              type="submit"
              className="w-full bg-cyan-500 text-black font-semibold py-3 rounded-lg hover:bg-cyan-400 hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
