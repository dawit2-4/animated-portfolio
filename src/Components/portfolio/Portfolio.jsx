import React, { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import "./porfolio.scss" // Corrected the import statement for the SCSS file

// Sample data
const items = [
  {
    id: 1,
    title: "react commerce",
    img: "/img1.jpg",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, alias ratione.",
  },
  {
    id: 2,
    title: "2 commerce",
    img: "/img2.jpg",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, alias ratione.",
  },
  {
    id: 3,
    title: "3 commerce",
    img: "/img3.jpg",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, alias ratione.",
  },
  {
    id: 4,
    title: "4 commerce",
    img: "/img4.jpg",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, alias ratione.",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  // Get scrollYProgress using useScroll hook
  const { scrollYProgress } = useScroll({
    target: ref,
    // offset: ["start start", "end start"],
  });

  // Apply vertical transform animation to the text container
  const y = useTransform(scrollYProgress, [0, 1], [-400, 400]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imgContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{y}}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button>See Demo</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef(); // Create a reference to the div element

  // Get scrollYProgress using useScroll hook
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['end end', 'start start']
  });

  // Apply spring animation to scrollYProgress using useSpring hook
  const scale = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 20
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div className="progressBar" style={{ scale }}></motion.div>
      </div>
      {/* Render each item using map */}
      {items.map(item => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
