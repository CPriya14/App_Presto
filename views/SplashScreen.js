import React, { Component } from 'react';
import styles from './App.css';


class SplashScreen extends Component {
  constructor(state){
    super(state);
    setTimeout(function() { 
      window.__runDuiCallback(JSON.stringify({tag:"SplashScreenRendered"}))
    }.bind(this), 2000);
  }
  render() {
    return (
      <div className={styles.background}>
        <div className={styles.App} style={{ 'background-image': 'url("../dist/background.svg")'}}>
           <div style={{'text-align':'top'}}>
            <h1 className={styles.AppTitle}>Book</h1>
            <img src="../dist/my.png" height="100" width="100" />
            <h1> Show</h1>
            </div>
            <p className={styles.AppIntro}>
            Book Movie Tickets
          </p>
        </div>
      </div>
    );
  }
}

export default SplashScreen;
