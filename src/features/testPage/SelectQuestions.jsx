import styles from "./TestPage.module.css"
import React, {useState} from 'react'

export default function SelectQuestion({changeQuestion, questionsNum, finishTest, clicked}) {


    function finish() {
        
        finishTest()
    }
    return (
        <div className={styles.questionTrackerContainer}>
                            
                        <div className={styles.questionsContainer} >
                             <div className={styles.questionText}>
                                <p>Вопросы</p>
                             </div>
                             
                             <div className={styles.questions} >
                                
                            
                            {
                                Array.from({length: questionsNum}, (_, i) => (
                                    (clicked(i)) 
                                        ?
                                        <button style={{backgroundColor: 'grey'}} onClick={() => changeQuestion(i)}>{i + 1}</button>
                                        :
                                        <button onClick={() => changeQuestion(i)}>{i + 1}</button>
                                ))                                
                            }

                            </div>
                        </div>
                        <div className={styles.finishBtn} >
                                <button onClick={() => finish()}>Завершить попытку</button>
                        </div>
        </div>  
    )
}