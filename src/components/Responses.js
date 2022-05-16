import react from "react";
import ResponseCard from "./ResponseCard";

const Responses = (props) => {
    const { results } = props;
    return (
        <div>
            {
                results.map((result, idx) => (
                    <div key={idx}>
                        <ResponseCard result={result} />
                    </div>
                ))
            }
        </div>
    )
}

export default Responses;
