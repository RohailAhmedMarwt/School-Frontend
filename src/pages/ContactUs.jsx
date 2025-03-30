import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import bgSchool from "../assets/images/3.jpg";
import { Mail, PhoneCall, MapPin, Clock } from "lucide-react";

const ContactInfo = ({ icon: Icon, title, content, link }) => (
  <div className="flex items-start space-x-3" data-aos="fade-up">
    <div className="bg-green-900/10 p-3 rounded-full">
      <Icon className="text-green-900 w-6 h-6" />
    </div>
    <div>
      <h3 className="font-semibold text-gray-900">{title}</h3>
      {link ? (
        <a href={link} className="text-gray-600 hover:text-green-700">
          {content}
        </a>
      ) : (
        <p className="text-gray-600">{content}</p>
      )}
    </div>
  </div>
);

const ContactUs = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
    alert("Thank you for your message. We will get back to you soon!");
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 overflow-x-hidden">

      {/* Top Banner */}
      <div
        className="relative mt-20 md:mt-32 w-full h-[300px] bg-cover bg-center flex flex-col justify-center items-start text-white"
        style={{ backgroundImage: `url(${bgSchool})` }}
      >
        <div className="absolute inset-0 bg-green-900 opacity-70 z-0"></div>
        <div className="z-10 w-full max-w-6xl mx-auto px-4">
          <h1 className="text-2xl md:text-4xl font-bold mb-1">Contact Us</h1>
          <p className="text-sm md:text-base">
            <span
              className="text-yellow-300 cursor-pointer"
              onClick={() => navigate("/")}
            >
              Home
            </span>
            <span className="text-white"> &gt; Contact Us</span>
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="w-full max-w-6xl mx-auto px-4 py-10 md:py-16">
        {/* Contact Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <ContactInfo
            icon={MapPin}
            title="Our Location"
            content="Mansehra Road, Abbottabad, KPK"
          />
          <ContactInfo
            icon={PhoneCall}
            title="Phone Number"
            content="0992-395444"
            link="tel:0992-395444"
          />
          <ContactInfo
            icon={Mail}
            title="Email Address"
            content="Pifferhs.atd@gmail.com"
            link="mailto:Pifferhs.atd@gmail.com"
          />
          <ContactInfo
            icon={Clock}
            title="Working Hours"
            content="7:00 am - 1:30 pm"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div
            className="bg-white rounded-lg shadow-md p-6"
            data-aos="fade-right"
          >
            <h2 className="text-2xl font-bold text-green-900 mb-6">
              Send us a Message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 mb-1">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-1">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>
              </div>
              <div>
                <label className="block text-gray-700 mb-1">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-1">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-1">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-green-900 text-white py-2 px-6 rounded-md hover:bg-green-800 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Google Map */}
          <div
            className="bg-white rounded-lg shadow-md p-6"
            data-aos="fade-left"
          >
            <h2 className="text-2xl font-bold text-green-900 mb-6">Find Us</h2>
            <div className="w-full h-[400px] rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3307.4425840554385!2d73.21843797621669!3d34.0019499726303!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38de3111111c97e3%3A0x1c60f0bcc86978d!2sFG%20Public%20School%20Boys%20Piffers%20Abbottabad!5e0!3m2!1sen!2s!4v1711791171599!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
