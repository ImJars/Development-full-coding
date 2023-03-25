import React from "react";
import Wraped from "./components/wraped";
import Footer from "./footer";

function Contact() {
  return (
    <>
      <section className="bg-primary w-full h-screen text-white">
        <Wraped>
          <div className="pb-20">
            <h1 className="text-text-blue text-2xl tracking-wide pt-40 font-bold">
              Work
            </h1>
            <h2 className="text-text-white-gray text-7xl font-bold tracking-wide">
              Contact
            </h2>
            <h3 className="w-2/3 text-text-general text-2xl tracking-wide mt-8">
              Get in touch with me anytime, through social media, e-mail, or
              phone number.
            </h3>
          </div>
          <div className="flex justify-between">
            <div className="w-2/3">
              <div className="border-l pl-24 border-text-general border-opacity-20 pb-96">
                <div className="border-b pb-14 border-text-general border-opacity-20
                                            text-text-general text-base space-y-6"
                >
                  <p className="text-text-general tracking-wide">
                    Just a friendly reminder that the information provided here
                    is for business purposes only. If you have any questions,
                    feel free to chat with me directly on my social media.
                  </p>
                  <p className="text-text-general tracking-wide">
                    I appreciate your understanding in using this responsibly.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-20">
            <Footer />
          </div>
        </Wraped>
      </section>
    </>
  );
}

export default Contact;
