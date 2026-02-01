/* ======================
  table of contents
=========================

  1. Imports
  2. Title
  3. Contact Head
  4. Form
*/

//==============
// 1. Imports
//==============
import successAnimation from "../animation/done.json";
import { useForm, ValidationError } from "@formspree/react";
import Lottie from "lottie-react";

const Contact = () => {
  const [state, handleSubmit] = useForm("mjgrgbwv");

  return (
    <section className="py-16 lg:px-6">
      {/*=========
        2. Title
      ============*/}
      <div className="text-center">
        <h1 className="text-3xl md:text-4xl font-bold leading-tight max-w-5xl mx-auto dark:text-navbar">
          Get in Touch with the{" "}
          <span className="dark:text-darkText">iLaw Team.</span>
        </h1>

        <p className="mt-4 mb-12 text-base md:text-lg dark:text-darkDesc max-w-3xl mx-auto">
          Interested in legal technology, AI solutions, or collaboration?
          Contact us and let’s discuss how we can work together.
        </p>
      </div>

      {/*=================
        3. Contact Head
      ====================*/}
      <div className="max-w-2xl mx-auto bg-transparent p-8 rounded-2xl shadow-lg border border-border dark:border-darkText">
        <h3 className="text-xl font-bold mb-2 text-center dark:text-navbar">
          Contact the Team
        </h3>
        <p className="mb-6 text-center dark:text-darkDesc">
          For direct inquiries:
        </p>
        {/*==========
          4. Form
        =============*/}
        <form className="grid gap-4" onSubmit={handleSubmit}>
          {/* Name */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium mb-1 dark:text-navbar"
            >
              <span>Your Name</span>
            </label>
            <input
              name="name"
              type="text"
              required
              className="w-full border border-border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200
              dark:bg-secondary dark:border-darkDesc dark:text-darkDesc dark:focus:ring-1 dark:focus:ring-darkDesc"
            />
            <ValidationError prefix="Name" field="name" errors={state.errors} />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium mb-1 dark:text-navbar"
            >
              <span>Your Email</span>
            </label>
            <input
              name="email"
              type="email"
              required
              className="w-full border border-border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200
              dark:bg-secondary dark:border-darkDesc dark:text-darkDesc dark:focus:ring-1 dark:focus:ring-darkDesc"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>

          {/* Message */}
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium mb-1 dark:text-navbar"
            >
              <span>Message</span>
            </label>
            <textarea
              name="message"
              type="text"
              rows={5}
              required
              className="w-full border border-border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200
              dark:bg-secondary dark:border-darkDesc dark:text-darkDesc dark:focus:ring-1 dark:focus:ring-darkDesc"
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              disabled={state.submitting}
              className="w-full bg-blue-600 text-white py-3 font-medium rounded-lg hover:bg-blue-700 transition-all duration-200 dark:bg-darkText dark:hover:bg-opacity-90"
            >
              {state.submitting ? "Sending..." : "Send Message"}
            </button>
          </div>
          {state.succeeded && (
            <p className="mt-4 text-green-600 font-medium flex items-center justify-center">
              <Lottie
                loop={false}
                className="inline-block w-8 h-8 mr-2"
                animationData={successAnimation}
              />
              Your message has been sent successfully
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;
