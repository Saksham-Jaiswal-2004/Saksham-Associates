"use client"
import React, { useState, useRef } from 'react';
import emailjs from 'emailjs-com';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import ReCAPTCHA from "react-google-recaptcha";
import Link from "next/link"
import Image from 'next/image'
import { IoMdArrowBack } from "react-icons/io";

// const SITE_KEY = process.env.CAPTCHA_SITE_KEY;
const SITE_KEY = "6Lf7KUIrAAAAAAj-UyHwyHl3KtbSVutMLwB2WM3v";

const Page = () => {

  const form = useRef();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [phoneNumber, setPhoneNumber] = useState('');
  const [status, setStatus] = useState("");
  const recaptchaRef = useRef(null);
  const [captchaToken, setCaptchaToken] = useState(null);

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

    if (!captchaToken) {
      alert("Please verify reCAPTCHA first.");
      return;
    }

    // await sendEmail(e);
    // await sendEmailSelf(e);
    // await submitQuery(e);
    // await submitToGoogleSheet(e);

    // Optionally reset the form after successful submission
    handleReset();
    setCaptchaToken(null);
    recaptchaRef.current.reset();
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
    <div className='min-h-screen h-fit flex flex-col justify-center items-center'>
      <div className='lg:w-[65vw] md:w-[98vw] w-[92vw] px-6 flex justify-start'>
        <Link href={"/"} className='hover:text-[#D88E6C] flex gap-1 justify-center items-center font-light'><IoMdArrowBack /> Back to Home</Link>
      </div>
      <div className='h-fit lg:w-[65vw] md:w-[98vw] w-[95vw] mb-10 rounded-2xl flex flex-wrap p-6 border border-gray-600'>
        <div className='md:w-1/2 w-full flex justify-start items-center flex-col'>
          <h1 className='text-3xl'>LOGIN</h1>

          <form ref={form} method='POST' action="" id='contact-form' onSubmit={handleSubmit} className='flex flex-col justify-center items-center w-full bg7 md:mx-10 mx-1 my-2 rounded-xl md:p-8 p-2'>
            <div className='flex flex-col justify-start md:w-[90%] w-[95%]'>
              <div className='my-2 flex flex-col w-full bg-[#f0e9db]'>
                <PhoneInput id='phone' name="phone" defaultCountry="IN" value={phoneNumber} onChange={setPhoneNumber} international countrySelectProps={{ unicodeflagclassname: 'emoji-flag' }} className='border border-gray-600 bg-[#f0e9db] px-3 focus:outline-none rounded-[0.5rem] h-10' />
              </div>

              <div className='w-full flex justify-center items-center'>
                <h2>Or</h2>
              </div>

              <div className='my-2 flex flex-col w-full'>
                <input type="email" id='email' name="email" value={formData.email} onChange={handleChange} placeholder='Enter your Email-ID' className='border border-gray-600 px-3 focus:outline-none rounded-[0.5rem] h-10'/>
              </div>

              <div className='flex my-4 w-[100%] sm:scale-100 scale-75' style={{ transformOrigin: '0 0' }}>
                <ReCAPTCHA
                  sitekey={SITE_KEY}
                  onChange={(token) => setCaptchaToken(token)}
                  ref={recaptchaRef}
                />
              </div>

              <p className='mt-2 text-sm'>Don&apos;t have an account? <Link href="/auth/signup" className='text-[#321a0c] hover:text-[#c08b00]'>Sign-Up Here</Link></p>

              <div className='flex flex-wrap w-full justify-end gap-4 mt-4'>
                <button type='submit' disabled={!captchaToken} className='button5 w-full px-4 py-1 rounded-[0.5rem] md:text-lg text-base'>Submit</button>
                {/* <button type='reset' onClick={handleReset} className='button3 px-4 py-1 rounded-xl md:text-lg text-base'>Reset</button> */}
              </div>
            </div>
          </form>
        </div>

        <div className='md:w-1/2 w-full flex flex-col justify-start items-center md:border-l md:border-t-0 border-t md:pt-0 pt-4 border-gray-600'>
          <h1 className='sm:text-3xl text-xl md:mb-10 mb-4 text-center'>SAKSHAM ASSOCIATES</h1>

          <div className='cursor-pointer border my-2 bg-[#f0e9db] border-gray-600 w-[70%] rounded-[0.5rem] h-8 flex justify-center items-center'>
            <h2>Google</h2>
          </div>
          <div className='cursor-pointer border my-2 bg-[#f0e9db] border-gray-600 w-[70%] rounded-[0.5rem] h-8 flex justify-center items-center'>
            <h2>Apple</h2>
          </div>

          <div className="img relative rounded-[2rem] mt-6 h-[220px] md:w-[350px] w-[105%]">
            <Image
              src="/images/living-2.jpg"
              alt="SignUp Image"
              aria-label="SignUp Image"
              fill
              className="object-cover rounded-[2rem]"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page
