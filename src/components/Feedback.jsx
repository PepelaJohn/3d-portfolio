import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";
const FeedBackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
}) => {
  return (
    <motion.div
      variants={fadeIn("", "spring", 0.5, 0.75)}
      className="bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full"
    >
      <p className="text-white font-black text-[40px]">"</p>
      <div className="mt-1">
        <p className="text-white tracking-wider text-[18px]">{testimonial}</p>
        <div className="mt-7 flex justify-between items-center gap-1">
          <div className="flex flex-1 flex-col">
            <p className="text-white font-medium text-[16px]">
              <span className="blue-text-gradient">@</span>
              {name}
            </p>
            <p className="mt-1 text-secondary text-[12px]">
              {designation} of {company}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
const Feedback = () => {
  return (
    <>
      <div className="mt-12 bg-black rounded-[20px]">
        <div
          className={`${styles.padding} bg-tertiary rounded-2xl min-h-[300px]`}
        >
          <motion.div variants={textVariant} className="div">
            <p className={`${styles.sectionSubText}`}>What others say</p>
            <h3 className={`${styles.sectionHeadText}`}>Testimonials</h3>
          </motion.div>
        </div>
        <div
          className={`${styles.paddingX}  -mt-20 pb-14 flex flex-wrap gap-7`}
        >
          {testimonials.map((test, i) => (
            <FeedBackCard key={i} index={i} {...test} />
          ))}
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Feedback, "feedback");
