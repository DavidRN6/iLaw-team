/* ======================
  table of contents
=========================

  1. Imports
  2. Hero
  3. Who Are We
  4. What happened at CU AI Nexus 2025
*/

//==============
// 1. Imports
//==============
import { FaRobot } from "react-icons/fa6";
import Lottie from "lottie-react";
import chatAnimation from "../animation/Chat Animation.json";

const Home = () => {
  return (
    <section className="py-16">
      {/*=========
        2. Hero
      ===========*/}
      <div className="text-center lg:px-6">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight max-w-5xl mx-auto">
          A Team Driven to Simplify Law Through AI.
        </h1>

        <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
          An AI-Powered Legal Chatbot – Grand Finalist at CU AI Nexus 2025
        </p>
      </div>

      {/*===============
        3. Who Are We
      ==================*/}
      <div className="mt-24 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Who Are We?</h2>

        <div className="flex justify-between items-center flex-col lg:flex-row gap-12">
          <div className="w-full max-w-xl lg:text-left">
            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
              We are <span className="font-semibold">iLaw Team</span>, a group
              of law students from the Faculty of Law, Cairo University, driven
              by a shared vision to simplify legal knowledge through technology.
            </p>

            <p className="mt-6 text-base md:text-lg text-gray-700 leading-relaxed">
              Our team consists of{" "}
              <span className="font-semibold">
                Doaa, Heidi, Mohamed Ashraf, Mohamed El-Sayed, Ali Khedr, and
                David Raoof
              </span>
              . United by our passion for law and innovation, we aim to make
              legal information more accessible and understandable using
              artificial intelligence.
            </p>
          </div>

          <div className="w-full max-w-md">
            <Lottie
              className="h-[300px] sm:h-[375px]"
              animationData={chatAnimation}
            />
          </div>
        </div>

        <p className="mt-4 text-base md:text-lg text-gray-700 leading-relaxed">
          As part of this vision, we developed{" "}
          <span className="font-semibold">iLaw</span>, an AI-powered legal
          chatbot designed to assist with legal questions and provide clear,
          practical insights. The chatbot is currently under development and
          testing and is available as a{" "}
          <span className="font-semibold">beta version</span>.
        </p>

        <p className="mt-6 text-base md:text-lg text-gray-700 leading-relaxed">
          You can explore and experience iLaw by clicking the button below.
        </p>

        {/* CTA Button */}
        <div className="mt-8">
          <a href="https://i-law.vercel.app/" target="_blank">
            <button className="px-8 py-3 rounded-xl bg-hover text-white font-semibold transition flex items-center gap-2 mx-auto hover:bg-blue-700">
              <FaRobot className="text-lg" />
              <span>Try iLaw Beta</span>
            </button>
          </a>
        </div>
      </div>

    </section>
  );
};

export default Home;
