import Clock from "./clock"
import Option from "./option"
import { useSelector } from "react-redux"

const Tomato = () => {
  const start = useSelector(state => state.times.start)

  return(
    <div id="pomodoro">
      <Clock />
      {
        !start && <Option />
      }
    </div>
  )
}

export default Tomato