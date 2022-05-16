import react from "react";

const ResponseCard = (props) => {
    const { prompt, response } = props.result;
   
    return (
        <div>
            <h4>Prompt:</h4>
            <p>{prompt}</p>
            <h4>Response:</h4>
            <p>{response}</p>
        </div>
    )
}

export default ResponseCard;