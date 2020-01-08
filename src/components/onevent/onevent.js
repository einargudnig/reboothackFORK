import React, { Component } from 'react';
import style from './onevent.css';
import Schedule from './schedule/schedule';
import Challenges from './challenges/challenges';
import Judges from './judges/judges';
import Location from './location/location';
import Events from './events/events'

class OnEvent extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  
  render() {
    return (
      <div className={style.bodyStyle}>
        <div className={style.divStyling+" container"}>
          <br />
          <h1 className={style.headerStyle+" "+style.text_align}>Reboot Hack 2020</h1>
          <div className={"row"}>
            <div className={"col-lg-8 col-sm-12"}>
              <Challenges /> 
            </div>
            <div className={"col-lg-4 col-sm-12"}>
              <Events />
            </div>
          </div>
          
          {/* <div className={"row"}>
            <div className={"col-12"}>
              <Schedule />
            </div>
          </div> */}
          {/* <div className={"row"}>
            <div className={"col-12"}>
              <Judges />
            </div>
          </div>
          <div className={"row"}>
            <div className={"col-12"}>
              <Location />
            </div>
          </div>*/}
        </div> 
      </div>
    );
  }
}


export default OnEvent;