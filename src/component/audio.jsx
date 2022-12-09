import { useSelector } from "react-redux"
import { useState,useRef,useEffect } from "react"

const Audio = () => {

  const myref = useRef()
  const rainref = useRef()
  const [lastClick,setLastClick] = useState()
  // const [url,setUrl] = useState()
  const [play,setPlay] = useState(false)
  // const [audio,setAudio] = useState()
  const stage = useSelector(state => state.times.stage)
  const start = useSelector(state => state.times.start)


  useEffect(()=>{
    if (stage ==="session"){
      if (!start){
      myref.current.pause()
    }else {
      myref.current.play()
    }
    }
  },[start])

  const onClickAudio = (e) => {
    if (lastClick){
      lastClick.className = "theme"
    }else{
      console.log(rainref.current)
      rainref.current.className = "theme"
    }
    if (stage === "session" && start){
      // alert("ok")
      // console.log()
      e.target.className = "theme selected"
      // https://joeweaver.me/codepenassets/freecodecamp/challenges/build-a-pomodoro-clock/cafe.mp3
      setLastClick(e.target)
      setPlay(true)
      // setUrl("../")
      // console.log(myref.current)
      switch(e.target.id){
        case "forest": myref.current.src = "https://joeweaver.me/codepenassets/freecodecamp/challenges/build-a-pomodoro-clock/forest.mp3";break;
        case "ocean": myref.current.src ="https://joeweaver.me/codepenassets/freecodecamp/challenges/build-a-pomodoro-clock/ocean.mp3"; break;
        case "rainy": myref.current.src = "https://joeweaver.me/codepenassets/freecodecamp/challenges/build-a-pomodoro-clock/rain.mp3"; break;
        case "peace": myref.current.src = "https://joeweaver.me/codepenassets/freecodecamp/challenges/build-a-pomodoro-clock/peace.mp3"; break;
        case "cafe": myref.current.src = "https://joeweaver.me/codepenassets/freecodecamp/challenges/build-a-pomodoro-clock/cafe.mp3"; break;
      }
      myref.current.play();
    }
  }

  
  return(
    <>
      <div id="audio-selector" onClick={onClickAudio}>
        <div id="forest" className="theme" >🌲 Forest</div>
        <div id="ocean" className="theme" >🌊 Ocean</div>
        <div id="rainy" ref={rainref} className="theme selected" >🌧 Rainy</div>
        <div id="peace" className="theme" >🧘 Peace</div>
        <div id="cafe" className="theme" >☕ Caf&eacute;</div>
      </div>
      <audio ref={myref} loop autoPlay={false} src="https://joeweaver.me/codepenassets/freecodecamp/challenges/build-a-pomodoro-clock/rain.mp3"></audio>
    </>
  )
}

export default Audio