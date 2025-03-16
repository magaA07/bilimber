import  React, {useState} from 'react'
import styles from "./TestPage.module.css"


export default function TestCard({test, saveQuestions}) {
    const [selectedAnswer, setSelectedAnswer] = useState()
    const [answers, setAnswers] = useState({})
    const [checked, setChecked] = useState(false)

    function saveAnswers(questionId, answerId) {
        
        // setAnswers({...answers, [questionId]: answerId})
        // saveQuestions(answers)

        setAnswers((prevAnswers) => {
            const updatedAnswers = { ...prevAnswers, [questionId]: answerId };
            saveQuestions(updatedAnswers); 
            return updatedAnswers;
          });
          
    }
    function check(id, index) {

        return answers[id] === index
    }
    
    return (
        <div className={styles.testCard} >
            <div>
                {test.question}
            </div>
                    {
                        test.options.map((answers, i) => (
                            <label htmlFor={`${test.id}-${i}`}>
                                {/* <button onClick={() => saveAnswers(test.id, i)}>{answers}</button> */}

                                <input 
                                type="radio"
                                id={`${test.id}-${i}`}   
                                onChange={() => saveAnswers(test.id, i)} 
                                name={`question-${test.id}`}
                                checked={check(test.id, i)}
                                />
                                {answers}
                            </label>
                            
                            
                        ))
                    }
                    {console.log('answer', answers)}
        </div>
    )
}