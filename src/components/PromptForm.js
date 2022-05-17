import React from 'react';
import EngineSelection from './EngineSelection';

const PromptForm = (props) => {
    const { 
        handleChange, 
        handleSubmit, 
        handleSelect, 
        handleSurprise,
        currentPrompt, 
        isLoading 
    } = props;

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-header">
                <label htmlFor="currentPrompt"><b>Enter Prompt:</b></label>
                <button type="button" onClick={handleSurprise}>Surprise me!</button>
            </div>
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
