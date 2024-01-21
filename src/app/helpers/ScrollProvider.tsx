import gsap from "gsap-trial";
import { ScrollTrigger } from "gsap-trial/dist/ScrollTrigger";
import { SplitText } from "gsap-trial/dist/SplitText";
import { createContext } from "react";
import useIsomorphicLayoutEffect from "./useIsomorphicEffect";
const AnimationContext = createContext({});

export function ScrollProvider({ children }: { children: any }) {
  useIsomorphicLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger, SplitText);

    // SET VALUES FOR FIRST ANIM

    const headlines = gsap.utils.toArray<HTMLElement>("[data-text='headline']");
    const body = gsap.utils.toArray<HTMLElement>("[data-text='body']");

    // headline Animation
    headlines.forEach((headline) => {
      let headlineSplit = new SplitText(headline, {
        type: "words, chars",
      });
      let chars = headlineSplit.chars;

      gsap.from(chars, {
        duration: 1.25,
        opacity: 0,
        scale: 1.25,
        ease: "power2.inOut",
        stagger: {
          from: "random",
          amount: 0.2,
        },
        scrollTrigger: {
          trigger: headline,
          start: "top 92.5%",
        },
      });

      // paragraph animation
      body.forEach((text) => {
        let linesplit = new SplitText(text, {
          type: "lines",
          linesClass: "splitLine",
        });
        let lines = linesplit.lines;

        gsap.from(lines, {
          duration: 1,
          opacity: 0,
          yPercent: 45,
          ease: "power2.inOut",
          stagger: 0.15,
          scrollTrigger: {
            trigger: lines,
            start: "top bottom",
          },
        });
      });
    });
  }, []);
  return (
    <AnimationContext.Provider value="">{children}</AnimationContext.Provider>
  );
}
