import React, { useState } from "react";

const ContactMe = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <>
      <h2 className="my-20 text-4xl text-center">Contact Me</h2>
      <div className="max-w-md mt-10 mx-auto mb-24 bg-transparent p-6 rounded-lg shadow-lg border border-purple-400">
        <form onSubmit={handleSubmit} className="space-y-4">
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
