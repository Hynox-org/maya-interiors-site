"use client";

import type React from "react";

import { forwardRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Instagram, Facebook } from "lucide-react";

const Contact = forwardRef<HTMLDivElement>(function Contact(_, ref) {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    projectType: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const phoneNumber = "919840808883"; // Extracted from the contact info section
    const message = `Hello, I'm interested in your services.
Name: ${formData.name}
Mobile: ${formData.mobile}
Email: ${formData.email}
Project Type: ${formData.projectType}
Message: ${formData.message}`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");

    setFormData({
      name: "",
      mobile: "",
      email: "",
      projectType: "",
      message: "",
    });
  };

  return (
    <section ref={ref} className="w-full py-4 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-4">
          <h2 className="text-4xl md:text-5xl font-bold text-[#8BA186] mb-2">
            Livinza
          </h2>
          <p className="text-2xl font-light text-primary mb-4">
            interior for you
          </p>
          <p className="text-lg text-muted-foreground">Get in touch with our team for a personalized consultation</p>
        </div>

        <div className="grid place-items-center">
          {/* Contact Form */}
          <div className="">
            <form
              onSubmit={handleSubmit}
              className="space-y-6 bg-accent/5 p-8 rounded-lg"
            >
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                    placeholder="Full Name *"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                    placeholder="Mobile Number *"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                    placeholder="Email *"
                  />
                </div>
                <div>
                  <select
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                  >
                    <option value="">Type of Project *</option>
                    <option value="2bhk">2 BHK</option>
                    <option value="3bhk">3 BHK</option>
                    <option value="4bhk">4 BHK</option>
                    <option value="modularKitchen">Modular Kitchen</option>
                    <option value="office">Office</option>
                  </select>
                </div>
              </div>

              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                  placeholder="Message *"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-[#8BA186] hover:bg-green-800/90 text-white py-3 rounded-lg font-semibold transition-all duration-300"
              >
                Send Inquiry
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
});

export default Contact;
