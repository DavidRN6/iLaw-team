import { BsShieldLockFill } from "react-icons/bs";
import { LuSearch } from "react-icons/lu";
import { FaGraduationCap } from "react-icons/fa";
import { FaAward } from "react-icons/fa6";
import { GoLaw } from "react-icons/go";
import { IoExtensionPuzzle } from "react-icons/io5";

const Features = () => {
  return (
    <section className="py-16 lg:px-6 dark:text-navbar">
      {/*=========
        2. Title
      ============*/}
      <div className="text-center">
        <h1 className="text-3xl md:text-4xl font-bold leading-tight max-w-5xl mx-auto">
          Why iLaw and What <span className="dark:text-darkText">We Offer.</span>
        </h1>

        <p className="mt-4 mb-12 text-base md:text-lg max-w-3xl mx-auto dark:text-darkDesc">
          iLaw is committed to revolutionizing legal research with AI-driven.
          Solutions that enhance efficiency, accuracy, and accessibility for
          legal professionals.
        </p>
      </div>

      {/*=================
        3. Features List
      ====================*/}
      <div>
        {/* Feature 1 */}
        <div className="flex flex-col md:flex-row items-center gap-12 mb-16">
          <div className="md:w-1/2 md:pr-10 text-center md:text-left">
            <h3 className="text-3xl font-bold mt-2">
              Secure & Isolated AI Models
            </h3>
            <p className="mt-4 dark:text-darkDesc">
              Your data never leaves your firm. We provide a fully isolated AI
              model trained exclusively on your internal documents, guaranteeing
              absolute privacy and zero external sharing. All operations are
              performed in a secure, controlled environment, giving you complete
              ownership and protection of your data at all times.
            </p>
          </div>

          <div className="md:w-1/2 p-8 bg-blue-50 dark:bg-darkText rounded-2xl flex justify-center items-center">
            <BsShieldLockFill className="text-8xl" />
          </div>
        </div>

        {/* Feature 2 */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-12 mb-16">
          <div className="md:w-1/2 md:pr-10 text-center md:text-left">
            <h3 className="text-3xl font-bold mt-2">
              Instant Legal Drafting & Analysis
            </h3>
            <p className="mt-4 dark:text-darkDesc">
              Turn hours of research into seconds. Analyze complex cases,
              summarize documents, and generate professional legal drafts with
              high precision and customized tone. Our AI leverages advanced NLP
              to understand legal context, ensuring outputs that meet your exact
              requirements.
            </p>
          </div>

          <div className="md:w-1/2 p-8 bg-blue-50 dark:bg-darkText rounded-2xl flex justify-center items-center">
            <LuSearch className="text-8xl" />
          </div>
        </div>

        {/* Feature 3 */}
        <div className="flex flex-col md:flex-row items-center gap-12 mb-16">
          <div className="md:w-1/2 md:pr-10 text-center md:text-left">
            <h3 className="text-3xl font-bold mt-2">
              Interactive Smart Learning
            </h3>
            <p className="mt-4 dark:text-darkDesc">
              Master legal concepts with our AI-powered examination mode. Get
              instant feedback, auto-correction, and simplified explanations to
              enhance your academic performance. Our system adapts to your
              learning style, making complex legal topics easier to understand
              and retain.
            </p>
          </div>

          <div className="md:w-1/2 p-8 bg-blue-50 dark:bg-darkText rounded-2xl flex justify-center items-center">
            <FaGraduationCap className="text-8xl" />
          </div>
        </div>

        {/* Feature 4 */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-12 mb-16">
          <div className="md:w-1/2 md:pr-10 text-center md:text-left">
            <h3 className="text-3xl font-bold mt-2">The Legal Career Hub</h3>
            <p className="mt-4 dark:text-darkDesc">
              Bridging the gap between talent and opportunity. A dedicated
              marketplace for firms to post jobs and internships, and for
              students to launch their careers. Connect, apply, and grow with
              iLaw's Legal Career Hub.
            </p>
          </div>

          <div className="md:w-1/2 p-8 bg-blue-50 dark:bg-darkText rounded-2xl flex justify-center items-center">
            <FaAward className="text-8xl" />
          </div>
        </div>

        {/* Feature 5 */}
        <div className="flex flex-col md:flex-row items-center gap-12 mb-16">
          <div className="md:w-1/2 md:pr-10 text-center md:text-left">
            <h3 className="text-3xl font-bold mt-2">
              Dynamic Law Synchronization
            </h3>
            <p className="mt-4 dark:text-darkDesc">
              Eliminate the risk of outdated information. Our system
              automatically tracks and integrates new legal amendments and
              decrees, providing you with a reliable, up-to-the-minute legal
              reference at your fingertips.
            </p>
          </div>

          <div className="md:w-1/2 p-8 bg-blue-50 dark:bg-darkText rounded-2xl flex justify-center items-center">
            <GoLaw className="text-8xl" />
          </div>
        </div>

        {/* Feature 6 */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-12 mb-16">
          <div className="md:w-1/2 md:pr-10 text-center md:text-left">
            <h3 className="text-3xl font-bold mt-2">
              Student? Want to test your legal knowledge?
            </h3>
            <p className="mt-4 dark:text-darkDesc">
              iLaw includes a section dedicated to academic and knowledge-based
              exams in law, helping users strengthen their understanding and
              confidently master legal concepts through structured and practical
              assessments.
            </p>
          </div>

          <div className="md:w-1/2 p-8 bg-blue-50 dark:bg-darkText rounded-2xl flex justify-center items-center">
            <IoExtensionPuzzle className="text-8xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
