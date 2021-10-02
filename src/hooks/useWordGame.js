import {useState, useEffect, useRef} from "react"

function useWordGame(starTime = 10) {

    const [text, setText] = useState('')
    const [timeRemaining, setTimeRemaining] = useState(starTime)
    const [isTimeRunnning, setIsTimeRunning] = useState(false)
    const [wordCount, setWordCount] = useState(0)
    const textboxRef = useRef(null)

    function handleChange(event) {
        const {value} = event.target
        setText(value)
    }

    function calculateWordCount(wordsTyped) {
        const filteredWords = wordsTyped.trim().split(' ').filter(word => word!=='')
        return filteredWords.length
    }

    function startGame() {
        setTimeRemaining(starTime)
        setIsTimeRunning(true)
        setWordCount(0)
        setText('')
        textboxRef.current.disabled = false
        /**
         * The above code enables the input box manually because, all the react methods are performed
         * asynchronously which in our code makes the below line of focusing the textbox useless as the
         * textbox is not enabled ((i.e) isTimeRunning is still 'false' when the below line executes)
         */
        textboxRef.current.focus()
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
    }, [timeRemaining, isTimeRunnning] )

    return {textboxRef, handleChange, text, isTimeRunnning, timeRemaining, startGame, wordCount}

}

export default useWordGame