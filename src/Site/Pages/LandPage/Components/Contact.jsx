import React, { useState } from "react";
import { BiSolidMessageDetail } from "react-icons/bi";

export default function Contact() {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", formValues.name);
    formData.append("email", formValues.email);
    formData.append("phone", formValues.phone);
    formData.append("subject", formValues.subject);
    formData.append("message", formValues.message);

    // يمكنك إرسال البيانات إلى الخادم هنا
  };

  return (
    <div className="w-full my-4 flex flex-col items-center py-40" id="contact">
      <div className="text-center mb-12 text-primary-text">
        <h2 className="text-3xl font-bold mb-4">Contact Us?</h2>
        <p className="text-lg">
          Hear directly from our clients about their experiences with our
          services. We take pride in delivering exceptional results and building
          lasting relationships. Read on to discover how we’ve made a difference
          for businesses like yours.
        </p>
      </div>
      <div className="w-[50%] m-auto flex items-center">
        <div className="w-full">
          <form onSubmit={handleSubmit}>
            <div className="flex">
              <div className="w-1/3 flex justify-center text-primaryColor">
                <BiSolidMessageDetail size={216} />
              </div>
              <div className="w-2/3">
                <div className="mb-4">
                  <label htmlFor="name" className="block text-lg font-medium">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formValues.name}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-lg font-medium">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formValues.email}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="phone" className="block text-lg font-medium">
                    Phone
                  </label>
                  <input
                    type="number"
                    id="phone"
                    name="phone"
                    value={formValues.phone}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                  />
                </div>
              </div>
            </div>
            <div className="mb-4">
              <label htmlFor="subject" className="block text-lg font-medium">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formValues.subject}
                onChange={handleChange}
                required
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-lg font-medium">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formValues.message}
                onChange={handleChange}
                required
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                rows="5"
              />
            </div>
            <button
              type="submit"
              className="w-1/4 bg-blocks-color text-primary-text p-2 rounded-md border border-primaryColor hover:text-white hover:bg-primaryColor"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
