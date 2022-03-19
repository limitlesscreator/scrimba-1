import {useState} from "react";

export const CreateTweet = () => {

    const [textInput, setTextInput] = useState('')
    const userInputHandler = (e) => {
        setTextInput(e.target.value)
    }

    return (
        <form>
            <textarea
                value={textInput}
                onChange={userInputHandler}
                cols={50}
                rows={5}></textarea>
            <button>Submit</button>
            <h2 onClick={() => setTextInput('')}>{textInput}</h2>
        </form>
    );
};

