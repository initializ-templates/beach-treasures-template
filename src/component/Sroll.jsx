import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Sroll = ({ children, className, direction = "up" }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });


 useEffect(() => {
   if (inView) {
     controls.start("visible");
   }
 }, [controls, inView]);

   const variants = {
     hidden: {
       opacity: 0,
       x: direction === "left" ? -50 : direction === "right" ? 50 : 0,
       y: direction === "up" ? 50 : direction === "down" ? -50 : 0,
     },
     visible: {
       opacity: 1,
       x: 0,
       y: 0,
       transition: { duration: 1 },
     },
   };

    return (
      <motion.div
        ref={ref}
        className={className}
        initial="hidden"
        animate={controls}
        variants={variants}
      >
        {children}
      </motion.div>
    );

};

export default Sroll;
