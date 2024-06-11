import "./services.scss"
import {animate, motion} from "framer-motion"

const variants = {
  initial:{
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.1,
      duration: 1,
    }
  }
}

const Services = () => {
  return (
    <motion.div className="services" variants={variants} initial="initial" whileInView="animate">
      <motion.div className="textContainer" variants={variants}>
      <p>focus on helping your brand 
        <br /> grow and move forward</p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/people.webp" alt="" />
          <h1>
            <motion.b whileHover={{color: "orange"}}>Unique</motion.b> Ideas
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{color: "orange"}}>For Your</motion.b> Business
          </h1>
          <button>WHAT WE DO?</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div className="box" whileHover={{ background: "lightgray", color: "black"}}>
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus praesentium possimus, dolorem iure vitae labore aperiam, porro eveniet harum debitis veniam asperiores odit impedit explicabo id hic sit, doloremque accusamus!
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div className="box" whileHover={{ background: "lightgray", color: "black"}}>
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus praesentium possimus, dolorem iure vitae labore aperiam, porro eveniet harum debitis veniam asperiores odit impedit explicabo id hic sit, doloremque accusamus!
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div className="box" whileHover={{ background: "lightgray", color: "black"}}>
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus praesentium possimus, dolorem iure vitae labore aperiam, porro eveniet harum debitis veniam asperiores odit impedit explicabo id hic sit, doloremque accusamus!
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div className="box" whileHover={{ background: "lightgray", color: "black"}}>
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus praesentium possimus, dolorem iure vitae labore aperiam, porro eveniet harum debitis veniam asperiores odit impedit explicabo id hic sit, doloremque accusamus!
          </p>
          <button>Go</button>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default Services