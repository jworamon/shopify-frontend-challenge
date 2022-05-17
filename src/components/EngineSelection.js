import React from "react";

const EngineSelection = (props) => {
    const { handleSelect } = props;

    return (
        <div className="select-engine">
            <label htmlFor="AI-Engine">AI Engine: </label>
            <select name="engine" onChange={handleSelect}>
                <option value="text-curie-001">text-curie-001</option>
                <option value="text-davinci-002">text-davinci-002</option>
                <option value="text-babbage-001	">text-babbage-001	</option>
                <option value="text-ada-001">text-ada-001</option>
            </select>
        </div>
    )
}

export default EngineSelection;
