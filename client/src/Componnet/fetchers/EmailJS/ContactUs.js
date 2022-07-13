import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_0a919rh", "template_poaojzi", form.current, "ZWdzsRCcamhj1HENq")
      .then(
        (result) => {
              alert("The Message Sent");

          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      )
      .catch((e) => {
        console.log(e);
      });
  };
  return (
    <>
      <form ref={form} onSubmit={sendEmail}>
        <div className="col-md-6 col-sm-6">
          <input
            name="name"
            type="text"
            className="form-control"
            placeholder="Your Name"
            required
          />
        </div>
        <div className="col-md-6 col-sm-6">
          <input
            name="email"
            type="email"
            className="form-control"
            placeholder="Your Email"
            required
          />
        </div>
        <div className="col-md-12 col-sm-12">
          <textarea
            name="message"
            className="form-control"
            placeholder="Message"
            rows="6"
            required
          ></textarea>
        </div>
        <div className="col-md-offset-3 col-md-6 col-sm-offset-2 col-sm-8">
          <input
            name="submit"
            type="submit"
            className="form-control submit"
            id="submit"
            value="SEND MESSAGE"
          />
        </div>
      </form>
    </>
  );
};
export default ContactUs;
