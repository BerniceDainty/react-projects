import React, {useState} from "react"

function App() {

    const [text, setText] = useState('')

    function handleChange(event) {
        const {value} = event.target
        setText(value)
    }

    function calculateWordCount(wordsTyped) {
        const filteredWords = wordsTyped.trim().split(' ').filter(word => word!=='')
        return filteredWords.length
    }

    return (
        <div>
            <h1>How fast do you type?</h1>
            <textarea 
                onChange = {handleChange}
                value = {text}
            />
            <h4>Time remaining: XYZ</h4>
            <button onClick = {()=> calculateWordCount(text)}>Start</button>
            <h1>Word count: 'n'</h1>
        </div>
    )
}

export default App