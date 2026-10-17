import { motion } from 'motion/react'
import { ArrowDown, ArrowUpRight } from 'lucide-react'
import BackgroundVideo from './BackgroundVideo'

export default function Hero(){const items={hidden:{opacity:0,y:25},show:i=>({opacity:1,y:0,transition:{duration:.7,delay:.25+i*.12,ease:[.22,1,.36,1]}})};return <section id="home" className="hero"><BackgroundVideo/><div className="hero-content">
  <motion.div custom={0} variants={items} initial="hidden" animate="show" className="availability"><i/> OPEN TO RELEVANT OPPORTUNITIES</motion.div>
  <motion.p custom={1} variants={items} initial="hidden" animate="show" className="eyebrow">SOFTWARE DEVELOPER <span>·</span> DATA ANALYTICS <span>·</span> AZURE DATA ENGINEERING</motion.p>
  <motion.h1 custom={2} variants={items} initial="hidden" animate="show">Building intelligent solutions with <em>data, code &amp; AI.</em></motion.h1>
  <motion.p custom={3} variants={items} initial="hidden" animate="show" className="hero-copy">Hi, I'm Pratik Ravindra Matsagar — an AI &amp; Data Science Engineering graduate and technology professional from Nashik, India. I build backend applications, explore data pipelines, develop analytics solutions, and work on practical AI-powered projects.</motion.p>
  <motion.div custom={4} variants={items} initial="hidden" animate="show" className="hero-actions"><a className="btn primary" href="#projects">Explore My Work <ArrowDown size={17}/></a><a className="btn secondary" href="#contact">Get In Touch</a><a className="text-link" href="/Pratik-Matsagar-Resume.pdf" download>Download Resume <ArrowUpRight size={15}/></a></motion.div>
  </div><a className="scroll-cue" href="#about"><span>SCROLL TO EXPLORE</span><ArrowDown size={15}/></a></section>}
