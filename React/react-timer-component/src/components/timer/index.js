import React, { Component, useState, useEffect, userRef, createRef } from "react";
import "./index.css";

/* Class Component */
class Timer extends Component {
  state = {
    time: this.props.initial,
  }

  constructor(props) {
    super(props);
    this.timerRef = createRef();
  }

  componentDidMount() {
    this.timerRef.current = setInterval(() => {
      const time = (this.state.time - 1);
      this.setState({time});
      if (time <= 0) {
        this.onStopTimer();
      }
    }, 1000)
  }

  onStopTimer() {
    this.timerRef.current && clearInterval(this.timerRef.current);
  }

  render() {
    return (
      <div className="mt-100 layout-column align-items-center justify-content-center">
         <div className="timer-value" data-testid="timer-value">{this.state.time}</div>
         <button
          className="large"
          data-testid="stop-button"
          onClick={this.onStopTimer.bind(this)}
         >
          Stop Timer
          </button>
      </div>
    );
  }
}

export default Timer;

/* Functional Component */
// const Timer = (props) => {
//   const [time, setTime] = useState(props.initial);
//   const timer = userRef();

//   useEffect(() => {
//     timer.current = setInterval(() => {
//       setTime(time - 1);
//       if (time <= 0) {
//         onStopTimer();
//       }
//     }, 1000)
//   }, [timer]);

//   const onStopTimer = () => {
//     timer.current && clearInterval(timer.current);
//   }

//     return (
//       <div className="mt-100 layout-column align-items-center justify-content-center">
//          <div className="timer-value" data-testid="timer-value">{time}</div>
//          <button
//           className="large"
//           data-testid="stop-button"
//           onClick={onStopTimer}
//          >
//           Stop Timer
//           </button>
//       </div>
//     );
// }
// export default Timer;
