import React from "react";
import Footer from "../components/Footer";

function Contact() {
  return (
    <>
      <div className="container mx-auto px-6 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800">Contact Us</h1>
          <p className="text-gray-600 mt-4">
            Get in touch with us for any inquiries or support!
          </p>
        </div>

        {/* Contact Info Cards in First Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {/* Phone Card */}
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <h3 className="text-lg font-semibold mb-2">Phone</h3>
            <p className="text-gray-700">+123-456-7890</p>
          </div>
          {/* Email Card */}
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <h3 className="text-lg font-semibold mb-2">Email</h3>
            <p className="text-gray-700">contact@learningplatform.com</p>
          </div>
          {/* Address Card */}
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <h3 className="text-lg font-semibold mb-2">Address</h3>
            <p className="text-gray-700">
              123 Learning Ave, Knowledge City, 12345
            </p>
          </div>
          {/* Website Card */}
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <h3 className="text-lg font-semibold mb-2">Website</h3>
            <p className="text-gray-700">www.learningplatform.com</p>
          </div>
        </div>

        {/* Google Map and Contact Form in Second Row */}
        <div className="lg:flex lg:gap-12">
          {/* Google Map on the Left */}
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <iframe
              title="Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d211749.5315637581!2d71.40065908385873!3d33.97746792656139!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38d917b90f0e79cf%3A0xa816b2637558a412!2sPeshawar%2C%20Khyber%20Pakhtunkhwa%2C%20Pakistan!5e0!3m2!1sen!2s!4v1731406137531!5m2!1sen!2s"
              width="100%"
              height="100%"
              className="rounded-lg shadow-lg"
              allowFullScreen=""
              loading="lazy"
              style={{ height: "600px" }}
            ></iframe>
          </div>

          {/* Contact Form on the Right */}
          <div className="lg:w-1/2">
            <div className="bg-white shadow-lg rounded-lg p-8">
              <h2 className="text-2xl font-semibold mb-6">Send Us a Message</h2>
              <form className="space-y-4">
                <div>
                  <label className="block text-gray-700 mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Your email"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Phone</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Your phone number"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Message</label>
                  <textarea
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    rows="4"
                    placeholder="Your message"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-200"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Contact;