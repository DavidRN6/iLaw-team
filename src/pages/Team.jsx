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
        {/* Heidi Elshaarawy */}
        <div className="group bg-transparent p-6 rounded-2xl shadow-lg border border-border text-center">
          <img
            loading="lazy"
            src={assets.heidi}
            alt="Heidi Elshaarawy"
            className="w-32 h-32 rounded-full mx-auto border-4 border-white shadow-lg group-hover:scale-105 transition-transform"
          />
          <h4 className="mt-4 font-bold">Heidi Elshaarawy</h4>
          <div className="flex justify-center gap-4 mt-3">
            <a
              href="https://www.linkedin.com/in/haidy-elsharawy"
              target="_blank"
              className="text-gray-400 hover:scale-110 transition-transform text-2xl"
            >
              <FaLinkedin />
            </a>
            <a
              href="mailto:Haidybusiness504@gmail.com"
              className="text-gray-400 hover:scale-110 transition-transform text-2xl"
            >
              <MdEmail />
            </a>
          </div>
        </div>

        {/* Mohammed El Sayed */}
        <div className="group bg-transparent p-6 rounded-2xl shadow-lg border border-border text-center">
          <img
            loading="lazy"
            src={assets.moo}
            alt="Mohammed El Sayed"
            className="w-32 h-32 rounded-full mx-auto border-4 border-white shadow-lg group-hover:scale-105 transition-transform"
          />
          <h4 className="mt-4 font-bold">Mohammed El Sayed</h4>
          <div className="flex justify-center gap-4 mt-3">
            <a
              href="https://www.linkedin.com/in/mohammed-elsayed-613b8a321/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              className="text-gray-400 hover:scale-110 transition-transform text-2xl"
            >
              <FaLinkedin />
            </a>
            <a
              href="mailto:moo.elsayed.gaber@gmail.com"
              className="text-gray-400 hover:scale-110 transition-transform text-2xl"
            >
              <MdEmail />
            </a>
          </div>
        </div>

        {/* Ali Khadr */}
        <div className="group bg-transparent p-6 rounded-2xl shadow-lg border border-border text-center">
          <img
            loading="lazy"
            src={assets.ali}
            alt="Ali Khadr"
            className="w-32 h-32 rounded-full mx-auto border-4 border-white shadow-lg group-hover:scale-105 transition-transform"
          />
          <h4 className="mt-4 font-bold">Ali Khadr</h4>
          <div className="flex justify-center gap-4 mt-3">
            <a
              href="https://www.linkedin.com/in/ali-ahmed-105644348"
              target="_blank"
              className="text-gray-400 hover:scale-110 transition-transform text-2xl"
            >
              <FaLinkedin />
            </a>
            <a
              href="mailto:ali.ah23th5277@gmail.com"
              className="text-gray-400 hover:scale-110 transition-transform text-2xl"
            >
              <MdEmail />
            </a>
          </div>
        </div>

        {/* Duaa */}
        <div className="group bg-transparent p-6 rounded-2xl shadow-lg border border-border text-center">
          <img
            loading="lazy"
            src={assets.duaa}
            alt="Duaa Tarek"
            className="w-32 h-32 rounded-full mx-auto border-4 border-white shadow-lg group-hover:scale-105 transition-transform"
          />
          <h4 className="mt-4 font-bold">Duaa Tarek</h4>
          <div className="flex justify-center gap-4 mt-3">
            <a
              href="https://www.linkedin.com/in/duaatarek/"
              target="_blank"
              className="text-gray-400 hover:scale-110 transition-transform text-2xl"
            >
              <FaLinkedin />
            </a>
            <a
              href="mailto:duaatarek.a@gmail.com"
              className="text-gray-400 hover:scale-110 transition-transform text-2xl"
            >
              <MdEmail />
            </a>
          </div>
        </div>

        {/* David Raoof */}
        <div className="group bg-transparent p-6 rounded-2xl shadow-lg border border-border text-center">
          <img
            loading="lazy"
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
