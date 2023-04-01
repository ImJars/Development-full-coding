import React, { useEffect } from "react";
import Card from "./components/blog/card";
import PinedCard from "./components/blog/pined-card";
import Wraped from "./components/wraped";
import Footter from "./footer";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

function Blog() {
    const { ref, inView } = useInView({
        threshold: 0.5,
        triggerOnce: true      
    });
  const animateTitleBlog = useAnimation();
  const animateSubTitleBlog = useAnimation();

  useEffect(() => {
    if (inView) {
        animateTitleBlog.start({
          x: '-100',
          opacity: 0,
        });
        animateSubTitleBlog.start({
          x: '-100',
          opacity: 0,
        });
      }

    if (!inView) {
      animateTitleBlog.start({
        x: '0',
        opacity: 1,
        transition: {
            type: 'spring', duration: .5, delay: 0.1
        },
      });
        animateSubTitleBlog.start({
            x: '0',
            opacity: 1,
            transition: {
                type: 'spring', duration: .5, delay: 0.3
            }
        })
    }
  }, [inView, animateTitleBlog, animateSubTitleBlog]);

  return (
    <>
      <section ref={ref} className="bg-primary w-full h-full text-white">
        <Wraped>
          <div className="pb-20">
            <div>
              <motion.h1
                animate={animateTitleBlog}
                className="opacity-0 transform -translate-x-10 text-7xl font-bold tracking-wide pt-40"
              >
                Personal Blog
              </motion.h1>
              <motion.h2
                animate={animateSubTitleBlog}
                className="opacity-0 transform -translate-x-10 text-text-general text-2xl tracking-wide mt-8"
              >
                Web development thoughts and stories.
              </motion.h2>
            </div>
          </div>
          <div className="flex flex-col gap-8 md:flex-row md:gap-8 lg:gap-24">
            <div className="md:w-64" />
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
          </div>
          <div className="mt-20">
            <Footter />
          </div>
        </Wraped>
      </section>
    </>
  );
}

export default Blog;
