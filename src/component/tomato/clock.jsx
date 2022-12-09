import { useSelector,useDispatch } from "react-redux"
import { useEffect,useState } from "react"
import { upDateStart,upDateStage } from "../../features/times/timesSlice"

const Clock = () => {

  const [restart,setRestart] = useState(true)
  const [time,setTime] = useState()
  const [minutes,setMinutes] = useState()
  const [seconds,setSeconds] = useState()
  const [rank,setRank] = useState(1)
  const [first,setFirst] = useState(true)
  // const [timeRecoder,setTimeRecoder] = useState(null)

  const stage = useSelector(state => state.times.stage)
  const sessionTime = useSelector(state => state.times.sessionTime)
  const breakTime = useSelector(state => state.times.brakeTime)
  const start = useSelector(state => state.times.start)
  const dispath = useDispatch()

  useEffect(()=>{
    const m = Math.floor(time / 60)
    setMinutes(m) 
    const s = time - m*60
    setSeconds(s)
    if (time < 1){
      if (stage === "session"){
        dispath(upDateStage("break"))
      }else if (stage === "break"){
        dispath(upDateStage("session"))
        setRank(rank => rank+1 )
      }
      dispath(upDateStart(true))
      setFirst(false)
      // setRestart(true)
    }
  },[time])
  
  //初始时间的设置,reset设置
  useEffect(()=>{
    setRestart(true)
  },[sessionTime,breakTime,stage])

  useEffect(()=>{
    if (restart){
      if (stage === "session"){
        // alert(breakTime)
        setTime(sessionTime * 60)
        setMinutes(sessionTime)
      }else {
        // alert("okk")
        // alert(breakTime)
        setTime(breakTime * 60);
        setSeconds(breakTime)
      }
      setRestart(false)
      setSeconds("00")
    }
  },[,restart])

  useEffect(()=>{
    start ? myTimer.openTimer() : myTimer.closeTimer()
    return()=>{
      myTimer.closeTimer()
    }
  },[start])


  const onClickReset = () =>{
    setRestart(true)
    setRank(1)
  }

  let myTimer = (function(){
    let timer = null;

    function openTimer(){
      timer =  setInterval(()=>{
        setTime((time) => (time - 1))
        // alert(time)
  
      },1000)
    }
    function closeTimer(){
      clearInterval(timer)
    }

    return{
      openTimer,
      closeTimer
    }
  })()



  const onClickStart = () => {
    setFirst(false)
    dispath(upDateStart(true))
    // myTimer.openTimer()
  }

  const onClickPause = () => {
    dispath(upDateStart(false))
    // myTimer.closeTimer()
  }

  return(
    <div id="clock">
      <div id="timer">
        {
          first ? (
            start ?(
              <div id="title">Pause</div>
            ):(
              <div id="title">Ready?</div>
            )
          ):(
            start ?(
              <div id="title">Pause</div>
            ):(
              <div id="title">{stage} {rank}</div>
            )
          )
        }
        <div id="countdown">
          
          {/* <span id="minutes">{time}</span> */}
          <span id="minutes">{minutes}</span>
          <span id="seconds">{`${seconds}`.length >1 ? seconds: "0"+seconds}</span>
          
        </div>
        <div id="controls" className="reset">
          {
            first ? (
              start ? (
                <div id="pause" onClick={onClickPause}><i className="fas fa-pause"></i> Pause</div> 
             ):(
               <>
               <div id="start" onClick={onClickStart}><i className="fas fa-play"></i> Start</div>
              </>
             )
            ):(
              start ? (
                <div id="pause" onClick={onClickPause}><i className="fas fa-pause"></i> Pause</div> 
             ):(
               <>
               <div id="start" onClick={onClickStart}><i className="fas fa-play"></i> Start</div>
               <div id="reset" onClick={onClickReset}><i className="fas fa-sync-alt"></i> Reset</div>
               </>
             )
            )
          }

        </div>
      </div>
    </div>
  )
}

export default Clock