import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

import { Button, Label, TextInput, Textarea } from "flowbite-react";
import { HiMail, HiPhone, HiUser, HiServer } from "react-icons/hi";

const ContactLocation = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    try {
      emailjs
      .sendForm('service_5oxlnn2', 'template_r66tfjl', form.current, {
        publicKey: 'yhT2q0sNVjOsSmaHK',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
      alert("email send")
    } catch (error) {
      alert(error)
    }
  };

  return (
    <section className="mt-[100px]">
      <div className="container">
        <div className="flex justify-between gap-10 flex-col lg:flex-row mx-5">
          {/* Map Section */}
          <div className="relative w-full z-10 order-2 lg:order-1">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3592.956153315275!2d-80.21070922481651!3d25.772011777345472!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9b692e6051e35%3A0xe2f2e7b3fc0ac9c4!2s821%20SW%202nd%20St%20APT%2010%2C%20Miami%2C%20FL%2033130%2C%20USA!5e0!3m2!1sen!2sin!4v1737027518754!5m2!1sen!2sin"
              className="w-full h-[350px] md:h-[570px] shadow-xl rounded-2xl"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* Content Section */}
          <div className="w-full order-1 lg:order-2">
            <h2 className="text-3xl font-bold">Do you have any query?</h2>
            <p className="text-[16px] text-green300 mt-[10px]">
              Fill out the form, and we will reach you in 24 working hours.
            </p>

            <form ref={form} onSubmit={sendEmail} className="mt-5 flex flex-col gap-5">
              <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
                <div className="w-full">
                  <Label value="Full Name" />
                  <TextInput className="shadow-lg" id='name' name="name" type="text" icon={HiUser} placeholder="John Doe" required />
                </div>

                <div className="w-full">
                  <Label value="Phone Number" />
                  <TextInput className="shadow-lg" id='pnumber' name="pnumber" type="text" icon={HiPhone} placeholder="+1 555-555-5555" required />
                </div>
              </div>

              <div className="w-full">
                <Label value="Email" />
                <TextInput className="shadow-lg" id='email' name="email" type="email" icon={HiMail} placeholder="youremail@example.com" required />
              </div>

              <div className="w-full">
                <Label value="Service Required" />
                <TextInput className="shadow-lg" id='service' name="service" type="text" icon={HiServer} placeholder="SEO, Web Design, etc." required />
              </div>

              <div className="w-full">
                <Label value="Message" />
                <Textarea className="shadow-lg" id='comment' name="comment" placeholder="Leave a message..." required rows={4} />
              </div>

              <Button className="shadow-lg" type="submit" outline>
                Submit Form
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactLocation;
