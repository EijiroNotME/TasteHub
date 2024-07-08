import React, { useState, useEffect } from "react";
import SkeletonImage from "../../Components/Skeleton/SkeletonImage"; // Import the skeleton loader

const ContactForm = () => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <form
      className=""
      noValidate
      {...(validated && { validated: "true" })}
      onSubmit={handleSubmit}
    >
      <div className="mb-4">
        <input
          type="text"
          className="min-h-[48px] leading-[48px] bg-primary border border-transparent rounded-xl focus:outline-none focus:border focus:border-accent w-full px-5"
          placeholder="Enter Name"
          required
        />
      </div>
      <div className="mb-4">
        <input
          type="email"
          className="min-h-[48px] leading-[48px] bg-primary border border-transparent rounded-xl focus:outline-none focus:border focus:border-accent w-full px-5"
          placeholder="Enter Email"
          required
        />
      </div>
      <div className="mb-4">
        <textarea
          name="message"
          className="min-h-[48px] leading-[48px] bg-primary border border-transparent rounded-xl focus:outline-none focus:border focus:border-accent w-full px-5"
          placeholder="Enter Message"
          rows="4"
          required
        ></textarea>
      </div>
      <div className="text-end">
        <button
          type="submit"
          className="text-primary px-6 py-2 rounded-lg bg-accent hover:bg-primaryDark hover:text-secondary shadow-lg transition duration-300"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

const ContactFormCard = () => (
  <div className="bg-primaryDark shadow-xl rounded-2xl p-6 md:p-12">
    <h2 className="text-2xl md:text-[45px] leading-none font-bold mb-4">
      Contact Us
    </h2>
    <p className="text-lg mb-12">
      We list your menu online, help you process orders.
    </p>

    <ContactForm />
  </div>
);

const Contact = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const img = new Image();
    img.src =
      "https://images.unsplash.com/photo-1499914485622-a88fac536970?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    img.onload = () => setLoading(false);
  }, []);

  return (
    <section className="light py-14 md:py-24 text-secondary overflow-hidden">
      <div className="px-4">
        <div className="grid grid-cols-12 py-6 lg:gap-8">
          <div className="col-span-12 lg:col-span-7 lg:order-2 mb-4 lg:mb-0">
            <div className="bg-center bg-no-repeat bg-cover rounded-2xl min-h-[150px] h-full object-cover">
              {loading ? (
                <SkeletonImage />
              ) : (
                <div
                  style={{
                    backgroundImage:
                      "url(https://images.unsplash.com/photo-1499914485622-a88fac536970?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
                  }}
                  className="w-full h-full bg-center bg-no-repeat bg-cover rounded-2xl"
                ></div>
              )}
            </div>
          </div>
          <div className="col-span-12 lg:col-span-5">
            <ContactFormCard />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
