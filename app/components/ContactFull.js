"use client"
import React, { useState, useRef } from 'react';
import emailjs from 'emailjs-com';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import ReCAPTCHA from "react-google-recaptcha";

// const SITE_KEY = process.env.CAPTCHA_SITE_KEY;
const SITE_KEY = "6Lf7KUIrAAAAAAj-UyHwyHl3KtbSVutMLwB2WM3v";

const ContactFull = () => {

  const form = useRef();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [phoneNumber, setPhoneNumber] = useState('');
  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const recaptchaRef = useRef(null);
  const [captchaToken, setCaptchaToken] = useState(null);

  // Input Fields update function
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Google Sheet Integration
  const submitToGoogleSheet = async () => {
    const data = {
      name: formData.name,
      phone: phoneNumber,
      email: formData.email,
      message: formData.message,
    };

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbzg82p47_mSJ0jdxuCuPpSwrXxMzUO4FWEoenhFl6y-Q2cFz1qFW1KeBlSeWlk27Vb6/exec",
        {
          method: "POST",
          mode: "no-cors",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        }
      );

      if (response.status === 200) {
        // success
      } else {
        // failure
      }
    } catch (error) {
      // error
    }
  };

  // Firebase Integration
  const submitQuery = async (e) => {
    e.preventDefault();

    const formDataWithPhone = { ...formData, phone: phoneNumber };

    try {
      const res = await fetch("/api/saveContact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formDataWithPhone),
      });

      if (res.ok) {
        setFormData({ name: "", email: "", message: "" });
        setPhoneNumber("");
      }
    } catch (error) {
      console.error(error);
    }
  };

  // Email.js Integration
  const sendEmail = async (e) => {
    e.preventDefault();

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID,
      );

      setStatus("success");
    } catch (error) {
      console.error("Failed to send email:", error);
      setStatus("error");
    }
  };

  // Email.js Integration (Self)
  const sendEmailSelf = async (e) => {
    e.preventDefault();

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID_2,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID_2,
        form.current,
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID_2,
      );

      setStatus("success");
    } catch (error) {
      console.error("Failed to send email:", error);
      setStatus("error");
    }
  };

  // Handling Submit functions
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!captchaToken) {
      alert("Please verify reCAPTCHA first.");
      return;
    }

    setIsSubmitting(true);
    setStatus("");

    try {
      await sendEmail(e);
      await sendEmailSelf(e);
      await submitQuery(e);
      await submitToGoogleSheet(e);
      setStatus("success");
    } catch (err) {
      setStatus("error");
    }

    handleReset();
    setCaptchaToken(null);
    recaptchaRef.current.reset();
    setIsSubmitting(false);
  };

  // Handling Reset option
  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      message: ''
    });

    setPhoneNumber('');
    setCaptchaToken(null);
    recaptchaRef.current.reset();
  };

  return (
    <div className="w-full" id="contact">

      {/* Form Header */}
      <div className="mb-8 flex flex-col gap-2">
        <span className="text-[#D88E6C] text-[10px] md:text-xs tracking-[0.3em] uppercase font-sans font-semibold">
          Private Inquiry
        </span>
        <h3 className="editorial-title text-2xl md:text-3xl text-white font-light leading-tight">
          Let&apos;s Get Connected
        </h3>
        <div className="w-12 h-[1px] bg-[#C08B00] mt-1" />
      </div>

      {/* Contact Form */}
      <form ref={form} method="POST" onSubmit={handleSubmit} className="flex flex-col gap-6">

        {/* Name Field */}
        <div className="flex flex-col gap-1.5">
          <label htmlFor="name" className="text-[10px] font-sans tracking-[0.2em] uppercase text-stone-400">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            className="bg-transparent border-b border-stone-600/50 focus:border-[#C08B00] text-white py-2.5 text-sm font-sans placeholder-stone-500 transition-colors duration-300 focus:outline-none"
            required
          />
        </div>

        {/* Phone Field */}
        <div className="flex flex-col gap-1.5">
          <label htmlFor="phone" className="text-[10px] font-sans tracking-[0.2em] uppercase text-stone-400">
            Phone Number
          </label>
          <PhoneInput
            id="phone"
            name="phone"
            defaultCountry="IN"
            value={phoneNumber}
            onChange={setPhoneNumber}
            international
            countrySelectProps={{ unicodeflagclassname: 'emoji-flag' }}
            className="bg-transparent border-b border-stone-600/50 focus-within:border-[#C08B00] text-white py-2.5 text-sm font-sans placeholder-stone-500 transition-colors duration-300"
          />
        </div>

        {/* Email Field */}
        <div className="flex flex-col gap-1.5">
          <label htmlFor="email" className="text-[10px] font-sans tracking-[0.2em] uppercase text-stone-400">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            className="bg-transparent border-b border-stone-600/50 focus:border-[#C08B00] text-white py-2.5 text-sm font-sans placeholder-stone-500 transition-colors duration-300 focus:outline-none"
            required
          />
        </div>

        {/* Query / Message Field */}
        <div className="flex flex-col gap-1.5">
          <label htmlFor="message" className="text-[10px] font-sans tracking-[0.2em] uppercase text-stone-400">
            Project Brief
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us about your vision..."
            className="bg-transparent border-b border-stone-600/50 focus:border-[#C08B00] text-white py-2.5 text-sm font-sans placeholder-stone-500 transition-colors duration-300 focus:outline-none min-h-[100px] resize-none"
            required
          />
        </div>

        {/* reCAPTCHA */}
        <div className="flex my-2 w-full sm:scale-100 scale-[0.82]" style={{ transformOrigin: '0 0' }}>
          <ReCAPTCHA
            sitekey={SITE_KEY}
            onChange={(token) => setCaptchaToken(token)}
            ref={recaptchaRef}
            theme="dark"
          />
        </div>

        {/* Status Message */}
        {status === "success" && (
          <div className="flex items-center gap-2 text-sm font-sans text-emerald-400">
            <span>✓</span>
            <span>Your inquiry has been sent successfully. We&apos;ll be in touch shortly.</span>
          </div>
        )}
        {status === "error" && (
          <div className="flex items-center gap-2 text-sm font-sans text-red-400">
            <span>✗</span>
            <span>Something went wrong. Please try again or contact us directly.</span>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-4 mt-2">
          <button
            type="submit"
            disabled={!captchaToken || isSubmitting}
            className="luxury-btn luxury-btn-dark py-3 px-8 text-[10px] md:text-xs tracking-[0.2em] uppercase font-sans font-semibold rounded-none transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-transparent"
          >
            <span>{isSubmitting ? 'Sending...' : 'Submit Inquiry'}</span>
          </button>
          <button
            type="reset"
            onClick={handleReset}
            className="py-3 px-6 text-[10px] md:text-xs tracking-[0.2em] uppercase font-sans text-stone-400 hover:text-[#D88E6C] border border-stone-700 hover:border-[#D88E6C] transition-all duration-300 rounded-none"
          >
            Reset
          </button>
        </div>

      </form>
    </div>
  )
}

export default ContactFull
