import { useEffect, useState } from 'react'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import { AnimatePresence, motion } from 'motion/react'
import { navLinks } from '../data/portfolioData'

export default function Navbar(){
  const [open,setOpen]=useState(false); const [active,setActive]=useState('Home')
  useEffect(()=>{const observer=new IntersectionObserver(es=>es.forEach(e=>e.isIntersecting&&setActive(e.target.id[0].toUpperCase()+e.target.id.slice(1))),{rootMargin:'-40% 0px -55%'}); document.querySelectorAll('section[id]').forEach(s=>observer.observe(s)); return()=>observer.disconnect()},[])
  const go=()=>setOpen(false)
  return <motion.header initial={{opacity:0,y:-18}} animate={{opacity:1,y:0}} transition={{duration:.7}} className="nav-wrap">
    <nav className="navbar" aria-label="Primary navigation"><a href="#home" className="brand" onClick={go}><span>PM</span><b>PRATIK MATSAGAR</b></a>
      <div className="desktop-nav"><a className={active==='Home'?'active':''} href="#home">Home</a>{navLinks.map(x=><a className={active===x?'active':''} key={x} href={`#${x.toLowerCase()}`}>{x}</a>)}</div>
      <a className="connect" href="#contact">Let's Connect <ArrowUpRight size={15}/></a><button className="menu-btn" onClick={()=>setOpen(!open)} aria-expanded={open} aria-label="Toggle menu">{open?<X/>:<Menu/>}</button>
    </nav>
    <AnimatePresence>{open&&<motion.div className="mobile-nav" initial={{opacity:0,y:-8}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-8}}>{['Home',...navLinks].map(x=><a onClick={go} key={x} href={`#${x.toLowerCase()}`}>{x}</a>)}</motion.div>}</AnimatePresence>
  </motion.header>
}
