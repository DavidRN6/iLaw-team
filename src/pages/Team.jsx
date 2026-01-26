/* ======================
  table of contents
=========================

  1. Imports
  2. Title
  3. Team Members
*/

//==============
// 1. Imports
//==============
import { assets } from "../assets/assets";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Team = () => {
  return (
    <section className="py-16 lg:px-6">
      {/*=========
        2. Title
      ===========*/}
      <div className="text-center">
        <h1 className="text-3xl md:text-4xl font-bold leading-tight max-w-5xl mx-auto">
          Meet the iLaw Team.
        </h1>

        <p className="mt-4 mb-12 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
          A dedicated team of 5 law students from the Faculty of Law, Cairo
          University.
        </p>
      </div>

      {/*================
        3. Team Members
      ===================*/}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Heidi Ahmed */}
        <div className="group bg-transparent p-6 rounded-2xl shadow-lg border border-border text-center">
          <img
            src={assets.david}
            alt="David"
            className="w-32 h-32 rounded-full mx-auto border-4 border-white shadow-lg group-hover:scale-105 transition-transform"
          />
          <h4 className="mt-4 font-bold">David Raoof</h4>
          <div className="flex justify-center gap-4 mt-3">
            <a
              href=""
              className="text-gray-400 hover:scale-110 transition-transform text-2xl"
            >
              <FaLinkedin />
            </a>
            <a
              href="mailto:david.raoofz@gmail.com"
              className="text-gray-400 hover:scale-110 transition-transform text-2xl"
            >
              <MdEmail />
            </a>
          </div>
        </div>

        {/* Mohammed El Sayed */}
        <div className="group bg-transparent p-6 rounded-2xl shadow-lg border border-border text-center">
          <img
            src={assets.david}
            alt="David"
            className="w-32 h-32 rounded-full mx-auto border-4 border-white shadow-lg group-hover:scale-105 transition-transform"
          />
          <h4 className="mt-4 font-bold">David Raoof</h4>
          <div className="flex justify-center gap-4 mt-3">
            <a
              href=""
              className="text-gray-400 hover:scale-110 transition-transform text-2xl"
            >
              <FaLinkedin />
            </a>
            <a
              href="mailto:david.raoofz@gmail.com"
              className="text-gray-400 hover:scale-110 transition-transform text-2xl"
            >
              <MdEmail />
            </a>
          </div>
        </div>

        {/* Ali Khadr */}
        <div className="group bg-transparent p-6 rounded-2xl shadow-lg border border-border text-center">
          <img
            src={assets.david}
            alt="David"
            className="w-32 h-32 rounded-full mx-auto border-4 border-white shadow-lg group-hover:scale-105 transition-transform"
          />
          <h4 className="mt-4 font-bold">David Raoof</h4>
          <div className="flex justify-center gap-4 mt-3">
            <a
              href=""
              className="text-gray-400 hover:scale-110 transition-transform text-2xl"
            >
              <FaLinkedin />
            </a>
            <a
              href="mailto:david.raoofz@gmail.com"
              className="text-gray-400 hover:scale-110 transition-transform text-2xl"
            >
              <MdEmail />
            </a>
          </div>
        </div>

        {/* Duaa */}
        <div className="group bg-transparent p-6 rounded-2xl shadow-lg border border-border text-center">
          <img
            src={assets.david}
            alt="David"
            className="w-32 h-32 rounded-full mx-auto border-4 border-white shadow-lg group-hover:scale-105 transition-transform"
          />
          <h4 className="mt-4 font-bold">David Raoof</h4>
          <div className="flex justify-center gap-4 mt-3">
            <a
              href=""
              className="text-gray-400 hover:scale-110 transition-transform text-2xl"
            >
              <FaLinkedin />
            </a>
            <a
              href="mailto:david.raoofz@gmail.com"
              className="text-gray-400 hover:scale-110 transition-transform text-2xl"
            >
              <MdEmail />
            </a>
          </div>
        </div>

        {/* David Raoof */}
        <div className="group bg-transparent p-6 rounded-2xl shadow-lg border border-border text-center">
          <img
            src={assets.david}
            alt="David"
            className="w-32 h-32 rounded-full mx-auto border-4 border-white shadow-lg group-hover:scale-105 transition-transform"
          />
          <h4 className="mt-4 font-bold">David Raoof</h4>
          <div className="flex justify-center gap-4 mt-3">
            <a
              href="https://www.linkedin.com/in/david-raoof-08b643258/"
              target="_blank"
              className="text-gray-400 hover:scale-110 transition-transform text-2xl"
            >
              <FaLinkedin />
            </a>
            <a
              href="mailto:david.raoofz@gmail.com"
              className="text-gray-400 hover:scale-110 transition-transform text-2xl"
            >
              <MdEmail />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
