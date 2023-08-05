import React, { useEffect } from "react";
import Card from "./components/blog/card";
import PinedCard from "./components/blog/pined-card";
import Wraped from "./components/wraped";
import Footter from "./footer";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import styled from "styled-components";

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
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  const animateTitleBlog = useAnimation();
  const animateSubTitleBlog = useAnimation();

  useEffect(() => {
    if (inView) {
      animateTitleBlog.start({
        x: 0,
        opacity: 1,
        transition: {
          type: "spring",
          duration: 0.5,
          delay: 0.1,
        },
      });
      animateSubTitleBlog.start({
        x: 0,
        opacity: 1,
        transition: {
          type: "spring",
          duration: 0.5,
          delay: 0.3,
        },
      });
    }
    if (!inView) {
      animateTitleBlog.start({
        x: "-100",
        opacity: 0,
      });
      animateSubTitleBlog.start({
        x: "-100",
        opacity: 0,
      });
    }
  }, [inView, animateTitleBlog, animateSubTitleBlog]);

  return (
    <>
      <Wraped>
        <section ref={ref} className="bg-primary w-full h-full text-white">
          <BlogSection className="pb-10 sm:pb-20 pt-40">
            <div className="content-wrapped block mx-auto">
              <TitleSection className="mx-5 sm:mx-0">
                <motion.h1
                  animate={animateTitleBlog}
                  className="Title-Name opacity-0 transform -translate-x-10 font-bold tracking-wide"
                >
                  Personal Blog
                </motion.h1>
                <motion.h2
                  animate={animateSubTitleBlog}
                  className="Subtitle-Text opacity-0 transform -translate-x-10 text-text-general tracking-wide sm:mt-5"
                >
                  Web development thoughts and stories.
                </motion.h2>
              </TitleSection>
            </div>
          </BlogSection>
          <BlogSection>
            <div className="mb-20 content-wrapped block mx-auto">
              <TitleSection className="mx-5 sm:mx-0 flex">
                <div className="md:w-1/3" />
                <div className="flex-1">
                  <PinedCard
                    date="February 12, 2021 • English"
                    title="Tailwind CSS: Best Practices"
                    description="A collection of best practices for Tailwind CSS."
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
          <div className="mt-20">
            <Footter />
          </div>
        </section>
      </Wraped>
    </>
  );
}

export default Blog;
