import React from "react";

const ResponseCard = (props) => {
    const { prompt, response } = props.result;

    return (
        <div className="response-card">
            <div className="card-row">
                <h4>Prompt:</h4>
                <p>{prompt}</p>
            </div>
            <div className="card-row">
                <h4>Response:</h4>
                <p>{response}</p>
            </div>
        </div>
    )
}

export default ResponseCard;