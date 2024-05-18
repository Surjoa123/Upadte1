import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./Experience.css";

const Experience = () => {
  return (
    <div className="experience" id="experience">
      <Counter endValue={4} label="years" />
      <Counter endValue={20} label="completed +" />
      <Counter endValue={0} label="companies" />
    </div>
  );
};

const Counter = ({ endValue, label }) => {
  const [value, setValue] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView && value < endValue) {
      const timer = setInterval(() => {
        setValue((prevValue) => {
          const nextValue = prevValue + 1;
          return nextValue <= endValue ? nextValue : endValue;
        });
      }, 100);
      return () => clearInterval(timer);
    }
  }, [inView, value, endValue]);

  return (
    <div className="achievement" ref={ref}>
      <motion.div
        className="circle increase"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        {inView && <span>{value}</span>}
      </motion.div>
      <span>{label}</span>
    </div>
  );
};

export default Experience;
