import { useEffect, useRef, useState } from 'react'
import Hls from 'hls.js'

const SOURCE = 'https://stream.mux.com/kimF2ha9zLrX64H00UgLGPflCzNtl1T0215MlAmeOztv8.m3u8'

export default function BackgroundVideo(){
  const videoRef = useRef(null); const [failed,setFailed] = useState(false)
  useEffect(()=>{
    if(matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const video=videoRef.current; let hls
    if(video.canPlayType('application/vnd.apple.mpegurl')) video.src=SOURCE
    else if(Hls.isSupported()){ hls=new Hls({enableWorker:true}); hls.loadSource(SOURCE); hls.attachMedia(video); hls.on(Hls.Events.ERROR,(_,d)=>{if(d.fatal)setFailed(true)}) }
    else setFailed(true)
    video.play().catch(()=>{})
    return ()=>hls?.destroy()
  },[])
  return <div className={`hero-media ${failed?'is-fallback':''}`} aria-hidden="true"><video ref={videoRef} autoPlay muted loop playsInline onError={()=>setFailed(true)} /><div className="hero-shade" /></div>
}
