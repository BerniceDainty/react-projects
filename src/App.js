import React, {useState, useEffect} from "react"

function App() {

    const [text, setText] = useState('')
    const [timeRemaining, setTimeRemaining] = useState(10)
    const [isTimeRunnning, setIsTimeRunning] = useState(false)
    const [wordCount, setWordCount] = useState(0)

    function handleChange(event) {
        const {value} = event.target
        setText(value)
    }

    function calculateWordCount(wordsTyped) {
        const filteredWords = wordsTyped.trim().split(' ').filter(word => word!=='')
        return filteredWords.length
    }

    function startGame() {
        setTimeRemaining(10)
        setIsTimeRunning(true)
        setWordCount(0)
        setText('')
    }

    function endGame() {
        setIsTimeRunning(false)
        setWordCount(calculateWordCount(text))
    }

    useEffect(()=>{
        if(isTimeRunnning && timeRemaining > 0) {
            setTimeout(()=>{
                setTimeRemaining((timeRemaining) => timeRemaining-1)
            }, 1000)
        } else if (timeRemaining === 0) {
            endGame()
        }
    },[timeRemaining, isTimeRunnning])

    return (
        <div>
            <h1>How fast do you type?</h1>
            <textarea 
                onChange = {handleChange}
                value = {text}
            />
            <h4>Time remaining: {timeRemaining}</h4>
            <button onClick = {startGame}>Start</button>
            <h1>Word count: {wordCount}</h1>
        </div>
    )
}

export default App