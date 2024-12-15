import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactMe = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [notification, setNotification] = useState(null); // Notification for success or failure
  const formRef = useRef(); // Ref for the form element

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_aa5z02n", // Replace with your EmailJS service ID
        "template_q46ywo1", // Replace with your EmailJS template ID
        {
          from_name: formData.name, // Map to EmailJS variable {{from_name}}
          from_email: formData.email, // Map to EmailJS variable {{from_email}}
          message: formData.message, // Map to EmailJS variable {{message}}
        },
        "MEIDJx5GE845Nx3dP" // Replace with your EmailJS public key
      )
      .then(
        () => {
          setNotification("Your message has been sent successfully!"); // Success notification
          setFormData({ name: "", email: "", message: "" }); // Clear form fields
        },
        (error) => {
          setNotification("Failed to send your message. Please try again."); // Error notification
          console.error("Email sending failed:", error.text);
        }
      );

    // Hide notification after 5 seconds
    setTimeout(() => {
      setNotification(null);
    }, 5000);
  };

  return (
    <>
      <h2 className="my-20 text-4xl text-center">Contact Me</h2>

      {/* Notification Popup */}
      {notification && (
        <div className="fixed top-10 right-10 bg-purple-600 text-white py-2 px-4 rounded shadow-lg animate-fade">
          {notification}
        </div>
      )}

      <div className="max-w-md mt-10 mx-auto mb-24 bg-transparent p-6 rounded-lg shadow-lg border border-purple-400">
        <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-purple-400"
            >
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
              className="w-full p-2 mt-1 placeholder:text-sm text-neutral-900 rounded-md border border-neutral-600 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-purple-400"
            >
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
              className="w-full p-2 mt-1 text-neutral-900 placeholder:text-sm rounded-md border-neutral-600 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-purple-400"
            >
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
              className="w-full p-2 mt-1 placeholder:text-sm text-neutral-900 rounded-md border border-neutral-600 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            ></textarea>
          </div>
          <center>
            <button
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-600 py-4 w-30 lg:w-40 text-neutral-950 font-bold rounded-lg mt-7"
              type="submit"
            >
              Send
            </button>
          </center>
        </form>
      </div>
    </>
  );
};

export default ContactMe;
