import { useRef, useState } from "react";
import { FaRocket } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { motion, AnimatePresence } from "framer-motion";

function ContactForm() {
  const form = useRef();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const sendEmail = (e: any) => {
    e.preventDefault();
    setIsSending(true);

    // simulate the local dev

    if (process.env.NODE_ENV === "development") {
      console.log("Mock email sending...");
      setTimeout(() => {
        console.log("Mock email sent successfully!");
        setIsSubmitted(true);
        setIsSending(false);
      }, 2000);
      return;
    }

    emailjs
      .sendForm(
        // @ts-expect-error suppress tyoe incompatible warning
        process.env.NEXT_PUBLIC_EMAIL_JS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAIL_JS_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setTimeout(() => setIsSubmitted(true), 1000); // Simulate delay
        },
        (error) => {
          console.error("Email sending failed:", error);
        }
      )
      .finally(() => {
        setTimeout(() => setIsSending(false), 2000); // Wait for release animation
      });

    e.target.reset();
  };

  const handleReturn = () => {
    setIsSubmitted(false);
  };

  return (
    <>
      <div className="relative">
        <AnimatePresence>
          {isSending && (
            <motion.div
              className="absolute inset-0 bg-black bg-opacity-50 z-10 flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                initial={{ x: -200, y: 200, rotate: -45 }}
                animate={{ x: 0, y: 0, rotate: 0 }}
                transition={{
                  duration: 1,
                  ease: "easeOut",
                }}
                exit={{ x: 200, y: -200, opacity: 0 }}
                className="text-6xl text-green-500"
              >
                <FaRocket />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {!isSubmitted ? (
          <form
            // @ts-expect-error suppress the warning on ref type
            ref={form}
            onSubmit={sendEmail}
            className="min-h-fit w-full flex flex-col gap-4 relative"
          >
            <div className="w-full min-h-fit flex flex-col gap-4 md:flex-row md:gap-2">
              <motion.input
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: [0, 0.8, 1], x: 0 }}
                transition={{
                  duration: 0.6,
                  ease: "easeInOut",
                  delay: 0.4,
                  type: "spring",
                }}
                type="text"
                name="user_name"
                placeholder="Full Name"
                className="bg-dark-cards_200 rounded-xl text-sm text-white p-4 h-14 w-full lg:w-1/2"
                required
              />
              <motion.input
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: [0, 0.8, 1], x: 0 }}
                transition={{
                  duration: 0.6,
                  ease: "easeInOut",
                  delay: 0.5,
                  type: "spring",
                }}
                type="email"
                name="user_email"
                placeholder="Email"
                className="bg-dark-cards_200 rounded-xl text-sm text-white p-4 h-14 w-full lg:w-1/2"
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
              />
            </div>
            <motion.textarea
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: [0, 0.8, 1], x: 0 }}
              transition={{
                duration: 0.6,
                ease: "easeInOut",
                delay: 0.6,
                type: "spring",
              }}
              className="textarea rounded-2xl text-white h-40 text-md bg-dark-cards_200"
              name="message"
              placeholder="Message"
              required
            />
            <motion.button
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: [0, 0.8, 1], x: 0 }}
              transition={{
                duration: 0.6,
                ease: "easeInOut",
                delay: 0.7,
                type: "spring",
              }}
              type="submit"
              value="Send"
              className="btn bg-green-700 text-white hover:bg-hover_btn hover:text-white rounded-2xl"
              disabled={isSending}
            >
              Send Message
            </motion.button>
          </form>
        ) : (
          <motion.div
            className="w-full min-h-fit flex flex-col gap-4 p-4  rounded-3xl items-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 1,
              delay: 0.5,
              ease: "easeOut",
            }}
          >
            <h1 className="font-bold text-green-400 text-4xl">
              You&apos;re Awesome! 🚀
            </h1>
            <p className="text-md lg:text-lg text-center text-gray-200">
              Thanks for reaching out! Your message is now flying to us at light
              speed. We&apos;ll get back to you soon—stay tuned! ✨
            </p>
            <button
              onClick={handleReturn}
              className="btn bg-green-600 text-gray-300 hover:bg-hover_btn hover:text-gray-300 rounded-2xl"
            >
              Go Back to Form
            </button>
          </motion.div>
        )}
      </div>
    </>
  );
}

export default ContactForm;
