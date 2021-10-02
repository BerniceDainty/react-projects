import React from "react"
import useWordGame from "./hooks/useWordGame"

function App() {

    const {
        textboxRef,
        handleChange,
        text,
        isTimeRunnning,
        timeRemaining,
        startGame,
        wordCount
    } = useWordGame()

    return (
        <div>
            <h1>How fast do you type?</h1>
            <textarea 
                ref = {textboxRef}
                onChange = {handleChange}
                value = {text}
                disabled = {!isTimeRunnning}
            />
            <h4>Time remaining: {timeRemaining}</h4>
            <button onClick = {startGame} disabled={isTimeRunnning}>Start</button>
            <h1>Word count: {wordCount}</h1>
        </div>
    )
}

export default App