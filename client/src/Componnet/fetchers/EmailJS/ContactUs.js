import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

 const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "gmail",
        "service_0a919rh",
        e.target,
        "ZWdzsRCcamhj1HENq"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <>
      <form ref={form} onSubmit={sendEmail}>
        <input
          name="fullname"
          type="text"
          className="form-control"
          id="fullname"
          placeholder="Full Name"
        />
        <input
          name="email"
          type="text"
          className="form-control"
          id="email"
          placeholder="Email Address"
        />
        <input
          name="submit"
          type="submit"
          className="form-control"
          id="submit"
          value="Subscribe Now"
        />
      </form>
    </>
  );
};
export default ContactUs
