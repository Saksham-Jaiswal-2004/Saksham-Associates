"use client"
import React, { useState, useRef } from 'react';
import emailjs from 'emailjs-com';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const ContactFull = () => {

  const form = useRef();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [phoneNumber, setPhoneNumber] = useState('');
  const [status, setStatus] = useState("");

  // Input Fields upadte function
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

    // console.log(data);
  
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
        // alert("Form submitted successfully!");
      } else {
        // alert("Failed to submit the form to Google Sheets.");
      }
    } catch (error) {
      // console.error("Google Sheet Error:", error);
      // alert("Error submitting the form.");
    }
  };

  // Firebase Integration
  const submitQuery = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    const formDataWithPhone = { ...formData, phone: phoneNumber };

    try {
      const res = await fetch("/api/saveContact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formDataWithPhone),
      });

      if (res.ok) {
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
        setPhoneNumber("");
      } else {
        alert("Failed to send message!");
      }
    } catch (error) {
      alert("Error occurred while sending the message!");
      console.error(error);
    }
  };

  // Email.js Integration
  const sendEmail = async (e) => {
    e.preventDefault(); // Prevent the default form submission

    try {
      // Sending email using EmailJS without storing the result
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID,
      );

      setStatus("Email sent successfully!");
    } catch (error) {
      console.error("Failed to send email:", error);
      setStatus("Failed to send email. Please try again later.");
    }
  };

  // Email.js Integration
  const sendEmailSelf = async (e) => {
    e.preventDefault(); // Prevent the default form submission

    try {
      // Sending email using EmailJS without storing the result
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID_2,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID_2,
        form.current,
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID_2,
      );

      setStatus("Email sent successfully!");
    } catch (error) {
      console.error("Failed to send email:", error);
      setStatus("Failed to send email. Please try again later.");
    }
  };

  // Handling Submit functions
  const handleSubmit = async (e) => {
    e.preventDefault();

    await sendEmail(e);  // Call the email sending function
    await sendEmailSelf(e);  // Call the email sending function
    await submitQuery(e); // Call the submission function
    await submitToGoogleSheet(e); // Call the Google Sheet Submission function

    // Optionally reset the form after successful submission
    handleReset();
  };

  // Handling Reset option
  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      message: ''
    });

    setPhoneNumber('');
  };

  return (
    <div className='h-fit my-10' id='contact'>
      {/* Title */}
      <div className='w-full flex justify-start'>
        <h1 className='md:text-6xl text-4xl my-14 head'>Let’s Bring Your Dream Space to Life</h1>
      </div>

      {/* Text */}
      <div className='flex flex-wrap md:flex-row flex-col-reverse justify-center md:items-start items-center'>
        <div className=' h-full md:w-1/2 w-[90%] md:px-10 md:py-4 p-2 md:text-lg text-base'>
          <p>We’re passionate about transforming ideas into stunning, functional spaces. Whether you’re looking to revamp a single room or reimagine an entire property, we’re here to help. Let’s start the journey to creating your perfect space—together.</p>
          <p className='my-2'>Ready to transform your space? <span className='text-[#c08b00]'>Call us today to schedule a personalized consultation</span> and let’s bring your vision to life!</p>

          <div className='flex justify-start items-center mt-4'>
            <FaPhoneAlt /> - +91-9038415889/ +91-9831793459
          </div>

          <div className='flex justify-start items-center mb-4'>
            <a href="mailto:admin@sakshamassociates.in" className='flex justify-center items-center gap-1 text-[#4e4e4e] hover:text-[#333333]'>
              <MdEmail /> - admin@sakshamassociates.in
            </a>
          </div>

          <div className="md:h-[400px] h-[250px] w-[100%]">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.123537323811!2d88.40561997475828!3d22.611861531531254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0275734d5646c5%3A0x97e04385c0935033!2sSaksham%20Associates!5e0!3m2!1sen!2sin!4v1738569730935!5m2!1sen!2sin" 
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        {/* Contact Form */}
        <div className='md:w-1/2 w-[95%] flex flex-col justify-center items-center'>
          <form ref={form} method='POST' action="" id='contact-form' onSubmit={handleSubmit} className='flex flex-col justify-center items-center md:w-4/5 w-full bg5 md:mx-10 mx-1 my-2 rounded-xl md:p-8 p-2'>
            <div>
              <h1 className='text-3xl my-4'>Let's Get Connected</h1>
            </div>

            <div className='flex flex-col justify-start md:w-[65%] w-[80%]'>

              <div className='my-5 flex flex-col w-full'>
                <label htmlFor="name" className='text-lg py-1 head3'>Name</label>
                <input type="text" id='name' name='name' value={formData.name} onChange={handleChange} placeholder='Enter your name' className='focus:outline-none focus:border-b' required/>
              </div>

              <div className='my-5 flex flex-col w-full'>
                <label htmlFor="phone" className='text-lg py-1 head3'>Phone</label>
                <PhoneInput id='phone' name="phone" defaultCountry="IN" value={phoneNumber} onChange={setPhoneNumber} international countrySelectProps={{ unicodeflagclassname: 'emoji-flag' }} className='focus:outline-none focus:border-b'/>
              </div>

              <div className='my-5 flex flex-col w-full'>
                <label htmlFor="email" className='text-lg py-1 head3'>Email</label>
                <input type="email" id='email' name="email" value={formData.email} onChange={handleChange} placeholder='Enter your email-id' className='focus:outline-none focus:border-b' required/>
              </div>

              <div className='my-5 flex flex-col w-full'>
                <label htmlFor="query" className='text-lg py-1 head3'>Query</label>
                <textarea id='message' name="message" value={formData.message} onChange={handleChange} placeholder='Enter your queries...' className='focus:outline-none focus:border-b' required></textarea>
              </div>

              <div className='flex flex-wrap w-full justify-end gap-4'>
                <button type='submit' className='button3 px-4 py-1 rounded-xl md:text-lg text-base'>Submit</button>
                <button type='reset' onClick={handleReset} className='button3 px-4 py-1 rounded-xl md:text-lg text-base'>Reset</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ContactFull
