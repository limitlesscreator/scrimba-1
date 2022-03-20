import {useState} from "react";

export const CreateTweet = ({textInput, userInputHandler, submitHandler, setTextInput}) => {




    return (
        <form>
            <textarea
                value={textInput}
                onChange={userInputHandler}
                cols={50}
                rows={5}>
            </textarea>
            <button onClick={submitHandler}>Submit</button>
            <h2 onClick={() => setTextInput('')}>{textInput}</h2>
        </form>
    );
};

