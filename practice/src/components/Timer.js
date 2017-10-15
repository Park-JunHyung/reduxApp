import React, { Component } from 'react';

class Timer extends Component{
  constructor(props) {
    super(props);
    this.state = { time: {}, seconds: 0 };
    this.timer = 0;
    this.startTimer = this.startTimer.bind(this);
    this.countDown = this.countDown.bind(this);
  }

  secondsToTime(secs){
    let hours = Math.floor(secs / (60 * 60));

    let divisor_for_minutes = secs % (60 * 60);
    let minutes = Math.floor(divisor_for_minutes / 60);

    let divisor_for_seconds = divisor_for_minutes % 60;
    let seconds = Math.ceil(divisor_for_seconds);

    let obj = {
      "h": hours,
      "m": minutes,
      "s": seconds
    };
    return obj;
  }

  componentDidMount() {
    let timeLeftVar = this.secondsToTime(this.state.seconds);
    this.setState({ time: timeLeftVar });
  }

  startTimer() {
    let seconds = this.props.store.getState().counter.value;
    this.setState({
      time: this.secondsToTime(seconds),
      seconds: seconds,
    });
    if(seconds==0){
      alert("시간을 입력하세요");
      return;
    }
    if (this.timer == 0) {
      this.timer = setInterval(this.countDown, 1000);
    }
  }

  countDown() {

    let seconds = this.state.seconds - 1;
    this.setState({
      time: this.secondsToTime(seconds),
      seconds: seconds,
    });

    if (seconds == 0) {
      clearInterval(this.timer);
      alert("TIMEOUT!!");
      this.timer=0;
    }
  }

  render() {
    return(
      <div>
        <button onClick={this.startTimer}>Start</button><br/>
        <p class="result">{this.state.time.h}시간 {this.state.time.m}분 {this.state.time.s}초 남음</p>
      </div>
    );
  }
}
export default Timer;
