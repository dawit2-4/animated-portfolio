import { useRef } from "react"
import emailjs from '@emailjs/browser';
import "./contact.scss"
import {motion, useInView} from "framer-motion"


const variants = {
  initial: {
    y: 500,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition:{
      duration: 0.5,
      staggerChildren: 0.1,
    }
  }
}

const Contact = () => {

  const ref =useRef()
  const formRef = useRef()


  const isInview = useInView(ref, {margin: "-100px"});

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_85r34tq', 'template_h9uzt9u', formRef.current, {
        publicKey: 'UNLcbLe6Ky1Om2BT4',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <motion.div className="contact" variants={variants} initial="initial" whileInView={"animate"} ref={ref}>
      <motion.div className="textContainer" variants={variants}>
        <motion.h1 variants={variants}>Let's work together</motion.h1>
        <motion.div className="item" variants={variants}>
          <h2>Mail</h2>
          <span>Dawitbirhanu363@gmail.com</span>
        </motion.div>
        <motion.div className="item" variants={variants}>
          <h2>Adress</h2>
          <span>Addis Ababa, Ethiopia</span>
        </motion.div>
        <motion.div className="item" variants={variants}>
          <h2>Phone</h2>
          <span>09*********</span>
        </motion.div>
      </motion.div>
      <div className="formContainer">
    <motion.div className="phoneSvg" initial={{opacity:1}} whileInView={{opacity: 0}} transition={{delay:3,duration:1}}>
        <xml version="1.0" />
        <svg 
        width="400px" height="400px" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" fill="none" >
        <motion.path initial = {{pathLength:0}}
          animate = {isInview && {pathLength:1}}
          transition = {{duration:3}}
        d="M50.19 20.6a3.33 3.33 0 0 0-4.62.8l-1.9 2.71a3.31 3.31 0 0 0 .8 4.61c5.41 3.81 1.59 9.22-.31 11.93S38.44 48.76 33 45a3.31 3.31 0 0 0-4.61.8l-1.91 2.7a3.31 3.31 0 0 0 .8 4.61C34.07 57.83 40 58 49.57 44.46s7.43-19.09.62-23.86z"/><rect x="8" y="8" width="6" height="6"/><rect x="20" y="8" width="6" height="6"/><rect x="32" y="8" width="6" height="6"/><rect x="8" y="20" width="6" height="6"/><rect x="20" y="20" width="6" height="6"/><rect x="32" y="20" width="6" height="6"/><rect x="8" y="32" width="6" height="6"/><rect x="20" y="32" width="6" height="6"/><rect x="32" y="32" width="6" height="6"/></svg>
    </motion.div>
        <motion.form onSubmit={sendEmail} ref={formRef} initial={{opacity:0}} whileInView={{opacity: 1}} transition={{delay:4,duration:1}}>
          <input type="text" placeholder="Name" required name="name"/>
          <input type="email" placeholder="Email"  required name="email"/>
          <textarea  rows="10" placeholder="Message" name="message"></textarea>
          <button>Submit</button>
        </motion.form>
      </div>
    </motion.div>
  )
}

export default Contact

