import React from 'react';
import EngineSelection from './EngineSelection';

const PromptForm = (props) => {
    const { handleChange, handleSubmit, handleSelect, currentPrompt, isLoading } = props;

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="currentPrompt"><b>Enter Prompt:</b></label>
            <br />
            <textarea
                name="currentPrompt"
                value={currentPrompt}
                onChange={handleChange}
            />
            <br />
            <div className="submit-button">
                <EngineSelection handleSelect={handleSelect} />
                <button type="submit" disabled={isLoading}>Submit</button>
            </div>
        </form>
    );
}

export default PromptForm;
