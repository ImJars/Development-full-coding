import React from "react";
import IndexContact from "./components/contact/indexContact";
import TableContact from "./components/contact/tableContact";
import TableSocialMedia from "./components/contact/tableSocialMedia";
import Wraped from "./components/wraped";
import Footer from "./footer";

function Contact() {
  return (
    <>
      <section className="bg-primary w-full h-full text-white">
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
                <div
                  className="border-b pb-14 border-text-general border-opacity-20
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
                <div className="mt-8 border-b border-text-general border-opacity-20 pb-10">
                  <h1 className="text-text-white-gray text-3xl font-bold tracking-wide">
                    Contact
                  </h1>
                  <TableContact />
                  <h1 className="text-text-general text-base tracking-wide mt-5">
                    If you need any further information, such as my phone
                    number, please do not hesitate to send me an email first.
                  </h1>
                </div>
                <div
                  className="mt-10 space-y-5 text-text-general text-base tracking-wide"
                >
                  <h1 className="text-text-white-gray text-3xl font-bold tracking-wide">
                    Social Media
                  </h1>
                  <p>
                    If you want to find me on social media, just search for
                    @enjidev. That's my username on almost all platforms, so it
                    should be easy to find me.
                  </p>
                  <p>
                    But if you're short on time, I've included some links to the
                    social media platforms I use most frequently below.
                  </p>
                  <TableSocialMedia />
                </div>
              </div>
            </div>
            <IndexContact subtitle_1={"Contact"} subtitle_2={"Social Media"} />
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
