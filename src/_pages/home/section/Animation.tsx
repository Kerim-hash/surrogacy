import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import AnimationImage from "@/assets/animation.jpg";
import HeaderImage from "@/assets/heart.png";
import Image from "next/image";

const Animation = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  // Animation variants
  const headerVariants = {
    hidden: { top: "2.5rem", x: "-50%", scale: 1 }, 
    visible: { top: "40%",  x: "-50%", 
    scale: 1.3, transition: { duration: 0.5 } },
  };

  const imageVariants = {
    hidden: { scale: 1 },
    visible: { scale: 1.1, transition: { duration: 0.5 } },
  };

  return (
    <div className="container relative mx-auto max-h-[640px] overflow-hidden rounded-4xl" ref={ref}>
      {/* Centered Heart Image with top animation */}
      <motion.div
        className="absolute z-10 left-1/2"
        style={{ top: "2.5rem" }}
        initial="hidden"
        animate={controls}
        variants={headerVariants}
      >
        <Image src={HeaderImage} alt="heart" />
      </motion.div>

      {/* Main Animation Image with scale effect */}
      <motion.div
        className="w-full mx-auto overflow-hidden rounded-4xl"
        initial="hidden"
        animate={controls}
        variants={imageVariants}
      >
        <Image
          className="w-full h-full object-contain rounded-4xl"
          src={AnimationImage}
          alt="animation"
          height={640}
        />
      </motion.div>
    </div>
  );
};

export default Animation;
