import React from "react";
import Card from "./components/blog/card";
import PinedCard from "./components/blog/pined-card";
import Wraped from "./components/wraped";
import Footter from "./footer";
import { motion } from "framer-motion";
import styled from "styled-components";
import FooterWraped from "./components/footerWraped";

const BlogSection = styled.section`
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

function Blog() {
  const fadeInAnimationVariants = {
    initial: {
      opacity: 0,
      x: -100,
    },
    animate_Title: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        duration: 0.5,
        delay: 0.2,
      },
    },
    animate_Subtitle: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        duration: 0.5,
        delay: 0.3,
      },
    },
  };
  return (
    <>
      <Wraped>
        <section className="w-full h-full text-white">
          <BlogSection className="pb-10 sm:pb-20 pt-40">
            <div className="content-wrapped block mx-auto">
              <TitleSection className="mx-1 sm:mx-0">
                <motion.h1
                  className="text-text-white-gray Title-Name opacity-0 transform -translate-x-10 font-bold tracking-wide"
                  variants={fadeInAnimationVariants}
                  initial="initial"
                  whileInView="animate_Title"
                  viewport={{
                    once: true,
                  }}
                >
                  Blog Personal
                </motion.h1>
                <motion.h2
                  className="Subtitle-Text opacity-0 transform -translate-x-10 text-text-general tracking-wide sm:mt-2"
                  variants={fadeInAnimationVariants}
                  initial="initial"
                  whileInView="animate_Subtitle"
                  viewport={{
                    once: true,
                  }}
                >
                  Pensamientos e historias sobre desarrollo web.
                </motion.h2>
              </TitleSection>
            </div>
          </BlogSection>
          <BlogSection>
            <div className="mb-20 content-wrapped block mx-auto">
              <TitleSection className="mx-1 sm:mx-0 flex">
                <div className="md:w-1/3 border-l border-text-general border-opacity-20" />
                <div className="flex-1">
                  <PinedCard
                    date="February 12, 2021 • English"
                    title="Tailwind CSS: Best Practices"
                    description="Tailwind CSS is a utility-first CSS framework for rapidly building custom user interfaces.  It is a highly customizable low-level CSS framework that gives you all of the building blocks you need to build bespoke designs without any annoying opinionated styles you have to fight to override."
                  />
                  <Card
                    date={"January 6, 2023 • English"}
                    title={"Tentang Next.js dan Tailwind CSS"}
                    description={
                      "First impression menggunakan Next.js, Tailwind CSS, Framer Motion setelah tiga bulan."
                    }
                  />
                  <Card
                    date={"January 6, 2023 • English"}
                    title={"Javascript: The Good Parts"}
                    description={
                      "Javascript is a good language. It is the best language. It is the only language in the world"
                    }
                  />
                  <Card
                    date={"January 6, 2023 • English"}
                    title={"React hooks vs. class components"}
                    description={
                      "React hooks are a new addition in React 16.8. They let you use state and other React"
                    }
                  />
                  <Card
                    date={"January 6, 2023 • English"}
                    title={"Tailwind CSS vs. Bootstrap"}
                    description={
                      "Tailwind CSS is a utility-first CSS framework for rapidly building custom user interfaces."
                    }
                  />
                </div>
              </TitleSection>
            </div>
          </BlogSection>
          <FooterWraped className="mt-20">
            <Footter />
          </FooterWraped>
        </section>
      </Wraped>
    </>
  );
}

export default Blog;
