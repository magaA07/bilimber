import logo from "../../header-profile.png";
import darklight from "../../dark-light.png";
import { useEffect, useState } from "react";
import TestCard from "./TestCard";
import SelectQuestion from "./SelectQuestions";
import { useNavigate } from "react-router-dom";
import TimerTest from "./TimerTest";
import TestButtons from "./TestButtons";
import styles from "./TestPage.module.css"

export default function TestPage() {
  const navigate = useNavigate();
  const [questions, setQuestions] = useState([
    {
      id: 1,
      question: "В каком году основали Казахское ханство?",
      options: ["1455 год", "1465 год", "1466 год", "1565 год"],
      correctAnswer: 2,
    },
    {
      id: 3,
      question: "Сколько будет 2 + 2",
      options: ["3", "4", "2", "1"],
      correctAnswer: 2,
    },
    {
      id: 5,
      question: "Сколько будет 2^3",
      options: ["9", "3", "8", "1"],
      correctAnswer: 3,
    },
    {
      id: 9,
      question: "What is the capital of UK",
      options: ["Moscow", "Astana", "London", "Paris"],
      correctAnswer: 3,
    },
    {
      id: 10,
      question: "What is the capital of France",
      options: ["Moscow", "Astana", "London", "Paris"],
      correctAnswer: 4,
    },
    {
      id: 14,
      question: "What is the capital of Austria",
      options: ["Moscow", "Viena", "London", "Paris"],
      correctAnswer: 2,
    },
    
  ]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});

  // useEffect(() => {
  //     async function getQuestions() {
  //         try {
  //             const response = await fetch('http://localhost:5000/questions')
  //             const data = await response.json()
  //             setQuestions([...data])

  //         }catch(err) {
  //             console.log(err)
  //         }
  //     }
  //     getQuestions()
  // }, [])

  function changeQuestion(questionNum) {
    setCurrentQuestion(questionNum);
  }

  function saveQuestions(myAnswers) {
    setAnswers(myAnswers);
  }

  function finishTest() {
    let correct = 0;
    questions.map((e, i) => {
      if (Number(e.correctAnswer) - 1 === answers[i + 1]) correct += 1;
    });
    console.log("correct answers:", correct);

    console.log("finished", answers);
    localStorage.setItem("answers", answers);
  }

  function clicked(i) {
    if (currentQuestion === i) return true;
    return false;
  }

  return (
    <>
      <header className={styles.header}>
        <div className={styles.bilimBer}>
          <h1>Bilim Ber</h1>
        </div>
        <div className={styles.headerBtn}>
          <div className={styles.sunDark}>
            <img src={darklight} alt="" />
          </div>
          <div className={styles.userLogo}>
            <img src={logo} alt="" />
          </div>
          <div className={styles.save}>
            <h2>Выйти</h2>
          </div>
        </div>
      </header>
      <main className={styles.mainContainer}  >
        <section className={styles.mainCard}>
          <div className={styles.mainCardTop}>
            <div className={styles.leftConatiner}>
              <div className={styles.leftConatinerTop} >
                <div className={styles.testName}>
                  <p>Тест по предмету</p>
                </div>
                <div className={styles.timer}>
                  <TimerTest finishTest={finishTest} />
                </div>
              </div>

              <TestCard
                saveQuestions={saveQuestions}
                test={questions[currentQuestion]}
                currentQuestion={currentQuestion}
              />
              {console.log(questions[currentQuestion])}
              <TestButtons
                changeQuestion={changeQuestion}
                currentQuestion={currentQuestion}
              />
            </div>

            <SelectQuestion
              clicked={clicked}
              finishTest={finishTest}
              questionsNum={questions.length}
              changeQuestion={changeQuestion}
            />
            {console.log(currentQuestion)}
          </div>
        </section>
      </main>
    </>
  );
}
