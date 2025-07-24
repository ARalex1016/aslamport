import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

// Components
import { LoaderIcon } from "../Icons";
import { AlertBox } from "../Alert";

// Icons
import { SendIcon } from "../Icons";

// emailjs
import emailjs from "@emailjs/browser";

const serviceId = import.meta.env.VITE_API_EMAILJS_SERVICE_ID;
const templateId = import.meta.env.VITE_API_EMAILJS_TEMPLATE_ID;
const publicId = import.meta.env.VITE_API_EMAILJS_PUBLIC_ID;

const Contact = () => {
  const contactRef = useRef(null);

  const isInView = useInView(contactRef, {
    once: true,
  });

  const initialData = {
    name: "",
    email: "",
    message: "",
  };

  const [formData, setFormData] = useState(initialData);
  const [sending, setSending] = useState(false);

  const formRef = useRef();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const sendEmail = () => {
    setSending(true);

    emailjs
      .sendForm(serviceId, templateId, formRef.current, {
        publicKey: publicId,
      })
      .then(
        (result) => {
          AlertBox({
            title: "Successful!",
            text: "Your Message was sent successfully",
            icon: "success",
          });

          setFormData(initialData);
        },
        (error) => {
          AlertBox({
            title: "Sending Error!",
            text: error.text || "Something went wrong, Try again later",
            icon: "error",
          });
        }
      )
      .finally(() => {
        setSending(false);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    sendEmail();
  };

  return (
    <motion.section
      ref={contactRef}
      variants={{
        initial: {
          // x: -300,
          y: 80,
          opacity: 0,
        },
        animate: {
          // x: 0,
          y: 0,
          opacity: 1,
        },
      }}
      initial="initial"
      animate={isInView ? "animate" : "initial"}
      transition={{
        duration: 1,
        ease: "linear",
      }}
      id="contact"
      className="w-full max-w-[400px] text-white bg-gray rounded-2xl flex flex-col gap-y-2 p-8 m-auto"
    >
      <h2 className="text-white text-2xl text-center">Contact</h2>

      <p className="text-xs text-white/60">
        Feel free to react out if you'd like to collaborate!
      </p>

      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="w-full flex flex-col gap-y-4"
      >
        <input
          type="text"
          name="name"
          placeholder="Name"
          required
          value={formData.name}
          onChange={handleChange}
          autoComplete="off"
          className="text-base border-[1px] border-white/70 outline-none rounded-sm px-2 py-1 transition-all duration-200 focus:border-secondary"
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          value={formData.email}
          onChange={handleChange}
          autoComplete="off"
          className="border-[1px] border-white/70 outline-none rounded-sm px-2 py-1 transition-all duration-200 focus:border-secondary"
        />

        <textarea
          name="message"
          placeholder="Type your message here..."
          required
          value={formData.message}
          onChange={handleChange}
          autoComplete="off"
          rows="5"
          className="min-h-[7.5rem] max-h-[15rem] border-[1px] border-white/70 outline-none rounded-sm px-2 py-1 transition-all duration-200 focus:border-secondary"
        />

        <motion.button
          initial={{
            x: 0,
            y: 0,
          }}
          whileHover={{
            x: "1px",
            y: "-2px",

            transition: {
              duration: 0.3,
              ease: "easeInOut",
            },
          }}
          type="submit"
          disabled={sending}
          className="h-8 text-sm text-white font-medium bg-secondary/70 rounded-sm cursor-pointer disabled:bg-gray-700 disabled:cursor-not-allowed hover:shadow hover:shadow-white/40"
        >
          {sending ? (
            <LoaderIcon className="animate-spin  m-auto" />
          ) : (
            <span className="w-full flex justify-center items-center gap-x-1">
              <SendIcon size={18} /> Send Message
            </span>
          )}
        </motion.button>
      </form>
    </motion.section>
  );
};

export default Contact;
