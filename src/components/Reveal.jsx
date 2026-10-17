import { motion, useReducedMotion } from 'motion/react'
export default function Reveal({children,className='',delay=0}){const reduce=useReducedMotion();return <motion.div className={className} initial={reduce?false:{opacity:0,y:28}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.15}} transition={{duration:.65,delay,ease:[.22,1,.36,1]}}>{children}</motion.div>}
