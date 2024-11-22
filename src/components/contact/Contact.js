import React, { useState } from "react";
import emailjs from "emailjs-com";
import Title from "../layouts/Title";
import ContactLeft from "./ContactLeft";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  // Email Validation
  const emailValidation = () => {
    return String(form.email).toLowerCase();
    // .match(/^\w+([-]?\w+)@\w+([-]?\w+)(\\w{2,3})+$/);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    if (form.name === "") {
      setErrMsg("Username is required!");
      setLoading(false);
    } else if (form.email === "") {
      setErrMsg("Please provide your Email!");
      setLoading(false);
    } else if (!emailValidation()) {
      setErrMsg("Please provide a valid Email!");
      setLoading(false);
    } else if (form.message === "") {
      setErrMsg("Message is required!");
      setLoading(false);
    } else {
      setErrMsg("");
      setSuccessMsg(
        `Thank you, ${form.name}, your message has been sent successfully!`
      );
      

      emailjs
        .send(
          "service_lpkebwj", // ServiceID
          "template_8yr7fse", // TemplateID
          {
            from_name: form.name,
            to_name: "Adam", // Fixed recipient name
            from_email: form.email,
            to_email: "adamcodebox@gmail.com", // Fixed recipient email
            message: form.message,
          },
          "Fyl5cuZte3VAl1RJi" // Public Key
        )
        .then(
          () => {
            setLoading(false);
            alert("Thank you. I will get back to you as soon as possible.");
            setForm({
              name: "",
              email: "",
              message: "",
            });
          },
          (error) => {
            setLoading(false);
            console.error("Failed...", error);
            alert("Something went wrong. Please try again.");
          }
        );
    }
  };

  return (
    <section
      id="contact"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title title="CONTACT" des="Contact With Me" />
      </div>
      <div className="w-full">
        <div className="w-full h-auto flex flex-col lgl:flex-row justify-between">
          <ContactLeft />
          <div className="w-full lgl:w-[60%] h-full py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] flex flex-col gap-8 p-4 lgl:p-8 rounded-lg shadow-shadowOne">
            <form
              className="w-full flex flex-col gap-4 lgl:gap-6 py-2 lgl:py-5"
              onSubmit={handleSubmit}
            >
              {errMsg && (
                <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-orange-500 text-base tracking-wide animate-bounce">
                  {errMsg}
                </p>
              )}
              {successMsg && (
                <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-green-500 text-base tracking-wide animate-bounce">
                  {successMsg}
                </p>
              )}
              <div className="flex flex-col gap-4">
                <p className="text-sm text-gray-400 uppercase tracking-wide">
                  Your name
                </p>
                <input
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  value={form.name}
                  className="contactInput"
                  type="text"
                />
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-sm text-gray-400 uppercase tracking-wide">
                  Email
                </p>
                <input
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  value={form.email}
                  className="contactInput"
                  type="email"
                />
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-sm text-gray-400 uppercase tracking-wide">
                  Message
                </p>
                <textarea
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                  value={form.message}
                  className="contactTextArea"
                  cols="30"
                  rows="8"
                ></textarea>
              </div>
              <div className="w-full">
                <button
                  type="submit"
                  className="w-full h-12 bg-[#141518] rounded-lg text-base text-gray-400 tracking-wider uppercase hover:text-white duration-300 hover:border-[1px] hover:border-designColor border-transparent"
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

