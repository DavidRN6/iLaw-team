/* ======================
  table of contents
=========================

  1. Imports
  2. What happened at CU AI Nexus 2025
  3. Text
  4. Image
  5. YouTube Video
*/

//==============
// 1. Imports
//==============
import { assets } from "../assets/assets";

const Nexus = () => {
  return (
    <section className="py-16">
      {/*======================================
        2. What happened at CU AI Nexus 2025
      =========================================*/}
      <h1 className="text-3xl md:text-4xl font-bold text-center px-4 leading-tight max-w-5xl mx-auto">
        What Happened at CU AI Nexus 2025?
      </h1>

      <div className="mt-12 lg:mt-16 lg:px-6 flex flex-col lg:flex-row items-center justify-center gap-12">
        {/*=========
          3. Text
        ============*/}
        <div className="max-w-2xl text-center lg:text-left">
          <p className="text-base md:text-lg text-gray-700 leading-relaxed">
            <span className="font-semibold">CU AI Nexus 2025</span> was an
            AI-focused event and competition dedicated to exploring how
            artificial intelligence can be utilized in real-life and
            professional fields. The event brought together students from
            different faculties to showcase innovative AI-driven ideas and
            solutions.
          </p>

          <p className="mt-4 text-base md:text-lg text-gray-700 leading-relaxed">
            As <span className="font-semibold">iLaw Team</span>, we participated
            in the competition representing our vision of integrating AI into
            the legal field. Our project,{" "}
            <span className="font-semibold">iLaw</span>, demonstrated how
            artificial intelligence can simplify legal questions and enhance
            access to legal knowledge.
          </p>

          <p className="mt-4 text-base md:text-lg text-gray-700 leading-relaxed">
            We proudly achieved{" "}
            <span className="font-semibold">
              first place in the qualification rounds
            </span>
            , competing against teams from various colleges. Although we did not
            secure the final first place, the experience provided us with
            valuable feedback, exposure, and motivation to further improve our
            project.
          </p>
        </div>

        {/*==========
          4. Image
        =============*/}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={assets.nexus}
            alt="CU AI Nexus 2025"
            className="w-full max-w-md object-cover"
          />
        </div>
      </div>

      {/*==================
        5. YouTube Video
      =====================*/}
      <p className="mt-12 text-base font-medium md:text-lg text-gray-700 leading-relaxed text-center max-w-3xl mx-auto">
        To learn more details and see what really happened at CU AI Nexus 2025,
        you can watch the video below 👇.
      </p>

      <div className="mt-8 flex justify-center">
        <div className="w-full max-w-4xl aspect-video">
          <iframe
            className="w-full h-full shadow-xl"
            src="https://www.youtube.com/embed/onSi117_H0U"
            title="iLaw - CU AI Nexus 2025"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
};

export default Nexus;
