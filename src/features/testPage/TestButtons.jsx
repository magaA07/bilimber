import styles from "./TestPage.module.css"

export default function TestButtons({changeQuestion, currentQuestion}) {
    
    function toBack() {
        return (currentQuestion > 0) ? currentQuestion - 1 : 0
    }
    function toForward() {
        return (currentQuestion < 14) ? currentQuestion + 1 : 14
    }
    return (
        <div className={styles.navBtns}>
            <button onClick={() => changeQuestion(toBack())}>Предыдущий вопрос</button>
            <button onClick={() => changeQuestion(toForward())}>Следующий вопрос</button>
        </div>
    )
}