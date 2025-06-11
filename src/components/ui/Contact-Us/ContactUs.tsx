"use client";
import { useState } from "react";
import HeaderText from "@/components/HeaderText";

export default function ContactUs() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Send data to backend API here
    console.log(form);
    alert("Message sent!");
  };

  return (
    <div
      className="min-h-screen p-8 bg-cover bg-center flex flex-col items-center"
      style={{
        backgroundImage: "url('/image/banner/banner-bg.png')",
        backgroundRepeat: "no-repeat",
      }}
    >
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-md w-full max-w-xl space-y-4"
      >
        <div className="mb-6">
          <HeaderText
            text="Get in Touch"
            text2="Contact Us"
            className=" text-center"
          />
        </div>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="w-full border border-gray-300 p-3 rounded"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email (optional)"
          className="w-full border border-gray-300 p-3 rounded"
          value={form.email}
          onChange={handleChange}
        />
        <input
          type="tel"
          name="phone"
          placeholder="Your Phone-Number"
          className="w-full border border-gray-300 p-3 rounded"
          value={form.phone}
          onChange={handleChange}
          required
          pattern="[0-9]{10}"
          title="Enter a valid 10-digit phone number"
        />
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          className="w-full border border-gray-300 p-3 rounded"
          value={form.subject}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          className="w-full border border-gray-300 p-3 rounded h-32 resize-none"
          value={form.message}
          onChange={handleChange}
          required
        />
        <button
          type="submit"
          className="bg-[#88B04B] hover:bg-[#769740] text-white font-semibold py-2 px-6 rounded"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
