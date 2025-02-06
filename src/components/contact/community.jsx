import React, { useState } from "react";
import Spline from '@splinetool/react-spline';
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      "service_yfamvcu",  // Replace with your EmailJS Service ID
      "template_m6ryxpm",  // Replace with your EmailJS Template ID
      {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        message: formData.message,
      },
      "9DtqPv_wCc5L4Er2F"  // Replace with your EmailJS Public Key
    ).then(
      (response) => {
        console.log("SUCCESS!", response.status, response.text);
        alert("Message sent successfully!");
        setFormData({ firstName: "", lastName: "", email: "", message: "" });
      },
      (error) => {
        console.error("FAILED...", error);
        alert("Failed to send message. Please try again.");
      }
    );
  };

  return (
    <section className="bg-transparent">
      <div className="container px-6 py-12 mx-auto">
        <div>
          <p className="font-bold text-5xl text-purple-700">Contact us</p>
        </div>

        <div className="flex flex-row justify-center align-middle items-center">
          <div>
            <main>
              <Spline scene="https://prod.spline.design/r7TkSVnOuOX-InjO/scene.splinecode" />
            </main>
          </div>
          <div className="p-4 py-6 rounded-lg bg-transparent md:p-8 w-[50%] -ml-48 mr-32">
            <form onSubmit={handleSubmit}>
              <div className="-mx-2 md:items-center md:flex mt-8">
                <div className="flex-1 px-2">
                  <label className="block mb-2 text-md text-start text-gray-200">First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="First Name"
                    required
                    className="block w-full px-5 py-2.5 mt-2 text-purple-500 bg-transparent rounded-2xl contact-border"
                  />
                </div>

                <div className="flex-1 px-2 mt-4 md:mt-0">
                  <label className="block mb-2 text-md text-start text-gray-200">Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Last Name"
                    required
                    className="block w-full px-5 py-2.5 mt-2 text-purple-500 bg-transparent rounded-2xl contact-border"
                  />
                </div>
              </div>

              <div className="mt-4">
                <label className="block mb-2 text-md text-start text-gray-200">Email address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="user@gmail.com"
                  required
                  className="block w-full px-5 py-2.5 mt-2 text-purple-500 bg-transparent rounded-2xl contact-border"
                />
              </div>

              <div className="w-full mt-4">
                <label className="block mb-2 text-md text-start text-gray-200">Send Your Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="h-32 block w-full px-5 py-2.5 mt-2 text-purple-500 bg-transparent rounded-2xl contact-border"
                  placeholder="Message"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 mt-4 text-md font-medium tracking-wide bg-purple-700 text-white rounded-2xl"
              >
                Send message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
