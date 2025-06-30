import { useState, useRef } from "react";
import { animate, motion, useInView } from "framer-motion";

// Components
import { LoaderIcon } from "../Icons";
import { AlertBox } from "../Alert";

// Icons
import { SendIcon } from "../Icons";

// emailjs
import emailjs from "@emailjs/browser";

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
      .sendForm("service_hwqdhx6", "template_md5to4b", formRef.current, {
        publicKey: "GtqSS3XeDA5CPKVZ-",
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
          x: -300,
          opacity: 0,
        },
        animate: {
          x: 0,
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
      className="w-full text-white bg-gray rounded-2xl flex flex-col items-center gap-y-2 p-8"
    >
      <h2 className="text-2xl">Contact</h2>

      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="w-full flex flex-col gap-y-3"
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
          rows="4"
          className="border-[1px] border-white/70 outline-none rounded-sm px-2 py-1 transition-all duration-200 focus:border-secondary"
        />

        <button
          type="submit"
          disabled={sending}
          className="h-8 text-sm text-white/70 font-medium bg-secondary/70 rounded-sm cursor-pointer disabled:bg-gray-700 disabled:cursor-not-allowed"
        >
          {sending ? (
            <LoaderIcon className="animate-spin  m-auto" />
          ) : (
            <span className="w-full flex justify-center items-center gap-x-1">
              <SendIcon size={18} /> Send Message
            </span>
          )}
        </button>
      </form>
    </motion.section>
  );
};

export default Contact;
