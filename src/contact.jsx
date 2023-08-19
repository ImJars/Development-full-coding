import React, { useEffect } from "react";
import IndexContact from "./components/contact/indexContact";
import TableContact from "./components/contact/tableContact";
import TableSocialMedia from "./components/contact/tableSocialMedia";
import Wraped from "./components/wraped";
import Footer from "./footer";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import styled from "styled-components";

const ContactSection = styled.section`
  display: block;
  .content-wrapped {
    max-width: 1152px;
  }
`;
const TitleSection = styled.div`
  .Title-Name {
    font-size: clamp(1.875rem, 0.3125rem + 6.25vw, 4.5rem);
  }
  .Subtitle-Text {
    font-size: clamp(0.875rem, 0.503rem + 1.4881vw, 1.5rem);
  }
  .dynamic-text {
    font-size: clamp(1.125rem, 0.6539rem + 2.2167vw, 2.25rem);
  }
`;

function Contact() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  const animateMiniTitleContact = useAnimation();
  const animateTitleContact = useAnimation();
  const animateSubtitleContact = useAnimation();

  useEffect(() => {
    if (inView) {
      animateMiniTitleContact.start({
        opacity: 1,
        x: 0,
        transition: {
          type: "spring",
          duration: 0.4,
          delay: 0.1,
        },
      });
      animateTitleContact.start({
        opacity: 1,
        x: 0,
        transition: {
          type: "spring",
          duration: 0.4,
          delay: 0.3,
        },
      });
      animateSubtitleContact.start({
        opacity: 1,
        x: 0,
        transition: {
          type: "spring",
          duration: 0.4,
          delay: 0.5,
        },
      });
    }

    if (!inView) {
      animateMiniTitleContact.start({
        x: "-100",
        opacity: 0,
      });
      animateTitleContact.start({
        x: "-100",
        pacity: 0,
      });
      animateSubtitleContact.start({
        x: "-100",
        opacity: 0,
      });
    }
  }, [
    inView,
    animateMiniTitleContact,
    animateTitleContact,
    animateSubtitleContact,
  ]);

  const { ref: ref1, inView: inView1 } = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });
  const { ref: ref2, inView: inView2 } = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });
  const { ref: refScroll, inView: inViewScroll } = useInView({
    threshold: 0.6,
    triggerOnce: false,
  });

  const animate1 = useAnimation();
  const animate2 = useAnimation();
  const animateScroll = useAnimation();

  useEffect(() => {
    if (inView1) {
      animate1.start({
        backgroundColor: "#1D263A",
        color: "#60A5FA",
        transition: {
          type: "spring",
          duration: 0.1,
        },
      });
    }
    if (inView2) {
      animate2.start({
        backgroundColor: "#1D263A",
        color: "#60A5FA",
        transition: {
          type: "spring",
          duration: 0.1,
        },
      });
    }
    if (inViewScroll) {
      animateScroll.start({
        opacity: 1,
        x: 0,
        transition: {
          type: "spring",
          duration: 0.4,
        },
      });
    }

    if (!inView1) {
      animate1.start({
        backgroundColor: "#161E31",
        color: "#CBD5E1",
      });
    }
    if (!inView2) {
      animate2.start({
        backgroundColor: "#161E31",
        color: "#CBD5E1",
      });
    }
    if (!inViewScroll) {
      animateScroll.start({
        x: 20,
        opacity: 0,
      });
    }
  }, [inView1, inView2, animate1, animate2, inViewScroll, animateScroll]);

  return (
    <>
      <Wraped>
        <section
          id="contact"
          ref={ref}
          className="bg-primary w-full h-full text-white"
        >
          <ContactSection className="pb-10 sm:pb-20 pt-40">
            <div className="content-wrapped block mx-auto">
              <TitleSection className="mx-5 sm:mx-0">
                <motion.h1
                  animate={animateMiniTitleContact}
                  className="Subtitle-Text opacity-0 transform -translate-x-10 text-text-blue text-2xl tracking-wide font-bold"
                >
                  Work
                </motion.h1>
                <motion.h2
                  animate={animateTitleContact}
                  className="Title-Name opacity-0 transform -translate-x-10 text-text-white-gray text-7xl font-bold tracking-wide"
                >
                  Contact
                </motion.h2>
                <motion.h3
                  animate={animateSubtitleContact}
                  className="Subtitle-Text opacity-0 transform -translate-x-10 w-full sm:w-2/3 text-text-general mt-4"
                >
                  Get in touch with me anytime, through social media, e-mail, or
                  phone number.
                </motion.h3>
              </TitleSection>
            </div>
          </ContactSection>
          <div className="flex justify-between">
            <div className="w-2/3">
              <div
                ref={refScroll}
                className="border-l pl-24 border-text-general border-opacity-20 pb-20"
              >
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
                <div
                  ref={ref1}
                  className="mt-8 border-b border-text-general border-opacity-20 pb-10"
                >
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
                  ref={ref2}
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
            <IndexContact
              subtitle_1={"Contact"}
              subtitle_2={"Social Media"}
              animate_1={animate1}
              animate_2={animate2}
              animate_scroll={animateScroll}
            />
          </div>
          <div className="mt-20">
            <Footer />
          </div>
        </section>
      </Wraped>
    </>
  );
}

export default Contact;
