import React, { useState, useEffect } from "react";
import styles from "./TestPage.module.css"

export default function TimerTest({finishTest}) {
    
    const [time, setTime] = useState(15)
    useEffect(() => {
        if (time <= 0){ 
            finishTest()
            return;
        }
        const interval = setInterval(() => {
          setTime(prevTime => prevTime - 1);
        }, 1000);
        
        return () => clearInterval(interval);
      }, [time]);
    return (
        <div className={styles.timer}>
            <p>{time}</p>
        </div>
    )
}