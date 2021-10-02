import React, {useState, useEffect} from "react"

function App() {

    const [text, setText] = useState('')
    const [timeRemaining, setTimeRemaining] = useState(10)
    const [isTimeRunnning, setIsTimeRunning] = useState(false)

    function handleChange(event) {
        const {value} = event.target
        setText(value)
    }

    function calculateWordCount(wordsTyped) {
        const filteredWords = wordsTyped.trim().split(' ').filter(word => word!=='')
        return filteredWords.length
    }

    useEffect(()=>{
        if(isTimeRunnning && timeRemaining > 0) {
            setTimeout(()=>{
                setTimeRemaining((timeRemaining) => timeRemaining-1)
            }, 1000)
        } else if (timeRemaining === 0) {
            setIsTimeRunning(false)
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
            <button onClick = {()=> setIsTimeRunning(true)}>Start</button>
            <h1>Word count: 'n'</h1>
        </div>
    )
}

export default App