import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactMe = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [notification, setNotification] = useState(null);
  const formRef = useRef();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_aa5z02n",
        "template_q46ywo1",
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        "MEIDJx5GE845Nx3dP"
      )
      .then(
        () => {
          setNotification("Your message has been sent successfully!");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          setNotification("Failed to send your message. Please try again.");
          console.error("Email sending failed:", error.text);
        }
      );

    setTimeout(() => {
      setNotification(null);
    }, 5000);
  };

  return (
    <div className="border-b border-neutral-900 pb-10 pt-10">
      <h2 className="text-center text-4xl font-bold">Contact Me</h2>
      {notification && (
        <div className="fixed top-10 right-10 bg-purple-600 text-white py-2 px-4 rounded shadow-lg animate-fade">
          {notification}
        </div>
      )}
      <div className="max-w-md mt-10 mx-auto mb-24 bg-neutral-800 p-6 rounded-xl shadow-md border border-purple-400">
        <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-purple-400">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
              required
              className="w-full p-2 mt-1 text-white bg-neutral-700 placeholder:text-sm rounded-md border border-neutral-600 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-purple-400">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your email"
              required
              className="w-full p-2 mt-1 text-white bg-neutral-700 placeholder:text-sm rounded-md border-neutral-600 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-purple-400">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your message"
              rows="4"
              required
              className="w-full p-2 mt-1 text-white bg-neutral-700 placeholder:text-sm rounded-md border border-neutral-600 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            ></textarea>
          </div>
          <div className="flex justify-center">
            <button
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-600 py-4 px-8 w-full sm:w-auto text-neutral-950 font-bold rounded-lg mt-7"
              type="submit"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactMe;
