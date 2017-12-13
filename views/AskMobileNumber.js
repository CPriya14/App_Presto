import React, { Component } from 'react';
import styles from './App.css';

class Header extends Component {
  render() {
    return (
      <div className={styles.operator}>
        <h1 className={styles.header}>{this.props.name}</h1>
      </div>
    );
  }
}

class AskMobileNumber extends Component {
  constructor(state) {
    super(state);
    this.onMobileNumberEntered = this.onMobileNumberEntered.bind(this);
    this.onBackClick = this.onBackClick.bind(this);
  }

  onBackClick (){
    window.__runDuiCallback(JSON.stringify({tag:"AskMobileNumberScreenAbort"}))
  }

  onMobileNumberEntered() {
      window.__runDuiCallback(JSON.stringify({
        tag:"SubmitMobileNumber",
        contents:document.getElementsByName('mobileNumber')[0].value
      }))
  }

  render() {
    return (
      <div className = {styles.background}>
        <div className = {styles.AskMobileNumber}>
          <div className={styles.headerWithArrow}>
            <div className = {styles.operator}>
              <img  onClick = {this.onBackClick} 
                className = {styles.backImage} 
                src={require("../dist/icon1.png")} 
                alt = {require("../dist/logo.svg")} 
                align = "left"/>
            </div>
            <Header name="Movie Shows"/>
          </div>
          <div className = {styles.body}>
            <div className={styles.rows}>
              <div style={{'display':'flex'}}>
              <div style={{'margin':'auto'}}>
          <img className = {styles.movieimage}
            src="../dist/thor.png" />
             <h3>Thor: Ragnarok</h3>
            </div>
            <div style={{'margin':'auto'}}>
            <img className = {styles.movieimage}
            src="../dist/firangi.png" />
            <h3>Firangi</h3>
          </div>
          </div>
          <br/>
          <div style={{'display':'flex'}}>
          <div style={{'margin':'auto'}}>
          <img className = {styles.movieimage} 
            src="../dist/justiceleague.png" />
            <h3>Justice League</h3>
            </div>
            <div style={{'margin':'auto'}}>
            <img className = {styles.movieimage} 
            src="../dist/star.png" />
            <h3>Star Wars</h3>
          </div>
          </div>
          </div>
          </div>
          <div>
          <button onClick = {this.onMobileNumberEntered}
            className = {styles.button} 
            type="button">
            Next
          </button>
          </div>
        </div>
      </div>
    );
  }
}

export default AskMobileNumber;
