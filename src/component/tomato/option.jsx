import { useDispatch,useSelector } from "react-redux"
import { upDateSessionTime,upDateBreakTime } from "../../features/times/timesSlice"
import { useState } from "react"
const Option = () => {

  const dispath = useDispatch()
  const [breakTime,setBreakTime] = useState(useSelector(state => state.times.brakeTime))
  const [sessionTime,setSessionTime] = useState(useSelector(state => state.times.sessionTime))
  let tempTime;
  const onChangeSeesionTime = (e) => {
    setSessionTime(e.target.value)
    if (e.target.value > 60){
      tempTime = 60
    }else if (e.target.value < 5){
      tempTime = 5
    }else{
      tempTime = e.target.value
    }
    dispath(upDateSessionTime(tempTime))
  }

  const onChangeBreakTime = (e) => {
    setBreakTime(e.target.value)
    if (e.target.value > 20){
      tempTime = 20
    }else if (e.target.value < 1){
      tempTime = 1
    }else{
      tempTime = e.target.value
    }
    dispath(upDateBreakTime(tempTime))
  }

  return (
    <div id="options">
      <div id="session">
        {/* <i id="incrSession" className="fas fa-angle-double-up"></i> */}
        <span className="option-title">Session</span>
        <input id="sessionInput" type="number" value={sessionTime}  onChange={onChangeSeesionTime}/>
        {/* <i id="decrSession" className="fas fa-angle-double-down"></i> */}
      </div>
      <div id="break">
        {/* <i id="incrBreak" className="fas fa-angle-double-up"></i> */}
        <span className="option-title">Break</span>
        <input id="breakInput" type="number" value={breakTime}  onChange={onChangeBreakTime}/>
        {/* <i id="decrBreak" className="fas fa-angle-double-down"></i> */}
      </div>
    </div>
  )
}

export default Option